module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true // Include Node.js environment here if needed
  },
  "settings": {
    "import/resolver": {
      "typescript": {}, // This is required for TypeScript path resolution
      "alias": {
        "map": [
          ["@", "./src"],
          ["@controllers", "./src/controllers"],
          ["@models", "./src/models"],
          ["@middlewares", "./src/middlewares"],
          ["@routes", "./src/routes"],
          ["@utils", "./src/utils"]
          // Add more aliases as needed
        ],
        "extensions": [".ts", ".js", ".jsx", ".json"]
      }
    }
  },
  "extends": "standard-with-typescript",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    // Add TypeScript parser options if needed
  },
  "rules": {
    // Add ESLint rules if needed
  }
};
