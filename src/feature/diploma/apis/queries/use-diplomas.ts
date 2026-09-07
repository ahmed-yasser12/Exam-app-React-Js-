import {  getDiplomaListApi } from "../diploma-api";
import { DIPLOMA_KEY } from "../diploma-key";
import { useInfiniteQuery } from "@tanstack/react-query";

const DIPLOMAS_PER_PAGE = 6;

export function useDiplomasList() {
  return useInfiniteQuery({
    queryKey:DIPLOMA_KEY.all ,
    initialPageParam: 1,

    queryFn: ({ pageParam }) =>
      getDiplomaListApi({
        page: pageParam,
        limit: DIPLOMAS_PER_PAGE,
      }),

    getNextPageParam: (lastPage) => {
      const { page, totalPages } = lastPage.payload.metadata;
      return page < totalPages ? page + 1 : null;
    },
  });
}