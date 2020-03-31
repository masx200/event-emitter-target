declare function toprimitive(): string;
declare function createEventEmitterTarget(): {
    [Symbol.toPrimitive]: typeof toprimitive;
    [Symbol.toStringTag]: string;
    [Symbol.iterator]: () => IterableIterator<[EVENTNAME, EVENTLISTENER[]]>;
    entries: () => IterableIterator<[EVENTNAME, EVENTLISTENER[]]>;
    listenerCount: (name: EVENTNAME) => number;
    clear: (name: EVENTNAME) => void;
    removeAllListeners: (name: EVENTNAME) => void;
    on: (name: EVENTNAME, callback: EVENTLISTENER) => void;
    addListener: (name: EVENTNAME, callback: EVENTLISTENER) => void;
    off: (name: EVENTNAME, callback: EVENTLISTENER) => void;
    removeListener: (name: EVENTNAME, callback: EVENTLISTENER) => void;
    once: (name: EVENTNAME, callback: EVENTLISTENER) => void;
    emit: (name: EVENTNAME, event?: any) => void;
    dispatch: (name: EVENTNAME, event?: any) => void;
    eventNames: () => EVENTNAME[];
    listeners: (name: EVENTNAME) => EVENTLISTENER[];
};
type EventEmitterTarget = ReturnType<typeof createEventEmitterTarget>;
interface EventEmitterTargetConstructor {
    new (): EventEmitterTarget;
    (): EventEmitterTarget;
}
declare const EventEmitterTargetClass: EventEmitterTargetConstructor;
type EVENTNAME = string | symbol;
type EVENTLISTENER = (event?: any) => void;
export { EventEmitterTargetClass as default, EventEmitterTarget, EventEmitterTargetConstructor, EVENTNAME, EVENTLISTENER };
