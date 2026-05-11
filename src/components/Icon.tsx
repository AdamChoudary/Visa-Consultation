'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence, Variants, TargetAndTransition } from 'framer-motion';
import { FaInstagram, FaLinkedin, FaFacebook, FaWhatsapp, FaHeadset } from 'react-icons/fa';
import { IoCloseSharp } from 'react-icons/io5';

const socialLinks = [
  {
    href: 'https://chat.whatsapp.com/D43qf5tIaxt0yfs4uN72on',
    icon: <FaWhatsapp className="text-green-500 w-6 h-6" />,
    label: 'WhatsApp',
  },
  {
    href: 'https://www.facebook.com/share/1AVzHjEm71/',
    icon: <FaFacebook className="text-blue-600 w-6 h-6" />,
    label: 'Facebook',
  },
  {
    href: 'https://www.linkedin.com/company/scholarshipxpert/',
    icon: <FaLinkedin className="text-blue-700 w-6 h-6" />,
    label: 'LinkedIn',
  },
  {
    href: 'https://www.instagram.com/the_visaconsultancy/',
    icon: <FaInstagram className="text-pink-500 w-6 h-6" />,
    label: 'Instagram',
  },
];

const iconVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
      type: 'spring',
      stiffness: 300,
      damping: 25,
    },
  }),
  exit: { opacity: 0, y: 30, scale: 0.8, transition: { duration: 0.2 } },
};

const hoverEffect: TargetAndTransition = {
  scale: 1.1,
  transition: {
    duration: 0.3,
    ease: 'easeOut',
  },
};

const Icon: React.FC = React.memo(() => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIcons = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-10 right-10 flex flex-col items-center z-[100]">
      <AnimatePresence>
        {isOpen && (
          <div className="flex flex-col items-center space-y-4 mb-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-3 rounded-full shadow-2xl flex items-center justify-center hover:shadow-[#d0a860]/20 transition-all border border-gray-100"
                custom={socialLinks.length - index}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={iconVariants}
                whileHover={hoverEffect}
                title={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        )}
      </AnimatePresence>

      <motion.div
        className={`cursor-pointer flex items-center justify-center w-16 h-16 rounded-full shadow-2xl transition-all duration-300 ${
          isOpen ? 'bg-[#d0a860] rotate-90' : 'bg-[#d0a860] hover:scale-110'
        }`}
        onClick={toggleIcons}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? (
          <IoCloseSharp className="text-black w-8 h-8" />
        ) : (
          <FaHeadset className="text-black w-8 h-8" />
        )}
      </motion.div>
    </div>
  );
});

export default Icon;