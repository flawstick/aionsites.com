import { useTheme } from "@/components/theme-provider"; // Adjust the import path as necessary
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import dashboardDark from "/public/dashboard.png";
import dashboardLight from "/public/dashboard-light.png";
import { useLocale } from "next-intl";

export const MacWindowCard = () => {
  const { theme } = useTheme();
  const locale = useLocale();
  const isRTL = locale === "he";

  const isDarkMode =
    theme === "dark" ||
    (theme === "system" &&
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);
  const imageSrc = isDarkMode ? dashboardDark : dashboardLight;
  const topBarColor = isDarkMode ? "bg-[rgb(38,38,38)]" : "bg-[rgb(56,56,56)]";

  return (
    <Card
      className={`relative lg:w-[900px] lg:h-[525px] 2xl:w-[1200px] 2xl:h-[700px] hidden lg:block bg-black rounded-3xl overflow-hidden shadow-[0_0_15px_rgba(255,105,180,0.5)] ${
        isRTL
          ? "lg:left-[-10%] 2xl:left-[-20%]"
          : "lg:right-[-10%] 2xl:right-[-20%]"
      } transform transition-transform duration-300 hover:translate-y-[-5px]`}
    >
      <CardHeader className={`flex justify-between p-2 ${topBarColor}`}>
        <div
          className={`flex ${
            isRTL ? "flex-row-reverse gap-2 mr-2" : "space-x-2 ml-2"
          } `}
        >
          <Button className="w-3 h-3 bg-red-500 rounded-full p-0" />
          <Button className="w-3 h-3 bg-yellow-500 rounded-full p-0" />
          <Button className="w-3 h-3 bg-green-500 rounded-full p-0" />
        </div>
      </CardHeader>

      <CardContent className="relative w-full h-full">
        <Image
          src={imageSrc}
          alt="content"
          layout="fill"
          objectFit="cover"
          className="object-cover"
        />
      </CardContent>
    </Card>
  );
};
