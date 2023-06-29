import { create } from "zustand";
import { Platform } from "../components/Hooks/use-game";
export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  text?: string;
}
interface GameQueryStore {
  gamequery: GameQuery;
  setSearch: (text: string) => void;
  setPlatfromId: (platfomId: number) => void;
  setGenreId: (genreId: number) => void;
  setSortOrder: (oredr: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gamequery: {},
  setSearch: (text) => set(() => ({ gamequery: { text } })),
  setGenreId: (genreId) =>
    set((state) => ({ gamequery: { ...state.gamequery, genreId } })),
  setPlatfromId: (platformId) =>
    set((state) => ({ gamequery: { ...state.gamequery, platformId } })),
  setSortOrder: (order) =>
    set((state) => ({ gamequery: { ...state.gamequery, order } })),
}));

export default useGameQueryStore;
