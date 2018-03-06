import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';
import minify from 'rollup-plugin-babel-minify';
import conditional from "rollup-plugin-conditional";
import postcss from "rollup-plugin-postcss";

const isProduction = process.env.NODE_ENV === "production";

export default {
    input: 'src/index.js',
    name: 'PDBeSequenceViewer',
    sourcemap: true,
    output: {
        file: 'dist/pdbe-sequence-viewer.js',
        format: 'iife'
    },
    plugins: [
        postcss({
            extensions: ['.css']
        }),
        nodeResolve({
            jsnext: true
        }),
        babel({
            exclude: 'node_modules/**'
        }),
        conditional(isProduction, [
            minify()
        ])
    ]
};