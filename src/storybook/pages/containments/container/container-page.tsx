import { Container, ContainerContent } from '@/components';
import { Story, StoryFrame, Subtitle, Title } from '@/storybook/components';
import type React from 'react';

export const ContainerPage: React.FC = () => {
  return (
    <section className="debug-screens mx-auto w-full max-w-screen-lg">
      <Title>Container</Title>
      <Story className="mb-md">
        <Subtitle>Playground</Subtitle>
        <StoryFrame>
          <Container color="surface-container" className="w-full">
            <ContainerContent padding="both" variant="flex">
              <h1 className="typography-body-large">Container</h1>
            </ContainerContent>
          </Container>
        </StoryFrame>
      </Story>
      <Story className="mb-md">
        <Subtitle>Padding</Subtitle>
        <StoryFrame className="flex-col">
          <Container color="surface-container" className="w-full">
            <ContainerContent padding="none" variant="flex">
              <h1 className="typography-body-large">None</h1>
            </ContainerContent>
          </Container>
          <Container color="surface-container" className="w-full">
            <ContainerContent padding="top" variant="flex">
              <h1 className="typography-body-large">Top</h1>
            </ContainerContent>
          </Container>
          <Container color="surface-container" className="w-full">
            <ContainerContent padding="bottom" variant="flex">
              <h1 className="typography-body-large">Bottom</h1>
            </ContainerContent>
          </Container>
          <Container color="surface-container" className="w-full">
            <ContainerContent padding="both" variant="flex">
              <h1 className="typography-body-large">Both</h1>
            </ContainerContent>
          </Container>
        </StoryFrame>
      </Story>
      <Story className="mb-md">
        <Subtitle>Variants</Subtitle>
        <StoryFrame className="flex-col">
          <Container color="surface-container" className="w-full">
            <ContainerContent padding="both" variant="grid">
              <h1 className="typography-body-large">Grid</h1>
              <p className="typography-body-large">Col</p>
              <p className="typography-body-large">Col</p>
              <p className="typography-body-large">Col</p>
              <p className="typography-body-large">Col</p>
              <p className="typography-body-large">Col</p>
              <p className="typography-body-large">Col</p>
              <p className="typography-body-large">Col</p>
              <p className="typography-body-large">Col</p>
              <p className="typography-body-large">Col</p>
              <p className="typography-body-large">Col</p>
              <p className="typography-body-large">Col</p>
            </ContainerContent>
          </Container>
          <Container color="surface-container" className="w-full">
            <ContainerContent
              padding="both"
              variant="flex"
              className="justify-center"
            >
              <h1 className="typography-body-large">Flex</h1>
            </ContainerContent>
          </Container>
        </StoryFrame>
      </Story>
      <Story>
        <Subtitle>Colors</Subtitle>
        <StoryFrame className="flex-col">
          <Container color="none" className="w-full">
            <ContainerContent padding="both" variant="flex">
              <h1 className="typography-body-large">None</h1>
            </ContainerContent>
          </Container>
          <Container color="surface" className="w-full">
            <ContainerContent padding="both" variant="flex">
              <h1 className="typography-body-large">Surface</h1>
            </ContainerContent>
          </Container>
          <Container color="surface-container" className="w-full">
            <ContainerContent padding="both" variant="flex">
              <h1 className="typography-body-large">Surface Container</h1>
            </ContainerContent>
          </Container>
          <Container color="inverse-surface" className="w-full">
            <ContainerContent padding="both" variant="flex">
              <h1 className="typography-body-large">Inverse Surface</h1>
            </ContainerContent>
          </Container>
          <Container color="primary" className="w-full">
            <ContainerContent padding="both" variant="flex">
              <h1 className="typography-body-large">Primary</h1>
            </ContainerContent>
          </Container>
          <Container color="primary-container" className="w-full">
            <ContainerContent padding="both" variant="flex">
              <h1 className="typography-body-large">Primary Container</h1>
            </ContainerContent>
          </Container>
          <Container color="secondary" className="w-full">
            <ContainerContent padding="both" variant="flex">
              <h1 className="typography-body-large">Secondary</h1>
            </ContainerContent>
          </Container>
          <Container color="secondary-container" className="w-full">
            <ContainerContent padding="both" variant="flex">
              <h1 className="typography-body-large">Secondary Container</h1>
            </ContainerContent>
          </Container>
          <Container color="info" className="w-full">
            <ContainerContent padding="both" variant="flex">
              <h1 className="typography-body-large">Info</h1>
            </ContainerContent>
          </Container>
          <Container color="info-container" className="w-full">
            <ContainerContent padding="both" variant="flex">
              <h1 className="typography-body-large">Info Container</h1>
            </ContainerContent>
          </Container>
          <Container color="success" className="w-full">
            <ContainerContent padding="both" variant="flex">
              <h1 className="typography-body-large">Success</h1>
            </ContainerContent>
          </Container>
          <Container color="success-container" className="w-full">
            <ContainerContent padding="both" variant="flex">
              <h1 className="typography-body-large">Success Container</h1>
            </ContainerContent>
          </Container>
          <Container color="caution" className="w-full">
            <ContainerContent padding="both" variant="flex">
              <h1 className="typography-body-large">Caution</h1>
            </ContainerContent>
          </Container>
          <Container color="caution-container" className="w-full">
            <ContainerContent padding="both" variant="flex">
              <h1 className="typography-body-large">Caution Container</h1>
            </ContainerContent>
          </Container>
          <Container color="critical" className="w-full">
            <ContainerContent padding="both" variant="flex">
              <h1 className="typography-body-large">Critical</h1>
            </ContainerContent>
          </Container>
          <Container color="critical-container" className="w-full">
            <ContainerContent padding="both" variant="flex">
              <h1 className="typography-body-large">Critical Container</h1>
            </ContainerContent>
          </Container>
        </StoryFrame>
      </Story>
    </section>
  );
};
