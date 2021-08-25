import { Footer } from '.';

export default {
  title: 'Footer',
  component: 'Footer',
  args: {
    html: `<p><a href="https://github.com/marcioandradejs">Feito com ❤ por Marcio Andrade</a></p>`,
  },
};

export const Template = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};
