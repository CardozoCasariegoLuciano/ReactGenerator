const yargs = require("yargs");

const argv = yargs
  .option("component", {
    alias: "c",
    describe: "Nombre del componente, incluyendo su path a partir del /src",
    demandOption: true,
    type: "string",
  })
  .option("custom", {
    alias: "t",
    describe:
      "Permite usar templates customs, los va a buscar en la carpeta indicada, por defecto los busca en la raiz /template",
    demandOption: false,
    type: "string",
  })
  .option("modo", {
    alias: "m",
    describe: "Modo de ejecución",
    choices: ["lectura", "escritura"],
    default: "lectura", // Valor por defecto si no se proporciona
  }).argv;

module.exports = argv;
