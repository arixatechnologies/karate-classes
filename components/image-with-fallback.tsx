"use client";

import Image from "next/image";
import { useState } from "react";

type ImageWithFallbackProps = {
  src: string;
  fallback: string;
  alt: string;
  className?: string;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
  width?: number;
  height?: number;
};

export function ImageWithFallback({ src, fallback, alt, className, fill, priority, sizes, width, height }: ImageWithFallbackProps) {
  const [imageSrc, setImageSrc] = useState(src);

  return (
    <Image
      src={imageSrc}
      alt={alt}
      className={className}
      fill={fill}
      priority={priority}
      sizes={sizes}
      width={width}
      height={height}
      onError={() => setImageSrc(fallback)}
    />
  );
}
