import type { ReactElement, ReactNode } from "react";
import { CustomButton } from "./CustomButton";
import { CustomIcon } from "./CustomIcon";

interface IPaginationProps {
  currentPage: number;
  next: () => void;
  pageCount: number;
  previous: () => void;
}

export const Pagination = ({
  currentPage,
  next,
  pageCount,
  previous,
}: IPaginationProps): ReactElement => {
  const renderPagination = (): ReactNode => {
    return (
      <p>
        {currentPage} / {pageCount}
      </p>
    );
  };

  return (
    <section className="pagination">
      <CustomButton
        disabled={currentPage === 1 ? true : undefined}
        onClick={previous}
      >
        <CustomIcon icon="arrow_circle_left" />
      </CustomButton>

      {renderPagination()}

      <CustomButton
        disabled={currentPage === pageCount ? true : undefined}
        onClick={next}
      >
        <CustomIcon icon="arrow_circle_right" />
      </CustomButton>
    </section>
  );
};
