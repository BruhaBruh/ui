import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button } from '../Button';
import { Modal } from './Modal';
import { ModalProps } from './Modal.types';

// @ts-ignore
const _: React.ReactNode = null;

const meta: Meta<typeof Modal> = {
  title: 'Components/Controls/Modal',
  component: Modal,
  argTypes: {},
  render: (args) => (
    <Modal {...args}>
      <Modal.Trigger>Open Modal</Modal.Trigger>
      <Modal.Content>
        <h3 className="text-lg font-semibold tracking-wider mb-1">
          Some Title
        </h3>
        Wow! It&apos;s modal
      </Modal.Content>
    </Modal>
  ),
  args: {},
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Playground: Story = {};

export const MaxHeight: Story = {
  render: (args) => (
    <Modal {...args}>
      <Modal.Trigger>Open Modal</Modal.Trigger>
      <Modal.Content className="flex flex-col">
        <h3 className="text-lg font-semibold tracking-wider mb-1">
          Some Title
        </h3>
        <div className="overflow-x-hidden overflow-y-auto text-balance">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
          ullam corrupti facere dignissimos provident quibusdam quas magni
          aliquid magnam natus quisquam quasi expedita, consequatur quis
          aspernatur blanditiis modi, aperiam id! Fuga eligendi, sunt itaque hic
          sint perferendis? Recusandae, maxime autem facilis quasi quod commodi
          veritatis cupiditate odio enim excepturi quia qui aut deserunt
          reiciendis, deleniti id impedit iste, ad doloremque praesentium
          molestiae. Placeat, ipsa natus quas, cupiditate aliquid doloribus
          maxime debitis aut nostrum, eligendi suscipit! Temporibus inventore,
          ad modi perspiciatis vitae, dolore alias facere, culpa officia
          possimus recusandae ea non. Similique iusto perferendis illum. Atque
          voluptatem iusto aut dolore labore neque recusandae ducimus sint
          distinctio? Accusamus rerum iusto eligendi adipisci. Iste optio
          explicabo autem error incidunt qui fugit assumenda hic dicta nostrum.
          Accusamus, aut doloribus blanditiis placeat error ducimus sequi
          excepturi in hic delectus voluptas fuga asperiores corrupti nemo
          itaque officia? Quod totam numquam doloribus deleniti natus labore est
          dicta modi enim a soluta quia, repudiandae atque pariatur. Magni,
          iusto rem ex explicabo dolore sequi culpa fuga dolores vitae ea
          aperiam architecto sunt quis praesentium eos quia tempore molestias
          distinctio quo, temporibus laborum obcaecati eaque perspiciatis iure!
          Suscipit cupiditate optio quidem iste officiis a dignissimos quis
          sequi sed id, numquam hic illo iusto non, omnis quod. Similique quae
          rem officia dicta amet natus iure magni blanditiis hic! Iusto amet,
          rerum reprehenderit veniam assumenda explicabo vitae labore quibusdam
          velit, praesentium necessitatibus numquam voluptatibus modi suscipit,
          tempore id. Exercitationem consequatur inventore voluptate
          perspiciatis numquam, assumenda eaque sed illo ea eum impedit enim
          ullam. Iure sequi consequuntur officiis perferendis voluptates,
          maiores quis, repellat labore ab temporibus aperiam necessitatibus
          rem! Itaque porro deserunt natus nostrum modi voluptas similique
          obcaecati, unde accusamus eligendi amet officiis voluptates fugit
          repellendus, illo ut ab nam explicabo. Deleniti dolorem nisi quod
          minima, vero modi expedita ipsum impedit earum debitis voluptates
          exercitationem est iure? Perspiciatis optio perferendis mollitia autem
          laudantium quaerat distinctio, sequi quas dolorum? Delectus nam
          inventore quisquam veritatis aliquid ex animi blanditiis autem,
          tempora hic quibusdam ab fugiat, voluptates corrupti expedita itaque
          natus, quaerat eaque! Soluta exercitationem molestiae aspernatur ipsa
          eveniet autem explicabo molestias tenetur iste tempore animi
          cupiditate, nesciunt, commodi provident possimus error quas.
          Temporibus consectetur quasi maxime nam delectus corporis aliquid
          natus illo, maiores debitis quia esse eos tempore ullam eveniet sit.
          Numquam eum, veritatis velit recusandae quo non, provident distinctio
          nostrum natus omnis, sed praesentium possimus reiciendis esse hic
          molestias autem! Tempore officiis quod eligendi illum praesentium
          exercitationem! Rerum magnam perferendis nesciunt eligendi! Veritatis
          amet laborum ullam quod corporis nisi reiciendis vitae dolores vero
          illo libero beatae perspiciatis aperiam earum, expedita eligendi rerum
          ad doloribus itaque neque! Exercitationem aperiam rem ullam eligendi,
          voluptatem assumenda doloribus eius minima delectus explicabo
          reiciendis autem, nam necessitatibus asperiores! Commodi esse ad totam
          aspernatur iusto neque eius voluptatibus, dicta optio provident
          similique inventore deleniti facere veritatis saepe incidunt accusamus
          a fugit possimus, fugiat quas maiores! Ullam aliquid eaque temporibus
          obcaecati, fugit deserunt doloribus ex magni magnam accusantium
          expedita laudantium culpa ipsam vero aliquam, ab, ea nisi illum
          exercitationem illo ipsa!
        </div>
      </Modal.Content>
    </Modal>
  ),
};

const ControlledModal: React.FC<ModalProps> = (args) => {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <>
      <Button onPress={() => setIsOpen(true)}>Open Modal</Button>
      <Modal {...args} isOpen={isOpen} onOpenChange={setIsOpen}>
        <Modal.Content className="flex flex-col">
          <h3 className="text-lg font-semibold tracking-wider mb-1">
            Some Title
          </h3>
          Wow! It&apos;s modal
        </Modal.Content>
      </Modal>
    </>
  );
};

export const Controlled: Story = {
  render: (args) => <ControlledModal {...args} />,
};
