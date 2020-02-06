# event-emitter-target

用函数式编程写成的发布订阅事件机制模块
 
# API

```ts
type EVENTNAME = string | symbol;
type EVENTLISTENER = (event?: any) => void;
declare function createeventtarget(): {
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
