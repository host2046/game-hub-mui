import { useQuery } from "@tanstack/react-query";
import genres from "../../data/genres";

import ApiClient from "../../services/api-client";
const apiclient = new ApiClient<Genre>("/genres");
export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

const useGenre = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiclient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: genres,
  });

export default useGenre;
