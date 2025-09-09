import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Box } from "@mui/material";


import AppleWatch from "/images/AppleWatch.jpg";
import AdidasDisc from "/images/AdidasDisc2.jpg";
import Discount from "/images/percentDiscount.jpg";
import { DiscountItem } from "./DiscountItem";


export const DiscountList = () => {
  return (
    <Box sx={{ width:"100%", maxWidth: 380, mt: 4, ml: 0}}>
      <Swiper
        spaceBetween={15}
        slidesPerView={1.12}
        centeredSlides={true}
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation]}

        >
        <SwiperSlide>
          <DiscountItem src={Discount} alt="Special Discount" />
        </SwiperSlide>
        <SwiperSlide>
          <DiscountItem src={AdidasDisc} alt="Adidas Sneakers" />
        </SwiperSlide>
        <SwiperSlide>
          <DiscountItem src={AppleWatch} alt="Apple Watch series 10" />
        </SwiperSlide>
      </Swiper>
      </Box>
  );
};