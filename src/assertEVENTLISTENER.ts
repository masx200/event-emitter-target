import { EVENTLISTENER } from "./index";

export function assertEVENTLISTENER(
    callback: any
): asserts callback is EVENTLISTENER {
    if ("function" !== typeof callback) {
        throw new TypeError(
            " EVENTLISTENER expected: (event?: any) => void;but invalid:" +
                callback
        );
    }
}
