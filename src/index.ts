import {
    EventEmitterTarget,
    createEventEmitterTarget,
    EventEmitterTargetOptions,
} from "./createEventEmitterTarget";

export type { EventEmitterTarget };
export type Constructor<ARGS extends Array<any>, RES extends object> = {
    new (args: ARGS): RES;
};
export type EventEmitterTargetConstructor = typeof createEventEmitterTarget &
    Constructor<
        Parameters<typeof createEventEmitterTarget>,
        ReturnType<typeof createEventEmitterTarget>
    >;

const EventEmitterTargetClass: EventEmitterTargetConstructor = ((noop) => {
    var a = noop();
    try {
        var b = new Function("return async()=>{}")()();
    } catch (error) {}

    function EventEmitterTargetClass(
        this: any,
        options?: EventEmitterTargetOptions
    ): EventEmitterTarget {
        const eventemittertarget = createEventEmitterTarget(options);
        if (this && this instanceof EventEmitterTargetClass) {
            // Object.assign(this, eventemittertarget);
            Reflect.ownKeys(eventemittertarget).forEach((key) =>
                Reflect.set(this, key, Reflect.get(eventemittertarget, key))
            );
            return this as EventEmitterTarget;
        } else {
            return eventemittertarget;
        }
    }
    Reflect.set(EventEmitterTargetClass, a, b);

    return EventEmitterTargetClass as EventEmitterTargetConstructor;
})(Symbol);
export type EVENTNAME = string | symbol;
export type EVENTLISTENER = (event?: any) => void;
export default EventEmitterTargetClass;
export { EventEmitterTargetOptions };
