import babelPlugin from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import { defineConfig } from 'rollup'
import dts from 'rollup-plugin-dts'
import { importExportPlugin } from 'rollup-plugin-import-export'
import globals from 'rollup-plugin-node-globals'
import ts from 'rollup-plugin-typescript2'

const config = defineConfig([
  // 输出两种模式：ES Module和CommonJS
  {
    input: ['src/index.ts'],
    output: [
      {
        dir: 'dist/esm',
        format: 'esm',
        preserveModules: true, // 开启这个选项会将每个模块单独打包，有利于摇树优化
      },
      {
        dir: 'dist/cjs',
        format: 'cjs',
        preserveModules: true,
      },
    ],
    plugins: [
      importExportPlugin(),
      ts(),
      babelPlugin({ exclude: '**/node_modules/**' }),
      commonjs(),
    ],
  },
  // 打包为UMD
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/umd/index.js',
        format: 'umd',
        name: 'utils',
      },
    ],
    plugins: [
      importExportPlugin(),
      ts(),
      babelPlugin({ exclude: '**/node_modules/**' }),
      commonjs(),
      resolve({ preferBuiltins: true, mainFields: ['browser'] }),
      globals(),
      terser(),
    ],
  },
  // 打包类型声明
  {
    input: 'src/index.ts',
    output: {
      dir: 'dist/types',
      format: 'esm',
      preserveModules: true,
    },
    plugins: [
      importExportPlugin(),
      dts(),
    ],
  },
])

export default config
