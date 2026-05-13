import { cn } from "@/utils";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, AlertCircle, Info } from "lucide-react";
import type { Toast } from "@/types";

interface ToastContainerProps {
  toasts: Toast[];
  onRemove: (id: string) => void;
}

const icons = {
  success: <CheckCircle size={18} className="text-pw-green" />,
  error: <AlertCircle size={18} className="text-pw-red" />,
  info: <Info size={18} className="text-pw-purple" />,
};

const bgColors = {
  success: "bg-pw-green-light",
  error: "bg-red-50",
  info: "bg-purple-50",
};

export const ToastContainer = ({ toasts, onRemove }: ToastContainerProps) => (
  <div className="fixed top-4 right-4 z-[100] flex flex-col gap-2 pointer-events-none">
    <AnimatePresence mode="popLayout">
      {toasts.map((toast) => (
        <motion.div
          key={toast.id}
          layout
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 50, scale: 0.9 }}
          className={cn(
            "pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-2xl shadow-pw-md",
            "min-w-[280px] max-w-[400px]",
            bgColors[toast.type]
          )}
        >
          {icons[toast.type]}
          <span className="text-sm font-medium text-app-dark flex-1">{toast.message}</span>
          <button
            type="button"
            onClick={() => onRemove(toast.id)}
            className="p-1 hover:bg-black/5 rounded-full transition-colors"
          >
            <X size={14} className="text-app-muted" />
          </button>
        </motion.div>
      ))}
    </AnimatePresence>
  </div>
);
