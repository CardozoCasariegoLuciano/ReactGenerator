module.exports = (componentName, isJavascript) => ({
  content: `import type { Meta, StoryObj } from '@storybook/react';
import ${componentName} from "./${componentName}";

const meta = {
  title: 'default/${componentName}',
  component: ${componentName},
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ${componentName}>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    foo: "Bar",
  },
};
`,
  extension: `${isJavascript ? ".stories.jsx" : ".stories.tsx"}`,
  shoudlCreate: true
});
