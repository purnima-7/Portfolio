"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ProjectMockup from "../ui/ProjectMockup";

interface ProjectGalleryProps {
  images: string[];
}

export default function ProjectGallery({
  images,
}: ProjectGalleryProps) {
  return (
    <section className="mt-20 space-y-8">
      {images.map((image, index) => (
        <motion.div
          key={image}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: index * 0.1,
          }}
          whileHover={{
            y: -4,
          }}
          className="
            overflow-hidden
            rounded-[32px]
            border
            border-black/10
            bg-[#F8F6F2]
            shadow-[0_30px_80px_rgba(0,0,0,.08)]
          "
        >
          <div className="relative aspect-[16/9] w-full">
            <ProjectMockup
              image={image}
              title={`Screenshot ${index + 1}`}
            />
          </div>
        </motion.div>
      ))}
    </section>
  );
}