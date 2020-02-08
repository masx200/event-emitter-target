export type EventEmitterTarget = ReturnType<typeof createEventEmitterTarget>;
export interface EventEmitterTargetConstructor {
  new (): EventEmitterTarget;
  (): EventEmitterTarget;
}
const EventEmitterTargetClass: EventEmitterTargetConstructor = function EventEmitterTargetClass(
  this: any
): EventEmitterTarget {
  const eventemittertarget = createEventEmitterTarget();
  if (this && this instanceof EventEmitterTargetClass) {
    Object.assign(this, eventemittertarget);
    return this as EventEmitterTarget;
  } else {
    return eventemittertarget;
    //return Reflect.construct(EventEmitterTargetClass, []) as EventEmitterTarget;
  }
} as EventEmitterTargetConstructor;
export type EVENTNAME = string | symbol;
export type EVENTLISTENER = (event?: any) => void;
export default EventEmitterTargetClass;

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
      监听器集合.forEach(listener => {
        Promise.resolve().then(() => {
          listener(event);
        });
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
  function on(name: EVENTNAME, callback: EVENTLISTENER) {
    assertEVENTNAME(name);
    assertEVENTLISTENER(callback);
    const 监听器集合 = 获取监听器集合(name);
    监听器集合.add(callback);
  }
  function offraw(name: EVENTNAME, callback: EVENTLISTENER) {
    const 监听器集合 = 获取监听器集合(name);
    监听器集合.delete(callback);
  }
  function offwrap(name: EVENTNAME, callback: EVENTLISTENER) {
    const 监听器集合 = 获取监听器集合(name);
    let 一次包装 = 源回调到一次包装.get(callback);
    if (一次包装) {
      监听器集合.delete(一次包装);
    }
  }
  function off(name: EVENTNAME, callback: EVENTLISTENER) {
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
      ...监听器回调映射
    ].map(([key, value]) => {
      return [key, [...value]] as [EVENTNAME, EVENTLISTENER[]];
    });

    return resultarr[Symbol.iterator]();
  }
  const eventtarget = {
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
const toStringTag = "EventEmitterTarget";
function toprimitive(): string {
  return {}.toString.call({ [Symbol.toStringTag]: toStringTag });
}
