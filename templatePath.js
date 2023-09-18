const fs = require("fs");
const path = require("path");
const utils = require("./utils");

function prepareTemplates(path) {
  const templatePath = prepareTemplateFolder(path);

  try {
    templates = require(templatePath);
    return templates;
  } catch (j) {
    console.log(
      "The template folder don´t have an index.js file exporting all templates"
        .red
    );
    process.exit(1);
  }
}

function prepareTemplateFolder(userPath) {
  if (userPath == undefined) {
    return "./templates";
  } else {
    return provideTemplatePath(userPath);
  }
}

function provideTemplatePath(userPath) {
  if (!fs.existsSync(userPath)) {
    validateDefaultPath(userPath);
    return findTemplatesFolders();
  } else {
    return `${path.resolve(userPath)}`;
  }
}

function validateDefaultPath(userPath) {
  if (userPath != "") {
    console.log("can't find templates in this path: " + userPath);
    process.exit(1);
  }
}

function findTemplatesFolders() {
  const root = utils.getRoot(process.cwd());
  const defaultCustomTemplatePath = `${root}/template`;
  if (!fs.existsSync(defaultCustomTemplatePath)) {
    console.log("No template path was found to generate the components");
    process.exit(1);
  } else {
    return defaultCustomTemplatePath;
  }
}

module.exports = prepareTemplates;
