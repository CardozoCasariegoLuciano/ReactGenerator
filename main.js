require("colors");
const fs = require("fs");
const args = require("./arguments");
const utils = require("./utils");
const template = require("./templatePath");

//Arguments
const ComponentPath = args.component;
const ComponentTemplatesPath = args.custom;

//Constants
const root = utils.getRoot(process.cwd());
const rootPath = `${root}/src/${ComponentPath}`;
const finalPath = `src/${ComponentPath}`;
let templates; //Luego se cargan las templates default/personalizadas

function main() {
  templates = template(ComponentTemplatesPath);

  if (fs.existsSync(rootPath)) {
    console.log(
      `${"Already exist".red} a component in this path: ${finalPath}`
    );
    process.exit(1);
  }

  fs.mkdirSync(rootPath, { recursive: true });

  const componentName = ComponentPath.replace(/^.*\//, "");
  const generatedTemplates = templates.map((template) =>
    template(componentName)
  );

  //TODO que se pueda ignorar algunos templates (pasar por args)
  //TODO mejorar los templates que ya estan
  //TODO que se pueda elegir entre jsx y tsx

  generatedTemplates.forEach((template) => {
    fs.writeFileSync(
      `${rootPath}/${componentName}${template.extension}`,
      template.content
    );
  });

  console.log("Successfully created component under: " + finalPath.green);
}

main();
