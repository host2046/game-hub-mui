import { useQuery } from "@tanstack/react-query";

const apiClient = new ApiClient<Platform>("/platforms/lists/parents");

import { Platform } from "./use-game";
import ApiClient from "../../services/api-client";
import platforms from "../../data/platforms";

const usePlatform = () =>
  useQuery({
    queryKey: ["platform"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: platforms,
  });

export default usePlatform;
