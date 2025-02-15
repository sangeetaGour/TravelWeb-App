import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import destination1 from "../assets/img1.jpg";
import destination2 from "../assets/img2.jpg";
import destination3 from "../assets/img3.jpg";
import destination4 from "../assets/img4.jpg";

const FeaturedDestinations = () => {
  const destinations = [
    { id: 1, name: "Bali, Indonesia", image: destination1 },
    { id: 2, name: "Santorini, Greece", image: destination2 },
    { id: 3, name: "Kyoto, Japan", image: destination3 },
    { id: 4, name: "Swiss Alps, Switzerland", image: destination4 },
  ];

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Featured Destinations</h2>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          navigation={true}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mt-8"
        >
          {destinations.map((destination) => (
            <SwiperSlide key={destination.id}>
              <div className="relative group overflow-hidden rounded-lg shadow-lg">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-xl font-bold">{destination.name}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FeaturedDestinations;
