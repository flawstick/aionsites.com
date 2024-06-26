import axios from "axios";
import { useState } from "react";
import { motion } from "framer-motion";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { LoadingSpinner } from "@/components/Loading"; // Import the loading spinner component
import { useLocale, useTranslations } from "next-intl";

export const Newsletter = () => {
  const [isSent, setIsSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const locale = useLocale();
  const isRTL = locale === "he";
  const t = useTranslations("Newsletter");

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post("/api/email", {
        to: "info@aionsites.com",
        subject: t("emailSubject"),
        text: `${t("name")}: ${formData.name}\n${t("email")}: ${
          formData.email
        }\n${t("company")}: ${formData.company}\n${t("message")}: ${
          formData.message
        }`,
      });

      setIsSent(true);
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact">
      <hr className="w-11/12 mx-auto" />
      <div className="mx-auto w-11/12 max-w-md space-y-6 py-20">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">{t("title")}</h1>
          <p className="text-gray-500 dark:text-gray-400">{t("description")}</p>
        </div>
        {isSent ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="flex flex-col items-center justify-center space-y-4"
          >
            <motion.svg
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="text-green-500"
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                d="M4 12l5 5 11-11"
              />
            </motion.svg>
            <h2 className="text-2xl font-bold">{t("thankYou")}</h2>
            <p className="text-gray-500">{t("messageSent")}</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">{t("name")}</Label>
                <Input
                  id="name"
                  placeholder={t("namePlaceholder")}
                  required
                  className={`prevent-zoom ${isRTL ? "text-right" : ""}`}
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">{t("email")}</Label>
                <Input
                  id="email"
                  placeholder={t("emailPlaceholder")}
                  required
                  type="email"
                  className={`prevent-zoom ${isRTL ? "text-right" : ""}`}
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">{t("company")}</Label>
              <Input
                id="company"
                placeholder={t("companyPlaceholder")}
                required
                className={`prevent-zoom ${isRTL ? "text-right" : ""}`}
                value={formData.company}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">{t("message")}</Label>
              <Textarea
                className={`min-h-[100px] prevent-zoom ${
                  isRTL ? "text-right" : ""
                }`}
                id="message"
                placeholder={t("messagePlaceholder")}
                required
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <Button
              type="submit"
              className="w-full items-center justify-center relative group"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <LoadingSpinner />
              ) : (
                <div
                  className={`${
                    isRTL ? "flex flex-row-reverse" : "flex flex-row"
                  }`}
                >
                  <div
                    className={`text-md ${
                      isRTL ? "-translate-x-2" : "translate-x-2"
                    } group-hover:translate-x-0 transition-all duration-300 transform`}
                  >
                    {t("submit")}
                  </div>
                  <ArrowUp
                    className={`ml-1 w-4 h-4 mt-[2px] transform transition-all duration-300 opacity-0 ${
                      isRTL ? "-translate-x-2" : "translate-x-2"
                    }  group-hover:opacity-100 group-hover:translate-x-0`}
                  />
                </div>
              )}
            </Button>
          </form>
        )}
      </div>
      <hr className="w-11/12 mx-auto" />
    </section>
  );
};

// Prevent zoom on input fields on mobile devices
const preventZoomCss = `
  input.prevent-zoom, textarea.prevent-zoom {
    font-size: 16px;
  }
`;

// Inject the CSS into the document
if (typeof window !== "undefined") {
  const style = document.createElement("style");
  style.innerHTML = preventZoomCss;
  document.head.appendChild(style);
}
