'use client';

import { motion } from 'motion/react';

export default function FloatingContact() {
  return (
    <div className="fixed bottom-3 right-4 z-50 flex flex-col gap-3 md:bottom-16 md:right-10 md:gap-4">
      <motion.a
        href="https://wa.me/8801234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-charcoal bg-brand-black text-brand-white shadow-[0_12px_30px_rgba(27,33,39,0.22)] transition-transform hover:scale-110 md:h-11 md:w-11"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg width="22" height="22" viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <path
            d="M16.05 4.5c-6.33 0-11.47 5.12-11.47 11.43 0 2.02.53 3.98 1.54 5.7L4.5 27.5l5.99-1.57a11.49 11.49 0 0 0 5.55 1.42h.01c6.32 0 11.45-5.12 11.45-11.43A11.4 11.4 0 0 0 16.05 4.5Z"
            fill="currentColor"
          />
          <path
            d="M16.04 6.34c5.29 0 9.59 4.28 9.59 9.57 0 5.28-4.3 9.58-9.58 9.58-1.75 0-3.47-.48-4.96-1.37l-.35-.2-3.56.93.95-3.47-.23-.36a9.48 9.48 0 0 1-1.46-5.09c0-5.28 4.31-9.59 9.6-9.59Z"
            fill="url(#whatsapp-cutout)"
          />
          <path
            d="M12.33 10.77c-.18-.4-.36-.41-.53-.42h-.45c-.16 0-.43.06-.66.31-.22.25-.86.84-.86 2.05 0 1.2.89 2.36 1.02 2.52.13.17 1.75 2.81 4.33 3.82 2.14.84 2.58.67 3.04.63.47-.05 1.5-.61 1.71-1.2.21-.59.21-1.1.15-1.2-.06-.1-.23-.16-.48-.29-.25-.12-1.5-.74-1.74-.82-.23-.08-.4-.12-.57.13-.17.25-.65.82-.79.98-.15.16-.29.18-.54.06-.25-.13-1.06-.39-2.01-1.24-.74-.66-1.24-1.48-1.39-1.73-.15-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.12-.15.17-.25.25-.42.08-.16.04-.31-.02-.43-.06-.12-.55-1.33-.76-1.82Z"
            fill="#1B2127"
          />
          <defs>
            <linearGradient id="whatsapp-cutout" x1="16.04" y1="6.34" x2="16.04" y2="25.49" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFFFFF" />
              <stop offset="1" stopColor="#E9EDF0" />
            </linearGradient>
          </defs>
        </svg>
      </motion.a>
    </div>
  );
}
