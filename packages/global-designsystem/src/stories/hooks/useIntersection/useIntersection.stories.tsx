import { Meta } from "@storybook/react";
import { Fragment, useEffect, useRef } from "react";
import { Typography } from "../../foundation/Typography";
import { useIntersection } from "src/hooks/components";
import { css } from "@emotion/react";
import { useIntersectionDesc } from "src/stories/docs/useIntersection";

const meta: Meta = {
  title: "Hooks/useIntersection",
  ...useIntersectionDesc,
};

export default meta;

export const Observe = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const inViewport = useIntersection(
    videoRef,
    {
      rootMargin: "0px",
      threshold: [0.25, 0.75],
    },
    undefined,
    false
  );

  useEffect(() => {
    if (videoRef.current) {
      if (inViewport) {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.then((_) => {}).catch((error) => {});
        }
      } else {
        videoRef.current.pause();
      }
    }
  }, [inViewport]);
  return (
    <Fragment>
      <Typography>scroll down</Typography>
      <div
        css={css`
          height: 2000px;
          display: flex;
          align-items: center;
          justify-content: center;
        `}
      >
        <video
          ref={videoRef}
          src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
        ></video>
      </div>
    </Fragment>
  );
};

export const KeepObserve = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const inViewport = useIntersection(
    videoRef,
    {
      rootMargin: "0px",
      threshold: [0.25, 0.75],
    },
    undefined,
    true
  );

  useEffect(() => {
    if (videoRef.current) {
      if (inViewport) {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.then((_) => {}).catch((error) => {});
        }
      } else {
        videoRef.current.pause();
      }
    }
  }, [inViewport]);
  return (
    <Fragment>
      <Typography>scroll down</Typography>
      <div
        css={css`
          height: 2000px;
          display: flex;
          align-items: center;
          justify-content: center;
        `}
      >
        <video
          ref={videoRef}
          src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
        ></video>
      </div>
    </Fragment>
  );
};
