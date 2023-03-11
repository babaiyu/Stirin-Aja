import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import CarItem from "./CarItem";

export default function ListCar({ cars = [] }) {
    return (
        <section
            className="container max-w-7xl mx-auto px-4 pt-24 pb-16"
            id="cars"
        >
            <div className="mb-4 text-center">
                <h2 className="text-4xl font-bold">Available Cars</h2>
                <p className="text-lg">
                    Semua mobil keren kami siap untuk membantumu untuk belajar
                    di Stirin Aja
                </p>
            </div>

            <Swiper
                slidesPerView={1}
                autoplay={{ delay: 3000 }}
                loop={true}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[Navigation, Autoplay]}
            >
                {cars.map((item) => (
                    <SwiperSlide key={item?.img}>
                        <CarItem data={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
