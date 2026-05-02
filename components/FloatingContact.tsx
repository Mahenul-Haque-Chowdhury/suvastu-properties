'use client';

import { motion } from 'motion/react';

export default function FloatingContact() {
  return (
    <div className="fixed bottom-20 right-10 flex flex-col gap-4 z-50">
      <motion.a
        href="https://wa.me/8801234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-brand-black text-brand-white flex items-center justify-center shadow-[0_12px_30px_rgba(27,33,39,0.22)] hover:scale-110 transition-transform border border-brand-charcoal"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.941-.708-1.792s.448-1.273.607-1.446c.159-.173.346-.217.462-.217s.231.001.332.005c.109.004.253-.041.397.303.145.346.491 1.197.534 1.284.043.087.073.188.014.303-.058.116-.087.188-.173.289l-.26.303c-.087.087-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.303.058.419-.073c.116-.13.491-.571.621-.766.13-.195.26-.159.433-.094.173.065 1.09.514 1.278.608.188.094.313.138.361.221.048.082.048.47-.096.875z"/>
        </svg>
      </motion.a>
    </div>
  );
}
