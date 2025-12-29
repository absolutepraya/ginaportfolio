import Image from "next/image";

type BentoImage = {
  src: string;
  alt: string;
};

const DEFAULT_IMAGES: BentoImage[] = [
	{ src: "/image1.jpeg", alt: "Image 1" },
	{ src: "/image1.jpeg", alt: "Image 2" },
	{ src: "/nvidia.png", alt: "Nvidia" },
	{ src: "/atomic.png", alt: "Atomic Finance" },
	{ src: "/ib.png", alt: "IBM" },
	{ src: "/laurier.png", alt: "Wilfrid Laurier University" },
	{ src: "/mitremedia.png", alt: "Mitre Media" },
	{ src: "/waterloo.png", alt: "University of Waterloo" },
];

interface BentoImagesProps {
  images?: BentoImage[];
}

export function BentoImages({ images = DEFAULT_IMAGES }: BentoImagesProps) {
  const columns: BentoImage[][] = [[], [], []];

  for (let i = 0; i < images.length; i += 1) {
    columns[i % 3].push(images[i]);
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-3 gap-3">
        {columns.map((column, columnIndex) => (
          <div key={columnIndex} className="flex flex-col gap-3">
            {column.map((image, imageIndex) => (
              <div
                key={`${image.src}-${imageIndex}`}
                className="overflow-hidden rounded-xl bg-muted/20"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1200}
                  height={1200}
                  className="h-auto w-full object-cover"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}


