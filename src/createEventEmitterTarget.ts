import { EVENTNAME, EVENTLISTENER } from "./index";
import { toprimitive } from "./toprimitive";
import { toStringTag } from "./toStringTag";
import { assertEVENTNAME } from "./assertEVENTNAME";
import { assertEVENTLISTENER } from "./assertEVENTLISTENER";
export type EventEmitterTargetOptions = { sync?: boolean };
export interface EventEmitterTarget<
    EventMap extends Record<string | symbol, any> = Record<string | symbol, any>
> {
    sync: boolean;
    [Symbol.toPrimitive]: () => string;
    [Symbol.toStringTag]: string;
    [Symbol.iterator]: EventEmitterTarget<EventMap>["entries"];
    entries: <K extends keyof EventMap>() => IterableIterator<
        [K, ((event: EventMap[K]) => void)[]]
    >;
    listenerCount: (name: keyof EventMap) => number;
    clear: (name: keyof EventMap) => void;
    removeAllListeners: (name: keyof EventMap) => void;
    on: <K extends keyof EventMap>(
        name: K,
        callback: (event: EventMap[K]) => void
    ) => void;
    addListener: EventEmitterTarget<EventMap>["on"];
    off: EventEmitterTarget<EventMap>["on"];
    removeListener: EventEmitterTarget<EventMap>["on"];
    once: EventEmitterTarget<EventMap>["on"];
    emit: <K extends keyof EventMap>(
        name: K,
        event: EventMap[K]
    ) => Promise<void>;
    dispatch: EventEmitterTarget<EventMap>["emit"];
    eventNames: () => (keyof EventMap)[];
    listeners: <K extends keyof EventMap>(
        name: K
    ) => ((event: EventMap[K]) => void)[];
}

export function createEventEmitterTarget<
        EventMap extends Record<string | symbol, any> = Record<string | symbol, any>
>({
    sync = false,
}: EventEmitterTargetOptions = {}): EventEmitterTarget<EventMap> {
    const 监听器回调映射 = new Map<EVENTNAME, Set<EVENTLISTENER>>();
    const 源回调到一次包装 = new WeakMap<EVENTLISTENER, EVENTLISTENER>();
    function 获取监听器集合(name: EVENTNAME): Set<EVENTLISTENER> {
        let 监听器集合: Set<EVENTLISTENER> | undefined =
            监听器回调映射.get(name);
        if (!监听器集合) {
            监听器集合 = new Set();
            监听器回调映射.set(name, 监听器集合);
        }
        return 监听器集合;
    }

    function clear(name: EVENTNAME): void {
        assertEVENTNAME(name);
        if (监听器回调映射.has(name)) {
            const 监听器集合 = 获取监听器集合(name);
            监听器集合.clear();
        }
    }
    async function emit(name: EVENTNAME, event: any): Promise<void> {
        assertEVENTNAME(name);
        if (监听器回调映射.has(name)) {
            const 监听器集合 = 获取监听器集合(name);
            const errs: unknown[] = (
                await Promise.all(
                    Array.from(监听器集合).map((listener) =>
                        Promise.resolve(listener(event)).catch((e) => e)
                    )
                )
            ).filter((a) => typeof a !== "undefined");
            // 监听器集合.forEach((listener) => {
            // for (const listener of 监听器集合) {
            //     if (sync) {
            //         try {
            //             listener(event);
            //         } catch (err) {
            //             errs.push(err);
            //         }
            //     } else {
            //         Promise.resolve()
            //             .then(() => {
            //                 listener(event);
            //             })
            //             .catch((err) => {
            //                 errs.push(err);
            //             });
            //     }
            // }
            // });
            if (errs.length === 1) {
                throw errs[0];
            } else if (errs.length > 0) {
                throw errs;
            }
        }
    }
    function once(name: EVENTNAME, callback: EVENTLISTENER): void {
        assertEVENTNAME(name);
        assertEVENTLISTENER(callback);
        let fired = false;
        let wrapped = 源回调到一次包装.get(callback);
        if (!wrapped) {
            const 一次包装 = (event?: any) => {
                offraw(name, 一次包装);
                offraw(name, callback);
                if (!fired) {
                    fired = true;
                    callback(event);
                }
            };
            wrapped = 一次包装;
            源回调到一次包装.set(callback, wrapped);
        }
        offraw(name, callback);
        on(name, wrapped);
    }
    function on(name: EVENTNAME, callback: EVENTLISTENER): void {
        assertEVENTNAME(name);
        assertEVENTLISTENER(callback);
        const 监听器集合 = 获取监听器集合(name);
        监听器集合.add(callback);
    }
    function offraw(name: EVENTNAME, callback: EVENTLISTENER): void {
        const 监听器集合 = 获取监听器集合(name);
        监听器集合.delete(callback);
    }
    function offwrap(name: EVENTNAME, callback: EVENTLISTENER): void {
        const 监听器集合 = 获取监听器集合(name);
        let 一次包装 = 源回调到一次包装.get(callback);
        if (一次包装) {
            监听器集合.delete(一次包装);
        }
    }
    function off(name: EVENTNAME, callback: EVENTLISTENER): void {
        assertEVENTNAME(name);
        assertEVENTLISTENER(callback);

        offraw(name, callback);
        offwrap(name, callback);
    }

    function eventNames(): EVENTNAME[] {
        return [...监听器回调映射.keys()];
    }
    function listeners(name: EVENTNAME): EVENTLISTENER[] {
        assertEVENTNAME(name);
        if (监听器回调映射.has(name)) {
            const 监听器集合 = 获取监听器集合(name);
            return [...监听器集合];
        } else {
            return [];
        }
    }
    function listenerCount(name: EVENTNAME): number {
        assertEVENTNAME(name);
        if (监听器回调映射.has(name)) {
            const 监听器集合 = 获取监听器集合(name);
            return 监听器集合.size;
        } else {
            return 0;
        }
    }

    function iterator(): IterableIterator<[EVENTNAME, EVENTLISTENER[]]> {
        let resultarr: Array<[EVENTNAME, EVENTLISTENER[]]> = [
            ...监听器回调映射,
        ].map(([key, value]) => {
            return [key, [...value]] as [EVENTNAME, EVENTLISTENER[]];
        });

        return resultarr[Symbol.iterator]();
    }
    const eventtarget: EventEmitterTarget<EventMap> = {
        [Symbol.toPrimitive]: toprimitive,

        [Symbol.toStringTag]: toStringTag,
        [Symbol.iterator]: iterator,
        entries: iterator,
        listenerCount,
        clear,
        removeAllListeners: clear,
        on,
        addListener: on,
        off,
        removeListener: off,
        once,
        emit,
        dispatch: emit,
        eventNames,
        listeners,
        sync,
    } as EventEmitterTarget<EventMap>;
    return eventtarget;
}
