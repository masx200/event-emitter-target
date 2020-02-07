# event-emitter-target

用Typescript函数式编程写成的发布订阅事件机制模块

添加事件监听器有自动去重功能
 
# API

https://github.com/masx200/event-emitter-target/blob/master/dist/index.d.ts

```ts
interface EventEmitterTargetConstructor {
    new (): EventEmitterTarget;
    (this: EventEmitterTarget | undefined): EventEmitterTarget;
}
type EventEmitterTarget = ReturnType<typeof createEventEmitterTarget>;
type EVENTNAME = string | symbol;
type EVENTLISTENER = (event?: any) => void;
declare function createEventEmitterTarget(): {
    [Symbol.toStringTag]: string;
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


```
## emitter.listenerCount(eventName)


Returns the number of listeners listening to the event named eventName.

## emitter.clear(eventName)

Alias for emitter.removeAllListeners(eventName)

## emitter.removeAllListeners(eventName)

Removes all listeners of the specified eventName.

It is bad practice to remove listeners added elsewhere in the code, particularly when the EventEmitter instance was created by some other component or module (e.g. sockets or file streams).



## emitter.on(eventName, listener)

Adds the listener function to the end of the listeners array for the event named eventName.  Checks are made to see if the listener has already been added. Multiple calls passing the same combination of eventName and listener will NOT result in the listener being added, and called, multiple times.

## emitter.addListener(eventName, listener)

Alias for emitter.on(eventName, listener)

## emitter.off(eventName, listener)

Alias for emitter.removeListener(eventName, listener).



## emitter.removeListener(eventName, listener)

Removes the specified listener from the listener array for the event named eventName.

removeListener() will remove, at most, one instance of a listener from the listener array. If any single listener has been added multiple times to the listener array for the specified eventName, then removeListener() need NOT be called multiple times to remove each instance.
