import Image from "next/image";

const GallerySection = () => {
  const images = ["/images/ga2.jpg", "/images/ga1.jpg", "/images/ga3.jpg", "/images/ga4.jpg"];

  return (
    <section className="py-10 bg-white">
      {/* Title */}
      <div className="text-center mb-6">
        <h2 className="text-7xl  text-gray-900 font-serif">Gallery</h2>
      </div>

      {/* Grid Container */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {images.map((src, index) => (
            <div key={index} className="relative w-full h-[300px] overflow-hidden rounded-lg shadow-md">
              <Image 
                src={src} 
                alt={`Gallery Image ${index + 1}`} 
                layout="fill" 
                objectFit="cover" 
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
