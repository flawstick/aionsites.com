import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useTranslations } from "next-intl";

const ScrollDownArrow = () => {
  const t = useTranslations("Hero");

  return (
    <a
      rel="noreferrer noopener"
      className="flex lg:hidden justify-center mt-10"
      href="#about"
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
        className="flex flex-col items-center"
      >
        <ArrowDown className="w-8 h-8 text-gray-500" />
        <p className="text-gray-500 mt-2">{t("scrollDown")}</p>
      </motion.div>
    </a>
  );
};

export default ScrollDownArrow;
