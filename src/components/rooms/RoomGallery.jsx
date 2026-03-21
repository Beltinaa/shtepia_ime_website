import { useState } from 'react';
import { Expand, X } from 'lucide-react';

function RoomGallery({ images, title }) {
  const [activeImage, setActiveImage] = useState(images[0]);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <div className="space-y-4">
        <div className="relative overflow-hidden rounded-[32px]">
          <img
            src={activeImage}
            alt={`${title} main view`}
            className="aspect-[4/3] w-full object-cover"
          />
          <button
            type="button"
            onClick={() => setIsExpanded(true)}
            className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold uppercase tracking-[0.16em] text-primary backdrop-blur"
          >
            <Expand size={16} />
            Expand
          </button>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => setActiveImage(image)}
              className={`overflow-hidden rounded-2xl border transition duration-300 ${
                activeImage === image ? 'border-primary shadow-md' : 'border-transparent opacity-80'
              }`}
              aria-label={`Show room image ${index + 1}`}
            >
              <img
                src={image}
                alt={`${title} thumbnail ${index + 1}`}
                className="aspect-[4/3] w-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {isExpanded ? (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/85 p-4">
          <button
            type="button"
            onClick={() => setIsExpanded(false)}
            className="absolute right-4 top-4 inline-flex rounded-full bg-white/10 p-3 text-white"
            aria-label="Close gallery overlay"
          >
            <X size={20} />
          </button>
          <img
            src={activeImage}
            alt={`${title} expanded view`}
            className="max-h-[88vh] w-full max-w-5xl rounded-[28px] object-cover"
          />
        </div>
      ) : null}
    </>
  );
}

export default RoomGallery;
