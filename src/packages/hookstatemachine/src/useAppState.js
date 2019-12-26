import {useContext} from "react";
import AppContext from "./AppContext";

const useAppState = container => {
    const appContext = useContext(AppContext);

    // Check if we even have an appContext
    if (!appContext) {
        throw new Error("State Machine cannot find context.");
    }

    // return entire state if there's no parameter
    if (!container) return appContext;

    const containerInstance = appContext.get(container);
    if (containerInstance === undefined) {
        console.error("containers available", appContext.keys());
        throw Error(
            `AppState Container '${container}' does not exist. See the console for available containers.`
        );
    }
    return containerInstance;
};

export default useAppState;
