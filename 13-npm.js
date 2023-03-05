// npm - gloal command, comes with node
// npm --version -> npm -v

// local dependencies - use it only in this particular project
// npm i <packageName>

// global dependencies - use it only in any project
// npm i -g <packageName>

// package.json - maifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm iniy -y (everything defaults)

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
console.log(items);

const newItems = _.flattenDeep(items)
console.log(newItems)