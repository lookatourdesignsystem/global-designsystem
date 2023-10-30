import { getJoinedClassName } from "@lookatourdesignsystem/utils-library";
import {
  ReactElement,
  useState,
  Fragment,
  useEffect,
  forwardRef,
  SyntheticEvent,
} from "react";

export interface VideoProps {
  sources: {
    src: string;
    type: "video/webm" | "video/mp4";
  }[];
  onEnded?: () => void;
  errorFallbackEl?: ReactElement;
  loop?: boolean;
  muted?: boolean;
  autoPlay?: boolean;
  poster?: string;
  control?: boolean;
  preload?: "auto" | "metadata" | "none";
  className?: string;
  testid?: string;
}

export const Video = forwardRef<HTMLVideoElement, VideoProps>(
  (
    {
      sources,
      onEnded,
      errorFallbackEl,
      loop,
      muted = true,
      autoPlay = false,
      poster,
      control = true,
      preload = "auto",
      className,
      testid,
    }: VideoProps,
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
    }, [autoPlay, ref]);

    if (isError) {
      return <Fragment>{errorFallbackEl}</Fragment>;
    }

    return (
      <video
        className={getJoinedClassName("Video", {
          className,
        })}
        ref={ref}
        muted={muted}
        autoPlay={autoPlay}
        playsInline
        preload={preload}
        loop={loop}
        onEnded={onEnded}
        poster={poster}
        controls={control}
        onError={(e: SyntheticEvent<HTMLVideoElement>) => {
          setIsError(true);
        }}
        data-testid={testid}
      >
        {sources.map(({ src, type }, i) => {
          return <source key={i} src={src} type={type} />;
        })}
      </video>
    );
  }
);
