import * as ESBuild from 'esbuild'
import * as path from 'path'

ESBuild.build({
    outdir: path.resolve('./dist'),
    entryPoints: [path.resolve('./index.js')],
    entryNames: 'bundle.js',
    bundle: true,
    minify: true,
    sourcemap: true,
    external: ['./node_modules/*']
})