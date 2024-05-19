import { Statistics } from "./Statistics";

export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={"/about.png"}
            alt=""
            className="w-[320px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                Aionsites
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                At Aionsites, we are dedicated to revolutionizing the way
                businesses operate by providing innovative technology solutions.
                Our expertise spans across website development, mobile
                applications, robotics, and advanced analytics, tailored to meet
                the unique needs of your business.
              </p>
            </div>
            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
