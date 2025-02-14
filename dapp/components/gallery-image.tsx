import Image from 'next/image'

interface GalleryImageProps {
  src: string
  alt: string
}

export default function GalleryImage({ src, alt }: GalleryImageProps) {
  return (
    <div className="relative aspect-square overflow-hidden rounded-lg">
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-300 hover:scale-110"
      />
    </div>
  )
}
