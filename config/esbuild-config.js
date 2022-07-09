import * as ESBuild from 'esbuild'
import * as path from 'path'
import {BUILD_FORMAT} from './config.js'

ESBuild.build({
    platform: 'node',
    outdir: path.resolve('./dist'),
    entryPoints: [path.resolve('./index.js')],
    entryNames: 'bundle',
    bundle: true,
    external: ['./node_modules/*'],
    format: BUILD_FORMAT
})