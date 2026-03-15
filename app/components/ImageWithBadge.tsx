"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ImageWithBadgeProps {
  imageUrl: string;
  imageAlt: string;
  badgeNumber?: string;
  badgeText?: string;
  height?: string;
  width?: string;
  showBadge?: boolean;
  className?: string;
}

export default function ImageWithBadge({
  imageUrl,
  imageAlt,
  badgeNumber = "17+",
  badgeText = "Años de\nExperiencia",
  height,
  width = "w-full",
  showBadge = true,
  className = "",
}: ImageWithBadgeProps) {
  const heightClass = height || "h-[300px] lg:h-[400px]";
  
  return (
    <div className={`relative ${className}`}>
      <div className={`relative overflow-hidden rounded-lg ${width}`}>
        {/* Image */}
        <div className={`relative ${heightClass}`}>
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Diagonal Orange Overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 400 100"
            className="w-full"
            preserveAspectRatio="none"
          >
            <polygon
              points="0,50 0,100 400,100 400,0"
              fill="#0555be"
              opacity="0.9"
            />
            <polygon
              points="0,30 0,100 350,100"
              fill="#1637f3"
              opacity="0.7"
            />
          </svg>
        </div>
      </div>

      {/* Years of Experience Badge - White circle */}
      {showBadge && (
        <motion.div
          className="absolute bottom-8 right-8 flex h-32 w-32 items-center justify-center rounded-full bg-white shadow-2xl"
          // initial={{ scale: 0, rotate: -180 }}
          // whileInView={{ scale: 1, rotate: 0 }}
          // viewport={{ once: true }}
          // transition={{
          //     duration: 0.8,
          //     delay: 0.6,
          //     type: "spring",
          //     stiffness: 200,
          // }}
          // whileHover={{ scale: 1.05, rotate: 5 }}
        >
          <div className="text-center">
            <div className="text-5xl font-bold text-blue-600">{badgeNumber}</div>
            <div className="text-xs font-semibold uppercase text-gray-700 whitespace-pre-line">
              {badgeText}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
