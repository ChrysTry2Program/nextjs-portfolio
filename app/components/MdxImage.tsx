// No "use client" — keep this server-compatible
import Image, { ImageProps } from "next/image";

export default function MdxImage(props: ImageProps) {
  // Just forward props to next/image
  return <Image {...props} />;
}
