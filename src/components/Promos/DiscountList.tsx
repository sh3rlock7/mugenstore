import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Box, Typography } from "@mui/material";


import AppleWatch from "/images/AppleWatch.jpg";
import AdidasDisc from "/images/AdidasDisc2.jpg";
import Discount from "/images/percentDiscount.jpg";
import { DiscountItem } from "./DiscountItem";


export const DiscountList = () => {
  // const theme = useTheme()
  //  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box  sx={{ display:"flex", flexDirection: "column", width:"100%", py: 4, }}>
      <Typography variant="h1" sx={{textAlign: "left", ml: 3}}>Week Deals</Typography>
      
      <Swiper
        slidesPerView={1.1}
         breakpoints={{
          0: { slidesPerView: 1.1, spaceBetween: 0, centeredSlides:true },
          600: { slidesPerView: 1.3, spaceBetween: 6 },
          900: { slidesPerView: 2, spaceBetween: 16 },
          1200: { slidesPerView: 3, spaceBetween:3},
        }}
        centeredSlides={false}
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
              <DiscountItem src={AppleWatch} />

        </SwiperSlide>
      </Swiper>
      </Box>
  );
};