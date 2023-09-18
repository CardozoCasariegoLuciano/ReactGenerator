module.exports = (componentName, isJavascript) => ({
  content: `import React from "react";
import "./${componentName}.css";
${isJavascript ? "" : `import { ${componentName}Props } from "./${componentName}.types";`}

const ${componentName}= ({ foo }${isJavascript ? "" : `: ${componentName}Props`}) => (
    <div className="foo-bar">{foo}</div>
);

export default ${componentName};`,

  extension: `${isJavascript ? ".jsx" : ".tsx"}`,
  shoudlCreate: true
});
