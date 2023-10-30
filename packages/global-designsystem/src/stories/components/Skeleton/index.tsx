import { css } from "@emotion/react";
import { getJoinedClassName, uid } from "@lookatourdesignsystem/utils-library";
import { SkeletonVariant, SkeletonWordType } from "src/types";
import { useTheme } from "../../../hooks/useTheme";

export interface SkeletonProps {
  id?: string;
  title?: string;
  variant: SkeletonVariant;
  width: number;
  height: number;
  fullWidth?: boolean;
  fullHeight?: boolean;
  wordType?: SkeletonWordType;
  line?: number;
  radius?: number | string;
  gap?: number;
  equalWidthLines?: boolean;
  className?: string;
  testid?: string;
}

// https://github.com/danilowoz/react-content-loader/tree/master/src/web
export const Skeleton = ({
  id,
  title,
  variant = "text",
  width = 12,
  height = 12,
  fullWidth = false,
  fullHeight = false,
  wordType = "title",
  line = 1,
  radius = 0,
  gap = 0,
  equalWidthLines,
  className,
  testid,
  ...props
}: SkeletonProps) => {
  const theme = useTheme();
  const fixedId = id || uid();
  const idClip = `${fixedId}-diff`;
  const idGradient = `${fixedId}-animated-diff`;
  const idAria = `${fixedId}-aria`;

  /* 추후에 prop이 될 가능성이 있는 값들 */
  const animate = true;
  const animateBegin = undefined;
  const backgroundColor = theme.colors.component.skeleton.background;
  const backgroundOpacity = 1;
  const baseUrl = "";
  const foregroundColor = theme.colors.component.skeleton.foreground;
  const foregroundOpacity = 1;
  const gradientRatio = 2;
  const gradientDirection = "left-right";
  const interval = 0.25;
  // const rtl = false; // rtlStyle 변수와 함께 사용될 가능성이 있음
  const speed = 1.2;
  /* // 추후에 prop이 될 가능성이 있는 값들 */

  const keyTimes = `0; ${interval}; 1`;
  const dur = `${speed}s`;
  const gradientTransform =
    gradientDirection === "left-right" ? undefined : "rotate(90)"; // 그라디언트 애니메이션 방향 (상하 or 좌우) 조정
  // const rtlStyle = rtl ? { transform: "scaleX(-1)" } : null; // react 엘리먼트 right-to-left 정렬(나중에 필요시 svg에 스타일 추가)
  const svgWidth = fullWidth ? "100%" : width;
  const svgHeight = fullHeight
    ? "100%"
    : variant === "shape"
    ? height
    : height * line + gap * (line - 1);

  const getTextRectWidth = (
    line: number,
    index: number,
    variant: SkeletonWordType
  ) => {
    if (variant === "sentence") {
      if (line === index + 1) return 50;
      return 100;
    } else {
      if (index % 3 === 0) return 80;
      if (index % 3 === 1) return 90;
      if (index % 3 === 2) return 60;
    }
  };

  return (
    <svg
      aria-labelledby={idAria}
      role="img"
      className={getJoinedClassName("Skeleton", {
        className: className,
      })}
      width={svgWidth}
      height={svgHeight}
      data-testid={testid}
      {...props}
    >
      {title && <title id={idAria}>{title}</title>}
      <rect
        role="presentation"
        x="0"
        y="0"
        width="100%"
        height="100%"
        clipPath={`url(${baseUrl}#${idClip})`}
        css={css`
          fill: url(${baseUrl}#${idGradient});
        `}
      />

      <defs>
        <clipPath id={idClip}>
          {variant === "shape" ? (
            <rect
              x="0"
              y="0"
              rx={radius}
              ry={radius}
              width={svgWidth}
              height={fullHeight ? "100%" : height}
            />
          ) : (
            variant === "text" &&
            [...Array(line)].map((item, i) => {
              return (
                <rect
                  key={i}
                  x="0"
                  y={(height + gap) * i}
                  rx={radius}
                  ry={radius}
                  width={
                    equalWidthLines
                      ? "100%"
                      : line === 1
                      ? width
                      : `${getTextRectWidth(line, i, wordType)}%`
                  }
                  height={height}
                />
              );
            })
          )}
        </clipPath>

        <linearGradient id={idGradient} gradientTransform={gradientTransform}>
          <stop
            offset="0%"
            stopColor={backgroundColor}
            stopOpacity={backgroundOpacity}
          >
            {animate && (
              <animate
                attributeName="offset"
                values={`${-gradientRatio}; ${-gradientRatio}; 1`}
                keyTimes={keyTimes}
                dur={dur}
                repeatCount="indefinite"
                begin={animateBegin}
              />
            )}
          </stop>

          <stop
            offset="50%"
            stopColor={foregroundColor}
            stopOpacity={foregroundOpacity}
          >
            {animate && (
              <animate
                attributeName="offset"
                values={`${-gradientRatio / 2}; ${-gradientRatio / 2}; ${
                  1 + gradientRatio / 2
                }`}
                keyTimes={keyTimes}
                dur={dur}
                repeatCount="indefinite"
                begin={animateBegin}
              />
            )}
          </stop>

          <stop
            offset="100%"
            stopColor={backgroundColor}
            stopOpacity={backgroundOpacity}
          >
            {animate && (
              <animate
                attributeName="offset"
                values={`0; 0; ${1 + gradientRatio}`}
                keyTimes={keyTimes}
                dur={dur}
                repeatCount="indefinite"
                begin={animateBegin}
              />
            )}
          </stop>
        </linearGradient>
      </defs>
    </svg>
  );
};
