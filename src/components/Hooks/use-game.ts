import { useInfiniteQuery } from "@tanstack/react-query";

import ApiClient, { fetchDataRes } from "../../services/api-client";
import useGameQueryStore from "../../store/store";
import { Game } from "./Game";
const apiClient = new ApiClient<Game>("/games");
export interface Platform {
  id: number;
  name: string;
  slug: string;
}
const useGame = () => {
  const gameQuery = useGameQueryStore((s) => s.gamequery);
  return useInfiniteQuery<fetchDataRes<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.text,
          page: pageParam,
        },
      }),

    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: 24 * 60 * 60 * 1000,
  });
};

export default useGame;
