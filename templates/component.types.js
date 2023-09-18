module.exports = (componentName, isJavascript) => ({
  content: `export interface ${componentName}Props {
    foo: string;
}
`,
  extension: `.types.ts`,
  shoudlCreate: isJavascript ? false : true
});
