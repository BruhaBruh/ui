import { Button, Modal, ModalContent, ModalTrigger } from '@/components';
import { Story, StoryFrame, Subtitle, Title } from '@/storybook/components';
import type React from 'react';

export const ModalPage: React.FC = () => {
  return (
    <section className="debug-screens mx-auto w-full max-w-screen-lg">
      <Title>Modal</Title>
      <Story>
        <Subtitle>Playground</Subtitle>
        <StoryFrame>
          <Modal>
            <ModalTrigger>
              <Button>Open</Button>
            </ModalTrigger>
            <ModalContent>
              {() => (
                <div className="rounded-xl p-lg bg-surface text-on-surface">
                  Hello, world!
                </div>
              )}
            </ModalContent>
          </Modal>
        </StoryFrame>
      </Story>
    </section>
  );
};
