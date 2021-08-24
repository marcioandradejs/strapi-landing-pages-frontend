import { SectionContainer } from '.';

export default {
  title: 'SectionContainer',
  component: 'SectionContainer',
  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eum
          laborum accusamus illum consequatur nihil iusto! Aspernatur, aut
          accusamus recusandae sint deleniti quam odit est libero animi fugit?
          Doloribus, saepe!
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: '' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  );
};
