import { createEventEmitterTarget } from "./createEventEmitterTarget";

export type EventEmitterTarget = ReturnType<typeof createEventEmitterTarget>;
export interface EventEmitterTargetConstructor {
    new (): EventEmitterTarget;
    (): EventEmitterTarget;
}
const EventEmitterTargetClass: EventEmitterTargetConstructor = ((noop) => {
    var a = noop();
    try {
        var b = new Function("return async()=>{}")()();
    } catch (error) {}

    function EventEmitterTargetClass(this: any): EventEmitterTarget {
        const eventemittertarget = createEventEmitterTarget();
        if (this && this instanceof EventEmitterTargetClass) {
            Object.assign(this, eventemittertarget);
            return this as EventEmitterTarget;
        } else {
            return Reflect.construct(EventEmitterTargetClass, []);
        }
    }
    Reflect.set(EventEmitterTargetClass, a, b);

    return EventEmitterTargetClass as EventEmitterTargetConstructor;
})(Symbol);
export type EVENTNAME = string | symbol;
export type EVENTLISTENER = (event?: any) => void;
export default EventEmitterTargetClass;
