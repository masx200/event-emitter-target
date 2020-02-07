import babel from "rollup-plugin-babel";
import sourcemaps from "rollup-plugin-sourcemaps";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import json from "@rollup/plugin-json";
import typescript from "rollup-plugin-ts";
const mybabelplugin = babel({
  plugins: ["@babel/plugin-proposal-optional-catch-binding"],
  presets: [
    [
      "@babel/preset-env",
      {
        targets: [
          "last 1 edge version",
          "last 1 safari version",
          "last 1 chrome version",
          "last 1 firefox version"
        ]
      }
    ]
  ]
});
const myterserplugin = terser({
  sourcemap: true,
  toplevel: true,
  output: {
    comments: !1,
    ascii_only: !0
  },
  compress: {
    toplevel: true,
    unused: true,
    drop_console: true,
    drop_debugger: true,
    pure_funcs: ["console.log"]
  },
  mangle: { properties: false }
});
export default [
  {
    input: "./src/index.ts",
    output: [
      {
        file: "./dist/index.js",
        format: "esm",
        sourcemap: true
      }
    ],
    plugins: [
      sourcemaps(),
      json(),
      resolve(),
      commonjs(),
      typescript({}),
      mybabelplugin,
      myterserplugin
    ]
  }
];
