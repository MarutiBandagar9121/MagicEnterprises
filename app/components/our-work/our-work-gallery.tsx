"use client"

import { useState } from "react"
import { RiZoomInLine } from "@remixicon/react"
import ImageLightbox from "./image-lightbox"
import { workData } from "../../data/our-work-data"

export default function OurWorkSection() {
  const [activeImage, setActiveImage] = useState<string | null>(null)

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">Our Work</h2>
        <p className="text-gray-600 mt-3">
          A glimpse of what we design and create for our clients
        </p>
      </div>

      <div className="space-y-20">
        {workData.map((category) => (
          <div key={category.id} id={`${category.id}`}>
            <div className="mb-8">
              <h3 className="text-2xl font-semibold">{category.title}</h3>
              {category.description && (
                <p className="text-gray-500 mt-1">{category.description}</p>
              )}
            </div>

            {/* Masonry Grid */}
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
              {category.images.map((img, index) => (
                <div
                  key={index}
                  className="relative group break-inside-avoid overflow-hidden rounded-xl shadow hover:shadow-xl transition"
                >
                  <img
                    src={img.src}
                    alt={img.client}
                    className="w-full h-auto object-cover"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    <button
                      onClick={() => setActiveImage(img.src)}
                      className="bg-white p-3 rounded-full hover:scale-110 transition"
                    >
                      <RiZoomInLine size={24} />
                    </button>
                  </div>

                  {/* Client label */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-sm p-2 opacity-0 group-hover:opacity-100 transition">
                    {img.client}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {activeImage && (
        <ImageLightbox
          src={activeImage}
          onClose={() => setActiveImage(null)}
        />
      )}
    </section>
  )
}
