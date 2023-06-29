import { useQuery } from "@tanstack/react-query";
import ApiClient from "../../services/api-client";
import { Game } from "./Game";
const apiclient = new ApiClient<Game>("/games");
const useGames = (slug: string) =>
  useQuery({
    queryKey: ["games", slug],
    queryFn: () => apiclient.get(slug),
  });

export default useGames;
