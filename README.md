# webpack-transitive-deps-question

Should webpack allow applications to direclty depend on its transitive dependencies?  Right now the build system is doing nothing to prevent this from happening - I think maybe it should!



This repo serves as a minimal example of how allowing usage of transitive dependencies can be confusing and accidentally allow for bad patterns to linger within a codebase.



Notice that while there is only one declared dependency of this repo, [webpack](https://github.com/webpack/webpack), the bundled code is still able to reference [ajv](https://github.com/epoberezkin/ajv).