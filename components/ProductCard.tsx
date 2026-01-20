import React, { useState, useRef, useEffect } from 'react';
import { Product } from '../types';
import { Check, Info, Cpu, Wifi, Monitor, Zap, PlayCircle, HardDrive, Maximize, Gauge } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onEnquire: (productName: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onEnquire }) => {
  const [showSpecs, setShowSpecs] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only set up observer if there is a video URL
    if (!product.videoUrl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoadVideo(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '200px', // Start loading when the element is within 200px of the viewport
        threshold: 0.1,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [product.videoUrl]);

  const handleMouseEnter = () => {
    // Fallback: If for some reason observer didn't trigger (e.g., fast scroll), load now
    if (!shouldLoadVideo) {
      setShouldLoadVideo(true);
    }

    if (videoRef.current) {
      // Use a small timeout to ensure the src attribute update has processed if it was just set
      // although React usually handles this, the play() might be called too fast if src was null
      requestAnimationFrame(() => {
        videoRef.current?.play().catch((error) => {
          // It's normal for play() to fail if the user interacts very quickly or if data isn't loaded yet
          console.log("Video playback auto-start:", error);
        });
      });
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div 
      ref={cardRef}
      className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1 group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative overflow-hidden h-72 bg-gray-900">
        {product.videoUrl ? (
          <>
            <video
              ref={videoRef}
              src={shouldLoadVideo ? product.videoUrl : undefined}
              poster={product.image}
              loop
              muted
              playsInline
              preload="metadata" // Only load metadata initially when source is set
              className="w-full h-full object-cover transition-opacity duration-300"
            />
            {/* Play Icon Overlay (Visible on Hover) */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
               <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full border border-white/50 shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                 <PlayCircle className="w-12 h-12 text-white" strokeWidth={1.5} />
               </div>
            </div>
            {/* Video Badge */}
            <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded-full flex items-center z-10 border border-white/20">
              <PlayCircle className="w-3 h-3 mr-1" /> VIDEO
            </div>
          </>
        ) : (
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
        )}
        
        <div className="absolute top-0 right-0 bg-brand-600 text-white px-3 py-1 text-sm font-bold rounded-bl-lg z-10">
          {product.category}
        </div>
        
        {/* Gradient Overlay for text readability if needed */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4 text-sm flex-grow line-clamp-3">{product.description}</p>

        {/* Key Features Preview */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide">Key Features</h4>
          <ul className="space-y-1">
            {product.features.slice(0, 3).map((feat, idx) => (
              <li key={idx} className="flex items-start text-sm text-gray-600">
                <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                {feat}
              </li>
            ))}
          </ul>
        </div>

        {/* Specs Toggle */}
        <button 
          onClick={(e) => {
            e.stopPropagation(); // Prevent affecting hover state oddly if clicked, though mostly fine
            setShowSpecs(!showSpecs);
          }}
          className="text-brand-600 text-sm font-medium flex items-center hover:underline mb-4 focus:outline-none w-fit"
        >
          <Info className="w-4 h-4 mr-1" />
          {showSpecs ? "Hide Specifications" : "View Technical Specs"}
        </button>

        {showSpecs && (
          <div className="bg-slate-50 p-4 rounded-lg mb-4 text-sm space-y-2 border border-slate-200 animate-fadeIn grid grid-cols-1 gap-2">
             {product.specs.panelSize && (
               <div className="flex items-center text-gray-700">
                 <Maximize className="w-4 h-4 mr-2 text-brand-500" /> 
                 <span className="font-semibold mr-1">Size:</span> {product.specs.panelSize}
               </div>
             )}
             {product.specs.resolution && (
               <div className="flex items-center text-gray-700">
                 <Monitor className="w-4 h-4 mr-2 text-brand-500" /> 
                 <span className="font-semibold mr-1">Res:</span> {product.specs.resolution}
               </div>
             )}
             {product.specs.brightness && (
                <div className="flex items-center text-gray-700">
                  <Zap className="w-4 h-4 mr-2 text-brand-500" />
                  <span className="font-semibold mr-1">Bright:</span> {product.specs.brightness}
                </div>
             )}
             {product.specs.os && (
               <div className="flex items-center text-gray-700">
                 <Cpu className="w-4 h-4 mr-2 text-brand-500" />
                 <span className="font-semibold mr-1">OS:</span> {product.specs.os}
               </div>
             )}
             {product.specs.storage && (
                <div className="flex items-center text-gray-700">
                  <HardDrive className="w-4 h-4 mr-2 text-brand-500" />
                  <span className="font-semibold mr-1">Mem:</span> {product.specs.storage}
                </div>
             )}
             {product.specs.connectivity && (
               <div className="flex items-center text-gray-700">
                 <Wifi className="w-4 h-4 mr-2 text-brand-500" />
                 <span className="font-semibold mr-1">Conn:</span> {product.specs.connectivity}
               </div>
             )}
             {product.specs.contrastRatio && (
                <div className="flex items-center text-gray-700">
                  <Gauge className="w-4 h-4 mr-2 text-brand-500" />
                  <span className="font-semibold mr-1">Contrast:</span> {product.specs.contrastRatio}
                </div>
             )}
             {product.specs.power && (
                <div className="flex items-center text-gray-700">
                  <Zap className="w-4 h-4 mr-2 text-brand-500" />
                  <span className="font-semibold mr-1">Pwr:</span> {product.specs.power}
                </div>
             )}
          </div>
        )}

        <button 
          onClick={() => onEnquire(product.name)}
          className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 mt-auto shadow-md"
        >
          Enquire Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;