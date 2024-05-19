import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { MacWindowCard } from "./MacWindowCard";
import { ArrowLongRightIcon } from "./Icons";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text">
              Boosting
            </span>{" "}
            {""}
            Businesses With
          </h1>{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              Modern
            </span>{" "}
            Tech
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          We offer innovative technology solutions to elevate your business,
          including websites, apps, robots, and analytics.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <a
            rel="noreferrer noopener"
            href="#contact"
            className={`w-full md:w-1/3 items-center justify-center relative group ${buttonVariants(
              {
                variant: "default",
              },
            )}`}
          >
            <div className="text-md translate-x-4 group-hover:translate-x-0 transition-all duration-300 transform">
              Get Started
            </div>
            <ArrowLongRightIcon className="ml-2 w-6 h-6 mt-[2px] transform transition-all duration-300 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0" />
          </a>

          <a
            rel="noreferrer noopener"
            href="#contact"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Contact Us
          </a>
        </div>
      </div>

      <div className="flex justify-center items-center ">
        <MacWindowCard />
      </div>
    </section>
  );
};
