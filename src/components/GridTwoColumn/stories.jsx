import { GridTwoColumn } from '.';

export default {
  title: 'GridTwoColumn',
  component: 'GridTwoColumn',
  args: {
    title: 'GridTwoColumn',
    text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus numquam voluptates earum excepturi nemo unde repellendus facilis nostrum repudiandae quia amet necessitatibus, nobis obcaecati rerum commodi deserunt sed laudantium illum?`,
    srcImg: 'assets/images/javascript.svg',
    background: false,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <GridTwoColumn {...args} />
    </div>
  );
};
