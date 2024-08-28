import * as React from "react"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Image } from "@nextui-org/react"

export const images = [
  {
    id: "1",
    path: "/images/DSC09967.jpg",
  },
  {
    id: "2",
    path: "/images/IMG_1103.JPG",
  },
  {
    id: "3",
    path: "/images/DSC_0280.JPG",
  },
  {
    id: "4",
    path: "/images/DSC09961.jpg",
  },
  {
    id: "5",
    path: "/images/DSC_0297.JPG",
  }
]

export function ImagesComponent() {
  return (
    <ScrollArea className="max-w-screen-lg mx-auto whitespace-nowrap rounded-md mb-5">
      <div className="flex w-max space-x-4 pt-10">
        {images.map((image) => (
          <figure key={image.id} className="shrink-0">
            <div className="overflow-hidden rounded-md">
              <Image
                src={image.path}
                alt="sci-image"
                className="aspect-[3/4] h-[200px] md:h-[250px] w-[250px] md:w-[350px] object-cover"
              />
            </div>
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}
