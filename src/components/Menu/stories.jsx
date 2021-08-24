import { Menu } from '.';
import linksMock from '../NavLinks/mock';

export default {
  title: 'Menu',
  component: 'Menu',
  args: {
    links: linksMock,
    logoData: {
      text: 'logo',
      link: '#target',
      srcImg: '',
    },
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div style={{ height: '300vh', background: 'gray' }}>
      <Menu {...args} />
    </div>
  );
};
