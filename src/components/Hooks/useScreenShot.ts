import { ScreenShot } from "../../entities/Screenshots";
import ApiClient from "../../services/api-client";
import { useQuery } from "@tanstack/react-query";

const useScreenShot = (gameId: number) => {
  const apiclient = new ApiClient<ScreenShot>(`/games/${gameId}/screenshots`);
  return useQuery({
    queryKey: ["screens", gameId],
    queryFn: apiclient.getAll,
  });
};

export default useScreenShot;
