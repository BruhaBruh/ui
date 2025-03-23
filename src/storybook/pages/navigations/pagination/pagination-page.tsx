import { Pagination } from '@/components';
import { Story, StoryFrame, Subtitle, Title } from '@/storybook/components';
import React from 'react';

export const PaginationPage: React.FC = () => {
  const [page, setPage] = React.useState(1);
  return (
    <section className="debug-screens mx-auto w-full max-w-screen-lg">
      <Title>Pagination</Title>
      <Story>
        <Subtitle>Playground</Subtitle>
        <StoryFrame className="flex-col">
          <Pagination
            page={page}
            onChangePage={setPage}
            pageAmount={25}
            maxPagesToView={5}
          />
          <Pagination
            page={page}
            onChangePage={setPage}
            pageAmount={25}
            maxPagesToView={8}
          />
        </StoryFrame>
      </Story>
    </section>
  );
};
