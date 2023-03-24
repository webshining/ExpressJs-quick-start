import * as ESBuild from 'esbuild'
import { BUILD_FORMAT } from './src/data/config.js'

ESBuild.build({
    bundle: true,
    entryPoints: ['./src/index.js'],
    outdir: 'dist',
    external: ['./node_modules/*'],
    platform: 'node',
    entryNames: 'bundle',
    format: BUILD_FORMAT,
    sourcemap: true,
    minify: true
})