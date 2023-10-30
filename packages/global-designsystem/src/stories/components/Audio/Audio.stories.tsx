import { ComponentStory, Meta } from "@storybook/react";
import { Fragment, useRef, useState } from "react";
import { Typography } from "../../foundation/Typography";
import { Audio } from ".";
import { Button } from "../Button";
import { audioDesc } from "src/stories/docs/audio";

const meta: Meta = {
  title: "Util/Audio",
  component: Audio,
  args: {
    sources: [
      {
        src: "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
        type: "video/mp4",
      },
    ],
    preload: "auto",
  },
  ...audioDesc,
};

export default meta;

export const Default: ComponentStory<typeof Audio> = (args) => {
  return (
    <Audio
      {...args}
      loop
      controls
      sources={[
        {
          src: "https://samplelib.com/lib/preview/mp3/sample-9s.mp3",
          type: "audio/wav",
        },
      ]}
    />
  );
};

export const Controller: ComponentStory<typeof Audio> = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const play = () => {
    if (audioRef && audioRef.current) {
      audioRef.current
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
    if (audioRef && audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const backToStart = () => {
    if (audioRef && audioRef.current) {
      audioRef.current.currentTime = 0;
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
      <Audio
        ref={audioRef}
        sources={[
          {
            src: "https://samplelib.com/lib/preview/mp3/sample-9s.mp3",
            type: "audio/mp3",
          },
        ]}
        controls={false}
      />
    </Fragment>
  );
};
Controller.parameters = {
  docs: {
    description: {
      story: "useRef로 audio의 재생 및 컨트롤이 가능합니다.",
    },
  },
  options: { showPanel: false },
};
