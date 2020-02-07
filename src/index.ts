export type EventEmitterTarget = ReturnType<typeof createEventEmitterTarget>;

export default EventEmitterTargetConstructor

const EventEmitterTargetConstructor:{
new():EventEmitterTarget,

}&createEventEmitterTarget

=function EventEmitterTargetConstructor(
  this: EventEmitterTarget | undefined
): EventEmitterTarget {
  const eventemittertarget = createEventEmitterTarget();
  if (this && this instanceof EventEmitterTargetConstructor) {
    Object.assign(this, eventemittertarget);
    return this;
  } else {
    return new  EventEmitterTargetConstructor;
  }
}
export type EVENTNAME = string | symbol;
export type EVENTLISTENER = (event?: any) => void;

 function createEventEmitterTarget() {
  const 监听器回调映射 = new Map<EVENTNAME, Set<EVENTLISTENER>>();
  const 源回调到一次包装 = new WeakMap<EVENTLISTENER, EVENTLISTENER>();
  function 获取监听器集合(name: EVENTNAME): Set<EVENTLISTENER> {
    let 监听器集合: Set<EVENTLISTENER> | undefined = 监听器回调映射.get(name);
    if (!监听器集合) {
      监听器集合 = new Set();
      监听器回调映射.set(name, 监听器集合);
    }
    return 监听器集合;
  }

  function clear(name: EVENTNAME) {
    assertEVENTNAME(name);
    if (监听器回调映射.has(name)) {
      const 监听器集合 = 获取监听器集合(name);
      监听器集合.clear();
    }
  }
  function emit(name: EVENTNAME, event?: any) {
    assertEVENTNAME(name);
    if (监听器回调映射.has(name)) {
      const 监听器集合 = 获取监听器集合(name);
      监听器集合.forEach(async listener => {
        listener(event);
      });
    }
  }
  function once(name: EVENTNAME, callback: EVENTLISTENER) {
    assertEVENTNAME(name);
    assertEVENTLISTENER(callback);
    let fired = false;
    let wrapped = 源回调到一次包装.get(callback);
    if (!wrapped) {
      const 一次包装 = (event?: any) => {
        off(name, 一次包装);
        if (!fired) {
          fired = true;
          callback(event);
        }
      };
      wrapped = 一次包装;
      源回调到一次包装.set(callback, wrapped);
    }

    on(name, wrapped);
  }
  function on(name: EVENTNAME, callback: EVENTLISTENER) {
    assertEVENTNAME(name);
    assertEVENTLISTENER(callback);
    const 监听器集合 = 获取监听器集合(name);
    监听器集合.add(callback);
  }
  function off(name: EVENTNAME, callback: EVENTLISTENER) {
    assertEVENTNAME(name);
    assertEVENTLISTENER(callback);

    const 监听器集合 = 获取监听器集合(name);
    监听器集合.delete(callback);
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
  const eventtarget = {
    [Symbol.toStringTag]: "EventEmitterTarget",
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
    listeners
  };
  return eventtarget;
}
function assertEVENTNAME(name: any): asserts name is EVENTNAME {
  if ("string" !== typeof name && "symbol" !== typeof name) {
    throw new TypeError(
      " EVENTNAME expected: string | symbol;but invalid :" + name
    );
  }
}

function assertEVENTLISTENER(callback: any): asserts callback is EVENTLISTENER {
  if ("function" !== typeof callback) {
    throw new TypeError(
      " EVENTLISTENER expected: (event?: any) => void;but invalid:" + callback
    );
  }
}
