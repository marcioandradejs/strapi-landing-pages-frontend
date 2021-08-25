import { GoTop } from '.';

export default {
  title: 'GoTop',
  component: 'GoTop',
  args: {
    children: 'GoTop',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div style={{ height: '400vh' }}>
      <h1>Lorem ipsum dolor sit amet</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
        doloremque quidem velit vel perspiciatis delectus sunt dolor iste
        maiores cum quaerat ea aut nulla obcaecati officiis libero, autem
        aspernatur eos.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
        doloremque quidem velit vel perspiciatis delectus sunt dolor iste
        maiores cum quaerat ea aut nulla obcaecati officiis libero, autem
        aspernatur eos.
      </p>
      <h1>Lorem ipsum dolor sit amet</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
        doloremque quidem velit vel perspiciatis delectus sunt dolor iste
        maiores cum quaerat ea aut nulla obcaecati officiis libero, autem
        aspernatur eos.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
        doloremque quidem velit vel perspiciatis delectus sunt dolor iste
        maiores cum quaerat ea aut nulla obcaecati officiis libero, autem
        aspernatur eos.
      </p>
      <h1>Lorem ipsum dolor sit amet</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
        doloremque quidem velit vel perspiciatis delectus sunt dolor iste
        maiores cum quaerat ea aut nulla obcaecati officiis libero, autem
        aspernatur eos.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
        doloremque quidem velit vel perspiciatis delectus sunt dolor iste
        maiores cum quaerat ea aut nulla obcaecati officiis libero, autem
        aspernatur eos.
      </p>
      <h1>Lorem ipsum dolor sit amet</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
        doloremque quidem velit vel perspiciatis delectus sunt dolor iste
        maiores cum quaerat ea aut nulla obcaecati officiis libero, autem
        aspernatur eos.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
        doloremque quidem velit vel perspiciatis delectus sunt dolor iste
        maiores cum quaerat ea aut nulla obcaecati officiis libero, autem
        aspernatur eos.
      </p>
      <h1>Lorem ipsum dolor sit amet</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
        doloremque quidem velit vel perspiciatis delectus sunt dolor iste
        maiores cum quaerat ea aut nulla obcaecati officiis libero, autem
        aspernatur eos.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
        doloremque quidem velit vel perspiciatis delectus sunt dolor iste
        maiores cum quaerat ea aut nulla obcaecati officiis libero, autem
        aspernatur eos.
      </p>
      <GoTop {...args} />
    </div>
  );
};
