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
  .option("javascript", {
    alias: "j",
    describe: "Javascript or Typescript",
    demandOption: false,
    type: "boolean",
    default: false,
  })
  .option("skipStory", {
    alias: "S",
    describe: "No genera el archivo .stosy",
    demandOption: false,
    type: "boolean",
    default: false,
  })
  .option("skipTest", {
    alias: "T",
    describe: "No genera el archivo .test",
    demandOption: false,
    type: "boolean",
    default: false,
  }).argv;

module.exports = argv;
