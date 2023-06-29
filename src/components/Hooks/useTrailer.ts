import { useQuery } from "@tanstack/react-query";
import ApiClient from "../../services/api-client";
import { Trailer } from "../../entities/Trailer";
const useTrailer = (gameId: number) => {
  const apiclient = new ApiClient<Trailer>(`/games/${gameId}/movies`);

  return useQuery({
    queryKey: ["trailer", gameId],
    queryFn: apiclient.getAll,
  });
};

export default useTrailer;
