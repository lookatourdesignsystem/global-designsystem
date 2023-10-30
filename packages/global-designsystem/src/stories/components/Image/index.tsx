import { css } from "@emotion/react";
import { getJoinedClassName } from "@lookatourdesignsystem/utils-library";
import {
  RefObject,
  useEffect,
  useRef,
  useState,
  SyntheticEvent,
  Fragment,
} from "react";
import { useIntersection } from "../../../hooks/components";

export interface ImageProps {
  width: number | string;
  height?: number | string;
  src: string;
  backgroundColor?: string;
  alt?: string;
  radius?: number;
  hideIfError?: boolean;
  maxWidth?: number | string;
  maxHeight?: number | string;
  lazy?: boolean;
  observe?: {
    threshold?: number | number[];
    rootMargin?: string;
    root?: RefObject<HTMLDivElement>;
  };
  className?: string;
  sources?: {
    srcSet: string;
    type: "webp" | "avif" | "gif" | "jpeg" | "png" | "svg+xml" | "apng";
  }[];
  draggable?: boolean;
  ratio?: "auto" | string;
  srcSet?: string;
  onLoad?: (e?: SyntheticEvent<HTMLImageElement>) => void;
  onError?: (e?: SyntheticEvent<HTMLImageElement>) => void;
  testid?: string;
}

export const Image = ({
  width,
  height,
  maxWidth,
  maxHeight,
  src,
  backgroundColor,
  alt = "image",
  radius = 0,
  hideIfError,
  lazy = false,
  observe,
  className = "",
  sources,
  draggable = false,
  ratio = "auto",
  srcSet,
  onLoad,
  onError,
  testid,
}: ImageProps) => {
  const [isError, setIsError] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);
  const sourceRefs = useRef<(HTMLSourceElement | null)[]>([]);
  const inViewport = useIntersection(
    imageRef,
    {
      root: observe?.root,
      threshold: observe?.threshold,
      rootMargin: observe?.rootMargin,
    },
    lazy
  );

  useEffect(() => {
    if (!lazy) {
      return;
    }
    if ("IntersectionObserver" in window) {
      if (inViewport) {
        if (imageRef.current) {
          imageRef.current.src = imageRef.current.dataset.src || "";
        }

        sourceRefs.current.forEach((source: HTMLSourceElement | null) => {
          if (source) {
            source.srcset = source.dataset.src || "";
          }
        });
      }
    } else {
      let lazyLoadThrottleTimeout: number;
      const lazyLoad = () => {
        if (lazyLoadThrottleTimeout) {
          clearTimeout(lazyLoadThrottleTimeout);
        }
        lazyLoadThrottleTimeout = window.setTimeout(function () {
          const scrollTop = window.pageYOffset;
          if (imageRef.current) {
            const margin = observe?.rootMargin || "";
            if (
              imageRef.current.offsetTop +
                Number(margin.replace("px", "") || 0) <
              window.innerHeight + scrollTop
            ) {
              imageRef.current.src = imageRef.current.dataset.src || "";

              sourceRefs.current.forEach((source: HTMLSourceElement | null) => {
                if (source) {
                  source.srcset = source.dataset.src || "";
                }
              });
            }
            document.removeEventListener("scroll", lazyLoad);
            window.removeEventListener("resize", lazyLoad);
            window.removeEventListener("orientationChange", lazyLoad);
          }
        }, 20);
      };
      document.addEventListener("scroll", lazyLoad);
      (window as Window).addEventListener("resize", lazyLoad);
      (window as Window).addEventListener("orientationChange", lazyLoad);
    }
  }, [lazy, inViewport]);

  return (
    <Fragment>
      {(isError === true && hideIfError === true) === false && (
        <picture
          data-testid={testid}
          css={css`
            display: block;
            width: ${typeof width === "number" ? `${width}px` : width};
            height: ${typeof height === "number" ? `${height}px` : height};
            max-width: ${typeof maxWidth === "number"
              ? `${maxWidth}px`
              : maxWidth};
            max-height: ${typeof maxHeight === "number"
              ? `${maxHeight}px`
              : maxHeight};
          `}
        >
          {sources &&
            sources.length > 0 &&
            sources.map(({ srcSet, type }, i) => {
              return (
                <source
                  ref={(el) => (sourceRefs.current[i] = el)}
                  key={i}
                  srcSet={lazy ? undefined : srcSet}
                  data-src={lazy ? srcSet : undefined}
                  type={`image/${type}`}
                />
              );
            })}
          <img
            ref={imageRef}
            width={width}
            height={height}
            src={lazy ? undefined : src}
            data-src={lazy ? src : undefined}
            alt={alt}
            css={css`
              width: 100%;
              height: 100%;
              max-width: inherit;
              max-height: inherit;
              aspect-ratio: ${ratio || "auto"};
              border-radius: ${radius || 0}px;
              background-color: ${backgroundColor};
            `}
            srcSet={srcSet}
            className={getJoinedClassName("Image", {
              className,
            })}
            onLoad={onLoad}
            onError={(e) => {
              setIsError(true);
              onError && onError(e);
            }}
            loading={lazy ? "lazy" : "eager"}
            draggable={draggable}
          />
        </picture>
      )}
    </Fragment>
  );
};
