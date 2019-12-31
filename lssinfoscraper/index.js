const rp = require("request-promise");
const $ = require("cheerio");
var fs = require("fs");
const url = "http://lssnfo.com/?bl=";
const prettier = require("prettier");

let $body;

const init = data => {
  $body = $.load(data);
};

const getChallengeCells = () => {
  return $body("table tr td.challengeCell a");
};

const parseModal = id => {
  const modalData = $body(`.cssmodal[id='${id}']`);
  const rewardList = $(modalData)
    .find(".dcRewardList a")
    .children();

  let currentT;
  let collect = { T1: [], T2: [], T3: [] };
  rewardList.each((i, item) => {
    const l = $(item).text();
    if (l.length === 2) {
      currentT = l;
    } else {
      collect[currentT].push($(item).text());
    }
  });

  return collect;
};

const parseCell = ($cellData, count) => {
  const id = parseInt($cellData.attr("href").substr(1), 10);
  const tierPoints = $cellData
    .find(".tierPoints")
    .text()
    .split("/")
    .map(v => v.trim());

  const objectives = $cellData
    .find("dd.dcObjective")
    .map((i, item) => $(item).text())
    .toArray()
    .map(o => {
      return {
        name: o,
        type: o.replace(/ *\([^)]*\) */g, "")
      };
    });

  return {
    id,
    slot: Math.floor(count / 7) % 8,
    dow: count % 7,
    rewards: parseModal(id),
    tierPoints,
    objectives
  };
};

const scrapeAndWrite = async id => {
  //const req = fs.readFileSync("./test.html", "utf8");
  console.log("processing b" + id);
  const req = await rp(url + id);

  init(req);
  const rows = getChallengeCells(req);
  let count = 0;

  const data = rows
    .map((i, item) => {
      const pc = parseCell($(item), count);
      count++;
      return pc;
    })
    .toArray();

  const makeJS = "export default " + JSON.stringify(data);

  const prettified = prettier.format(makeJS, { parser: "babel" });

  fs.writeFileSync("../src/generated/" + id + ".js", prettified);
};

(async () => {
  await scrapeAndWrite(6);

  await scrapeAndWrite(9);
  await scrapeAndWrite(11);
  await scrapeAndWrite(14);
  await scrapeAndWrite(17);
  await scrapeAndWrite(20);
  await scrapeAndWrite(23);
  await scrapeAndWrite(25);

  console.log("DONE");
})();
