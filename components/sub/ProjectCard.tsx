import Image from "next/image";
import React from "react";
import Link from "next/link";

interface Props {
  src: string;
  title: string;
  description: string;
  link?: string;
}

const ProjectCard = ({ src, title, description, link }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <Image src={src} alt={title} width={1000} height={1000} className="w-full object-contain" />
      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
        {link && (
          <Link href={link} passHref>
            <a className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;