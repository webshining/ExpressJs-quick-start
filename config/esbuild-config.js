import * as ESBuild from 'esbuild'
import * as path from 'path'
import {BUILD_FORMAT} from './config.js'

ESBuild.build({
    platform: 'node',
    bundle: true,
    entryPoints: [path.resolve('./index.js')],
    outdir: path.resolve('./dist'),
    entryNames: 'bundle',
    external: ['./node_modules/*'],
    format: BUILD_FORMAT,
    minify: true
})