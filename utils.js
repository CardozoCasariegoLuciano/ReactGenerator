const fs = require("fs");

const rootSign = ["node_modules", ".git"];

function getRoot(path, deep) {
  const actualDeep = deep || 0;
  const maxDeep = 5;
  let findRoot = false;

  if (actualDeep >= maxDeep) {
    console.log("No se en encontro la raiz");
    process.exit(1);
  }
  try {
    const files = fs.readdirSync(path);
    files.forEach((file) => {
      if (rootSign.includes(file)) {
        findRoot = true;
      }
    });
    if (findRoot) {
      return path;
    } else {
      const subPath = path.replace(/\/[^/]*$/, "");
      return getRoot(subPath, actualDeep + 1);
    }
  } catch (err) {
    console.error("Error al leer el directorio:", err);
  }
}

module.exports = {
  getRoot,
};
