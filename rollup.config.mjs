import { babel } from "@rollup/plugin-babel";
// import sourcemaps from "rollup-plugin-sourcemaps";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import json from "@rollup/plugin-json";
import typescript from "rollup-plugin-ts";
import { defineConfig } from "rollup";
import rollupExternalModules from "rollup-external-modules";
const mybabelplugin = babel({
    babelHelpers: "bundled",
    sourcemap: true,
    extensions: [".ts", ".js"],
    plugins: ["@babel/plugin-proposal-optional-catch-binding"],
    presets: [["@babel/preset-env", {}]],
});
const myterserplugin = terser({
    toplevel: true,
    output: {
        comments: !1,
        ascii_only: !0,
        beautify: true,
    },
    compress: {
        toplevel: true,
        unused: true,
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ["console.log"],
    },
    mangle: { properties: false },
});
export default defineConfig([
    {
        external: rollupExternalModules,

        input: "./src/index.ts",
        output: [
            {
                banner: "import regeneratorRuntime from 'regenerator-runtime';",
                file: "./dist/index.js",
                format: "esm",
                sourcemap: "inline",
            },
        ],
        plugins: [
            // sourcemaps(),
            json(),
            resolve(),
            commonjs(),
            typescript({ transpiler: "typescript" }),
            mybabelplugin,
            myterserplugin,
        ],
    },
    {
        external: rollupExternalModules,
        input: "./dist/index.js",
        output: [
            {
                file: "./dist/index.cjs",
                format: "cjs",
                sourcemap: "inline",
                exports: "auto",
            },
        ],
        plugins: [
            // sourcemaps(),
            json(),
            resolve(),
            commonjs(),
            //    typescript({}),
            mybabelplugin,
            myterserplugin,
        ],
    },
]);
