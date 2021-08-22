import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: 'TextComponent',
  args: {
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi a vel, sint saepe expedita reiciendis commodi, mollitia consequuntur debitis veritatis deleniti harum numquam assumenda laboriosam in nulla magnam alias illo.`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
