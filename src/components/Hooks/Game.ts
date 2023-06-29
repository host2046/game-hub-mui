import { Publishers } from "../../entities/Publishers";
import { Platform } from "./use-game";
import { Genre } from "./useGenre";

export interface Game {
  id: number;
  slug: string;
  name: string;
  genres: Genre[];
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  description_raw: string;
  publishers: Publishers[];
}
