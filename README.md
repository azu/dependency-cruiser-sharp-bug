# dependency-cruiser-sharp-bug

Bug report for dependency-cruiser

## Install

    npm install

## Usage

- source and resolved has wrong path like `index.js#`

```
node test.js
{
    "output": {
        "modules": [
            {
                "source": "src/index.js",
                "dependencies": [
                    {
                        "resolved": "node_modules/es5-ext/array/index.js#/contains",
                        "coreModule": false,
                        "followable": false,
                        "couldNotResolve": true,
                        "dependencyTypes": [
                            "npm"
                        ],
                        "module": "es5-ext/array/#/contains",
                        "moduleSystem": "cjs",
                        "dynamic": false,
                        "exoticallyRequired": false,
                        "matchesDoNotFollow": false,
                        "circular": false,
                        "valid": true
                    }
                ],
                "orphan": false,
                "valid": true
            },
            {
                "source": "node_modules/es5-ext/array/index.js#/contains",
                "followable": false,
                "coreModule": false,
                "couldNotResolve": true,
                "matchesDoNotFollow": false,
                "dependencyTypes": [
                    "npm"
                ],
                "dependencies": [],
                "orphan": false,
                "valid": true
            }
        ],
        "summary": {
            "violations": [],
            "error": 0,
            "warn": 0,
            "info": 0,
            "totalCruised": 2,
            "totalDependenciesCruised": 1,
            "optionsUsed": {
                "combinedDependencies": false,
                "externalModuleResolutionStrategy": "node_modules",
                "moduleSystems": [
                    "amd",
                    "cjs",
                    "es6",
                    "tsd"
                ],
                "preserveSymlinks": false,
                "tsPreCompilationDeps": false,
                "exoticRequireStrings": [],
                "args": "src"
            }
        }
    },
    "exitCode": 0
}
```
## Changelog

See [Releases page](https://github.com/azu/dependency-cruiser-sharp-bug/releases).

## Running tests

Install devDependencies and Run `npm test`:

    npm test

## Contributing

Pull requests and stars are always welcome.

For bugs and feature requests, [please create an issue](https://github.com/azu/dependency-cruiser-sharp-bug/issues).

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

- azu: [GitHub](https://github.com/azu), [Twitter](https://twitter.com/azu_re)

## License

MIT © azu
