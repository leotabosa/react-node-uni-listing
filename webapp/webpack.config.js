const path = require("path");

module.exports = {
  // configurações otimidas
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@api": path.resolve(__dirname, "./src", "api.js"),
    },
  },
};
