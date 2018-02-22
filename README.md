# webpack-transitive-deps-question

Shouldn webpack forbid applications from directly depending on its transitive dependencies? This repo serves as a minimal example of how allowing usage of transitive dependencies can be confusing and accidentally allow for bad patterns to linger within a codebase.  This repo allows easy comparison of how webpack and rollup differ on how to handle this:

### usage instructions

```
npm install
npm run webpack
npm run rollup
```



Notice that while there are only two declared dependency of this repo, [webpack](https://github.com/webpack/webpack) and [rollup](https://github.com/rollup/rollup), the webpack bundled code is still able to reference and utilize [ajv](https://github.com/epoberezkin/ajv).



I figured this out recently when trying to disable nodejs polyfills for [wp-calypso]().  Even though I set `node: false` within the webpack config, I noticed that the `path` polyfill was still being bundled. It turns out that it was still being used by many files without any errors because the polyfill was being included as a transitive dependency.  It would have been helpful to have webpack throw a `ReferenceError` during compilation.  



For example, in this repo I could imagine an error message like this being useful:

```
ERROR in ./index.js
Module not found: Error: Can't use transitive dependency 'ajv' in 'webpack-transitive-deps-question'.
```

### screenshots

**webpack**

![webpack-example](https://cldup.com/YqloI48cqE.png)



**rollup**![rollup-example](https://cldup.com/KNhcb4TejJ.png)