import { Footer } from '.';

export default {
  title: 'Footer',
  component: 'Footer',
  args: {
    footerHtml: `<p><a href="https://github.com/marcioandradejs" target="_blank">Feito com ❤ por Marcio Andrade</a></p>`,
  },
};

export const Template = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};
