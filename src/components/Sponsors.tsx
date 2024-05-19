import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import tabletMockup from "/public/tablet-mockup.jpg";
import androidMockup from "/public/android-mockup.png";
import artfulDesktopMockup from "/public/artful-desktop-mockup.png";

const images = [
  {
    src: tabletMockup,
    alt: "Stunning Design",
    title: "Stunning Design",
    description: "Custom Tablets for Your Needs",
  },
  {
    src: androidMockup,
    alt: "Responsive Applications",
    title: "Responsive Applications",
    description: "Develop and Tailor Mobile Applications",
  },
  {
    src: artfulDesktopMockup,
    alt: "Analytics",
    title: "Analytics & Dashboard",
    description:
      "Manage and Administrate Your Business, Make Informed Decisions",
  },
];
export function Gallery() {
  return (
    <section
      id="carousel"
      className="hidden xl:flex flex-col items-center justify-center py-8 sm:py-12 md:py-16 lg:py-20 w-full"
    >
      <div className="text-center px-4 sm:px-0">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          The Essence of Our Brand
        </h2>
        <p className="mt-3 text-gray-500 max-w-md mx-auto sm:mt-5 sm:text-lg md:mt-6">
          We create breathtaking software easily integrable into YOUR workflow.
        </p>
      </div>
      <Carousel className="w-full max-w-[1200px] mt-8 text-black dark:text-white">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative group">
                <Image
                  alt={image.alt}
                  className="object-cover w-full rounded-lg"
                  height={600}
                  src={image.src}
                  style={{
                    aspectRatio: "1200/600",
                    objectFit: "cover",
                  }}
                  width={1200}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-lg group-hover:from-gray-900/70 transition-colors duration-300" />
                <div className="absolute bottom-4 left-4 text-white text-lg font-medium group-hover:bottom-8 transition-all duration-300">
                  {image.title}
                </div>
                <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/50 rounded-lg transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <p className="text-white text-2xl font-bold">
                    {image.description}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white dark:bg-black/50 dark:hover:bg-black rounded-full p-2 shadow-lg transition-colors">
          <ChevronLeftIcon className="h-6 w-6 text-black z-30" />
        </CarouselPrevious>
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white dark:bg-black/50 dark:hover:bg-black rounded-full p-2 shadow-lg transition-colors">
          <ChevronRightIcon className="h-6 w-6 text-black z-30" />
        </CarouselNext>
      </Carousel>
    </section>
  );
}

function ChevronLeftIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
