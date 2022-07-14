import { test } from "vitest";
import EventEmitterTarget from "../src/index";
import assert from "assert";
test("event", async () => {
    console.log(EventEmitterTarget);
    const emitter = EventEmitterTarget<{
        test: { msg: string };
        msg: { msg: string };
    }>();
    console.log(emitter);
    let count = 0;
    const results: { msg: string }[] = [];
    const listener1 = (data: { msg: string }): void => {
        console.log(data);
        results.push(data);
        count++;
    };
    emitter.once("msg", listener1);
    const listener2 = (data: { msg: string }): void => {
        console.log(data);
        results.push(data);
        count++;
    };
    emitter.on("test", listener2);
    const listener3 = (data: { msg: string }): void => {
        console.log(data);
        count++;
    };
    emitter.on("msg", listener3);
    await emitter.emit("test", { msg: "hello" });
    await emitter.emit("test", { msg: "world" });
    await emitter.emit("test", { msg: "world" });
    await emitter.emit("test", { msg: "world" });
    await emitter.emit("msg", { msg: "msg" });
    await emitter.emit("msg", { msg: "msg" });
    console.log(results);
    console.log(count);
    assert.equal(count, 7);
    assert.deepEqual(results, [
        { msg: "hello" },
        { msg: "world" },
        { msg: "world" },

        { msg: "world" },
        { msg: "msg" },
    ]);
    emitter.off("test", listener2);
    emitter.off("msg", listener1);
    emitter.off("msg", listener3);
    await emitter.emit("test", { msg: "hello" });
    await emitter.emit("test", { msg: "world" });
    await emitter.emit("test", { msg: "world" });
    await emitter.emit("test", { msg: "world" });
    await emitter.emit("msg", { msg: "msg" });
    await emitter.emit("msg", { msg: "msg" });
    assert.equal(count, 7);
    assert.deepEqual(results, [
        { msg: "hello" },
        { msg: "world" },
        { msg: "world" },

        { msg: "world" },
        { msg: "msg" },
    ]);
});
