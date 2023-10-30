import { getJoinedClassName } from "@lookatourdesignsystem/utils-library";
import { ReactElement, useState, Fragment, useEffect, forwardRef } from "react";

export interface AudioProps {
  sources: {
    src: string;
    type: "audio/wav" | "audio/mp3";
  }[];
  onEnded?: () => void;
  errorFallbackEl?: ReactElement;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  autoPlay?: boolean;
  preload?: "auto" | "metadata" | "none";
  className?: string;
  testid?: string;
}

export const Audio = forwardRef<HTMLAudioElement, AudioProps>(
  (
    {
      sources,
      onEnded,
      errorFallbackEl,
      loop,
      muted,
      controls = true,
      autoPlay,
      preload = "auto",
      className,
      testid,
    }: AudioProps,
    ref
  ) => {
    const [isError, setIsError] = useState<boolean>(false);

    useEffect(() => {
      if (ref === null || typeof ref === "function" || !ref.current) {
        return;
      }

      if (autoPlay) {
        const playPromise = ref.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then((_) => {})
            .catch((error) => {
              setIsError(true);
            });
        }
      }
    }, []);

    if (isError) {
      return <Fragment>{errorFallbackEl}</Fragment>;
    }

    return (
      <audio
        className={getJoinedClassName("Video", {
          className,
        })}
        ref={ref}
        muted={muted}
        autoPlay={autoPlay}
        loop={loop}
        controls={controls}
        onEnded={onEnded}
        preload={preload}
        data-testid={testid}
      >
        {sources.map(({ src, type }, i) => {
          return <source key={i} src={src} type={type} />;
        })}
      </audio>
    );
  }
);
