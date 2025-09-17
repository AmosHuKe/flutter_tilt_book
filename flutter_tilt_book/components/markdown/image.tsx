import NextImage from "next/image"

import { Settings } from "@/lib/meta"

interface Image {
  src?: string
  width?: number
  height?: number
  alt?: string
  title?: string
}

const Image: React.FC<Image> = ({
  src = "",
  width = 200,
  height = 100,
  alt = "",
  title,
}) => {
  return (
    <NextImage
      src={`${Settings.basePath}${src}`}
      width={width}
      height={height}
      alt={alt}
      title={title}
      className="h-full w-full rounded-lg"
    />
  )
}

export default Image
