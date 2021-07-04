import { EVENTNAME } from "./index";

export function assertEVENTNAME(name: any): asserts name is EVENTNAME {
    if ("string" !== typeof name && "symbol" !== typeof name) {
        throw new TypeError(
            " EVENTNAME expected: string | symbol;but invalid :" + name
        );
    }
}
