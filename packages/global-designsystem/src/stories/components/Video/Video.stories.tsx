import { ComponentStory, Meta } from "@storybook/react";
import { Fragment, useRef, useState } from "react";
import { Typography } from "../../foundation/Typography";
import { Video } from ".";
import { Button } from "../Button";
import { videoDesc } from "src/stories/docs/video";

const meta: Meta = {
  title: "Util/Video",
  component: Video,
  args: {
    sources: [
      {
        src: "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
        type: "video/mp4",
      },
    ],
    preload: "auto",
  },
  ...videoDesc,
};

export default meta;

export const Default: ComponentStory<typeof Video> = (args) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <Video
      {...args}
      ref={videoRef}
      errorFallbackEl={<Typography>Fail to load video</Typography>}
    />
  );
};

export const Controller: ComponentStory<typeof Video> = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMute, setIsMute] = useState<boolean>(false);

  const play = () => {
    if (videoRef && videoRef.current) {
      videoRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.log("Error attempting to play", error);
        });
    }
  };

  const pause = () => {
    if (videoRef && videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const backToStart = () => {
    if (videoRef && videoRef.current) {
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  return (
    <Fragment>
      <Typography>isPlaying : {String(isPlaying)}</Typography>
      <Button
        onClick={() => {
          play();
        }}
      >
        play
      </Button>
      <Button
        onClick={() => {
          pause();
        }}
      >
        pause
      </Button>
      <Button
        onClick={() => {
          backToStart();
        }}
      >
        back to start
      </Button>
      <Button
        onClick={() => {
          setIsMute((prev) => !prev);
        }}
      >
        {isMute ? "unmute" : "mute"}
      </Button>
      <Video
        ref={videoRef}
        errorFallbackEl={<Typography>Fail to load video</Typography>}
        muted={isMute}
        sources={[
          {
            src: "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
            type: "video/mp4",
          },
        ]}
        autoPlay
        control={false}
      />
    </Fragment>
  );
};
Controller.parameters = {
  docs: {
    description: {
      story: "useRef로 video의 재생 및 컨트롤이 가능합니다.",
    },
  },
  options: { showPanel: false },
};
