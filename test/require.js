require = module.exports = require("enhanced-require")(module, {
    // options
    recursive: true // enable for all modules recursivly
    // This replaces the original require function in loaded modules
});