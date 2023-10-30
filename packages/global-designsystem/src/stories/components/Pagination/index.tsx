import {
  ArrowLeftFilledIcon,
  ArrowRightFilledIcon,
} from "@lookatourdesignsystem/icons-library";
import { useState, useCallback, useEffect, useMemo } from "react";
import {
  Navigation,
  PageInfoText,
  PaginationButton,
  PaginationItem,
  PaginationList,
} from "./styles";
import { getJoinedClassName } from "@lookatourdesignsystem/utils-library";
import { useTheme } from "src/hooks/useTheme";
export interface PaginationProps {
  defaultPage: number;
  totalLength: number;
  sectionSize: number;
  pageInfo?: boolean;
  className?: string;
  testid?: string;
}

export const Pagination = ({
  defaultPage = 1,
  totalLength = 100,
  sectionSize = 10,
  pageInfo = true,
  className,
  testid,
}: PaginationProps) => {
  const theme = useTheme();
  const [currentPage, setCurrentPage] = useState<number>(defaultPage);
  const [pageList, setPageList] = useState<Array<number>>([]);

  const changePageHandler = useCallback((page: number) => {
    if (page > 0) {
      setCurrentPage(page);
    }
  }, []);

  const getPageList = useCallback(() => {
    let newPageList = [];

    if (totalLength < sectionSize) {
      for (let i = 1; i <= totalLength; i++) {
        newPageList.push(i);
      }

      setPageList(newPageList);
    } else {
      const startPage =
        (Math.ceil(currentPage / sectionSize) - 1) * sectionSize + 1;
      const endPage =
        startPage + sectionSize > totalLength
          ? totalLength + 1
          : startPage + sectionSize;

      for (let i = startPage; i < endPage; i++) {
        newPageList.push(i);
      }

      setPageList(newPageList);
    }
  }, [currentPage, sectionSize, totalLength]);

  const targetPageBack = useMemo(
    () => sectionSize * (Math.floor(currentPage / sectionSize) - 1) + 1,
    [currentPage, sectionSize]
  );

  const isDisabledBack = useMemo(
    () => Math.ceil(currentPage / sectionSize) === 1,
    [currentPage, sectionSize]
  );

  const targetPageForward = useMemo(
    () => sectionSize * Math.ceil(currentPage / sectionSize) + 1,
    [currentPage, sectionSize]
  );

  const isDisabledForward = useMemo(
    () => Math.ceil(currentPage / sectionSize) * sectionSize >= totalLength,
    [currentPage, sectionSize, totalLength]
  );

  useEffect(() => {
    setCurrentPage(defaultPage);
  }, [defaultPage]);

  useEffect(() => {
    getPageList();
  }, [getPageList]);

  return (
    <Navigation
      className={getJoinedClassName("Pagination", {
        className,
      })}
      data-testid={testid}
    >
      <PaginationList>
        <PaginationItem>
          <PaginationButton
            onClick={() => changePageHandler(targetPageBack)}
            disabled={isDisabledBack}
          >
            <ArrowLeftFilledIcon />
          </PaginationButton>
        </PaginationItem>
        {pageList.map((item, i) => (
          <PaginationItem key={i}>
            <PaginationButton
              selected={currentPage === item}
              color={theme.colors.primary.main}
              onClick={() => changePageHandler(item)}
            >
              {item}
            </PaginationButton>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationButton
            onClick={() => changePageHandler(targetPageForward)}
            disabled={isDisabledForward}
          >
            <ArrowRightFilledIcon />
          </PaginationButton>
        </PaginationItem>
      </PaginationList>
      {pageInfo ? (
        <PageInfoText>
          {currentPage} / {totalLength}
        </PageInfoText>
      ) : null}
    </Navigation>
  );
};
