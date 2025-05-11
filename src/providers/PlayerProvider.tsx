import React, { createContext, PropsWithChildren, useContext } from "react";
import { AudioPlayer, useAudioPlayer } from "expo-audio";
import dummyBooks from "@/dummy-books";

type PlayerContextType = {
  player: AudioPlayer;
};

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export default function PlayerProvider({ children }: PropsWithChildren) {
  const book = dummyBooks[0];
  const player = useAudioPlayer({ uri: book.audio_url });
  return (
    <PlayerContext.Provider value={{ player }}>
      {children}
    </PlayerContext.Provider>
  );
}

export const usePlayer = () => useContext(PlayerContext);
