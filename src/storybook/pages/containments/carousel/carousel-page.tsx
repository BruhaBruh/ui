import {
  Carousel,
  CarouselDots,
  CarouselNextButton,
  CarouselPrevButton,
  CarouselSlide,
  CarouselSlideContent,
  CarouselView,
} from '@/components';
import { Story, StoryFrame, Subtitle, Title } from '@/storybook/components';
import type React from 'react';

export const CarouselPage: React.FC = () => {
  return (
    <section className="debug-screens mx-auto w-full max-w-screen-lg">
      <Title>Carousel</Title>
      <Story className="mb-md">
        <Subtitle>Playground</Subtitle>
        <StoryFrame>
          <Carousel
            after={<CarouselDots />}
            className="w-full"
            options={{ loop: true, slidesToScroll: 1, align: 'center' }}
          >
            <CarouselView
              left={<CarouselPrevButton />}
              right={<CarouselNextButton />}
            >
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((index) => (
                <CarouselSlide key={index} className="basis-1/2">
                  <CarouselSlideContent className="flex h-96 items-center justify-center rounded-lg typography-display-large bg-surface-container border-outline">
                    {index + 1}
                  </CarouselSlideContent>
                </CarouselSlide>
              ))}
            </CarouselView>
          </Carousel>
        </StoryFrame>
      </Story>
      <Story className="mb-md">
        <Subtitle>With Buttons</Subtitle>
        <StoryFrame>
          <Carousel className="w-full" options={{ slidesToScroll: 'auto' }}>
            <CarouselView
              left={<CarouselPrevButton />}
              right={<CarouselNextButton />}
            >
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((index) => (
                <CarouselSlide key={index} className="basis-1/4">
                  <CarouselSlideContent className="flex h-96 items-center justify-center rounded-lg typography-display-large bg-surface-container border-outline">
                    {index + 1}
                  </CarouselSlideContent>
                </CarouselSlide>
              ))}
            </CarouselView>
          </Carousel>
        </StoryFrame>
      </Story>
      <Story className="mb-md">
        <Subtitle>With Dots</Subtitle>
        <StoryFrame>
          <Carousel
            after={<CarouselDots />}
            className="w-full"
            options={{ slidesToScroll: 'auto' }}
          >
            <CarouselView>
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((index) => (
                <CarouselSlide key={index} className="basis-1/4">
                  <CarouselSlideContent className="flex h-96 items-center justify-center rounded-lg typography-display-large bg-surface-container border-outline">
                    {index + 1}
                  </CarouselSlideContent>
                </CarouselSlide>
              ))}
            </CarouselView>
          </Carousel>
        </StoryFrame>
      </Story>
      <Story>
        <Subtitle>Without controls</Subtitle>
        <StoryFrame>
          <Carousel className="w-full" options={{ slidesToScroll: 'auto' }}>
            <CarouselView>
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((index) => (
                <CarouselSlide key={index} className="basis-1/4">
                  <CarouselSlideContent className="flex h-96 items-center justify-center rounded-lg typography-display-large bg-surface-container border-outline">
                    {index + 1}
                  </CarouselSlideContent>
                </CarouselSlide>
              ))}
            </CarouselView>
          </Carousel>
        </StoryFrame>
      </Story>
    </section>
  );
};
