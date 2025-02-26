import {
  Button,
  Dialog,
  DialogActions,
  DialogDivider,
  DialogIcon,
  DialogSubhead,
  DialogText,
  Modal,
  ModalContent,
  ModalTrigger,
} from '@/components';
import { Story, StoryFrame, Subtitle, Title } from '@/storybook/components';
import { IconArrowBackUp } from '@tabler/icons-react';
import React from 'react';

export const DialogPage: React.FC = () => {
  return (
    <section className="debug-screens mx-auto w-full max-w-screen-lg">
      <Title>Dialog</Title>
      <Story>
        <Subtitle>Playground</Subtitle>
        <StoryFrame>
          <Modal>
            <ModalTrigger>
              <Button>Open</Button>
            </ModalTrigger>
            <ModalContent>
              {(close) => (
                <Dialog>
                  <DialogIcon>
                    <IconArrowBackUp />
                  </DialogIcon>
                  <DialogSubhead>Reset settings?</DialogSubhead>
                  <DialogText>
                    This will reset your app preferences back to their default
                    settings. The following accounts will also be signed out:
                  </DialogText>
                  <DialogDivider spacing="both" />
                  <section>
                    This will reset your app preferences back to their default
                    settings. The following accounts will also be signed out:
                  </section>
                  <DialogDivider spacing="top" />
                  <DialogActions>
                    <Button variant="text" onPress={close}>
                      Cancel
                    </Button>
                    <Button variant="text" onPress={close}>
                      Accept
                    </Button>
                  </DialogActions>
                </Dialog>
              )}
            </ModalContent>
          </Modal>
        </StoryFrame>
      </Story>
    </section>
  );
};
