import { build } from 'esbuild'

build({
    bundle: true,
    entryPoints: ['./src/index.js'],
    outdir: 'dist',
    external: ['./node_modules/*'],
    platform: 'node',
    entryNames: 'bundle',
    format: 'esm',
    sourcemap: true,
    minify: true
})