# event-emitter-target

发布订阅事件机制模块

用 Typescript 函数式编程写成

添加事件监听器有自动去重功能

事件触发时，监听器函数异步执行

# 安装模块

```shell
yarn add https://github.com/masx200/event-emitter-target.git

```

# 导入模块

```javascript
import EventEmitterTargetClass from "@masx200/event-emitter-target";
```

# 示例

创建 `EventEmitterTarget`对象,有两种方法

1.当做函数使用

```js
let emitter = EventEmitterTargetClass();
```

2.当做类使用

```js
class myemitter extends EventEmitterTargetClass {}

let emitter = new myemitter();
```

以下示例显示了`EventEmitterTarget`具有单个侦听器的简单实例。

该`EventEmitterTarget.on()`方法用于注册侦听器，

而该`EventEmitterTarget.emit()`方法用于触发事件。

```js
emitter.on("event", () => {
  console.log("an event occurred!");
});
emitter.emit("event");
```

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
declare function toprimitive(): string;
```

## `EventEmitterTargetClass`

1.可当做函数使用

2.可当做类使用

返回一个`EventEmitterTarget`对象

## `emitter[Symbol.toStringTag]`

此属性值为 `"EventEmitterTarget"`，

可以用来判断对象类型。

## `emitter[Symbol.iterator]()`

返回所有的事件名和监听器的数组迭代器

## `emitter.entries()`

别名 `emitter[Symbol.iterator]()`

## `emitter.listenerCount(eventName)`

返回侦听名为`eventName`的事件的侦听器数

## `emitter.clear(eventName)`

别名 `emitter.removeAllListeners(eventName)`

## `emitter.removeAllListeners(eventName)`

删除指定`eventName`的所有侦听器。

删除代码中其他地方添加的侦听器是一种不好的做法，尤其是在`EventEmitterTarget`实例由其他组件或模块创建时。

## `emitter.on(eventName, listener)`

将监听器函数添加到名为`eventName`的事件的监听器数组的末尾。检查是否已添加侦听器。通过`eventName`和`listener`的相同组合进行的多次调用不会导致多次添加和调用该监听器。

## `emitter.addListener(eventName, listener)`

别名 `emitter.on(eventName, listener)`

## `emitter.off(eventName, listener)`

别名 `emitter.removeListener(eventName, listener)`.

## `emitter.removeListener(eventName, listener)`

从名为`eventName`的事件的侦听器数组中删除指定的侦听器。

`removeListener()`将最多从侦听器数组中删除一个侦听器实例。如果已将任何单个侦听器多次添加到指定`eventName`的侦听器数组，则`removeListener()`无需多次调用即可删除每个实例。

## `emitter.once(eventName, listener)`

为名为`eventName`的事件添加一次性侦听器函数。下次`eventName`触发时，将删除此侦听器，然后调用它。

## `emitter.emit(eventName, args)`

以注册事件`eventName`的顺序异步调用为名为的事件注册的每个侦听器，并将提供的参数传递给每个侦听器。

## `emitter.dispatch(eventName, args)`

别名 `emitter.emit(eventName, args)`

## `emitter.eventNames()`

返回一个数组，该数组列出发射器已为其注册侦听器的事件。数组中的值将是`string`或`symbol`。

## `emitter.listeners(eventName)`

返回名为`eventName`的事件的侦听器数组的副本。
