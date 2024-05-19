import { motion } from "framer-motion";

export const LoadingSpinner = () => {
  return (
    <motion.div
      className="loader"
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      style={{
        border: "4px solid rgba(0, 0, 0, 0.1)",
        borderTop: "4px solid #000",
        borderRadius: "50%",
        width: "24px",
        height: "24px",
      }}
    />
  );
};
