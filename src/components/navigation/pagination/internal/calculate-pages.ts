export const calculatePages = ({
  page,
  pageAmount,
  maxPagesToView,
}: {
  page: number;
  pageAmount: number;
  maxPagesToView: number;
}) => {
  let leftCount: number, rightCount: number;

  if (maxPagesToView % 2 === 0) {
    leftCount = maxPagesToView / 2;
    rightCount = maxPagesToView / 2 - 1;
  } else {
    leftCount = rightCount = Math.floor(maxPagesToView / 2);
  }

  let start = page - leftCount;
  let end = page + rightCount;

  if (start < 1) {
    const diff = 1 - start;
    end = Math.min(end + diff, pageAmount);
    start = 1;
  }

  if (end > pageAmount) {
    const diff = end - pageAmount;
    start = Math.max(start - diff, 1);
    end = pageAmount;
  }

  const pages: number[] = [];
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return pages;
};
