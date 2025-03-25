import { motion } from "framer-motion";

export default function AnimatedContainer({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-xl border border-white/20"
    >
      {children}
    </motion.div>
  );
}
