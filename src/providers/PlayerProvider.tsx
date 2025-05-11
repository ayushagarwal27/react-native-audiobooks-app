import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from "react";
import { AudioPlayer, useAudioPlayer } from "expo-audio";
import dummyBooks from "@/dummy-books";

type PlayerContextType = {
  player: AudioPlayer;
  book: any;
  setBook: any;
};

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export default function PlayerProvider({ children }: PropsWithChildren) {
  const [book, setBook] = useState<any | null>(null);
  const player = useAudioPlayer({ uri: book?.audio_url });
  return (
    <PlayerContext.Provider value={{ player, book, setBook }}>
      {children}
    </PlayerContext.Provider>
  );
}

export const usePlayer = () => {
  const context = useContext(PlayerContext);
  if (!context) {
    throw new Error("usePlayer must be used within a player provider");
  }
  return context;
};
