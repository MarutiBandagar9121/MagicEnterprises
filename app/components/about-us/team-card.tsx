"use client";
import React from 'react';
import { RiWhatsappFill, RiFacebookFill} from '@remixicon/react';

export interface TeamCardProps {
  imageUrl: string;
  name: string;
  designation: string;
  description: string;
  socialLinks: {
    whatsapp?: string;
    facebook?: string;
  };
  className?: string;
}

const TeamCard: React.FC<TeamCardProps> = ({
  imageUrl,
  name,
  designation,
  description,
  socialLinks,
  className = ''
}) => {
  // Default fallback image
  const defaultImage = "/images/user-fallback.png";

  return (
    <div className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 max-w-80 ${className}`}>
      {/* Image Section */}
      <div className="relative h-80 overflow-hidden bg-linear-to-br from-blue-50 to-gray-100">
        <img
          src={imageUrl || defaultImage}
          alt={name}
          className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            (e.target as HTMLImageElement).src = defaultImage;
          }}
        />
        
        {/* Social Icons Overlay on Hover */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
          <div className="flex gap-4 transform translate-y-4 hover:translate-y-0 transition-transform duration-300">
            {socialLinks.whatsapp && (
              <a
                href={socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transform hover:-translate-y-1 transition-all duration-200 hover:shadow-lg"
                aria-label={`WhatsApp ${name}`}
              >
                <RiWhatsappFill size={20} />
              </a>
            )}
            {socialLinks.facebook && (
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-800 text-white p-3 rounded-full hover:bg-blue-900 transform hover:-translate-y-1 transition-all duration-200 hover:shadow-lg"
                aria-label={`Facebook ${name}`}
              >
                <RiFacebookFill size={20} />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Name and Designation */}
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-gray-900 mb-1">{name}</h3>
          <p className="text-blue-600 font-medium text-sm uppercase tracking-wide">{designation}</p>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
          {description}
        </p>

        {/* Social Icons (Visible on Mobile/Always) */}
        <div className="flex justify-center gap-4 pt-4 border-t border-gray-100 md:hidden">
          {socialLinks.whatsapp && (
            <a
              href={socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-500 transition-colors duration-200"
              aria-label={`WhatsApp ${name}`}
            >
              <RiWhatsappFill size={22} />
            </a>
          )}
          {socialLinks.facebook && (
            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-800 transition-colors duration-200"
              aria-label={`Facebook ${name}`}
            >
              <RiFacebookFill size={22} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;