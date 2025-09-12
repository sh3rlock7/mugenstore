import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Container, Typography, useMediaQuery, useTheme } from "@mui/material";


import AppleWatch from "/images/AppleWatch.jpg";
import AdidasDisc from "/images/AdidasDisc2.jpg";
import Discount from "/images/percentDiscount.jpg";
import { DiscountItem } from "./DiscountItem";


export const DiscountList = () => {
  const theme = useTheme()
   const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Container  disableGutters sx={{ display:"flex", flexDirection: "column", width:{xs: 385, md:"90%"}, py: 4, px: "2px"}}>
      <Typography variant="h1" sx={{textAlign: "left", ml: 3}}>Week Deals</Typography>
      <Swiper
        spaceBetween={6}
        slidesPerView={1.1}
         breakpoints={{
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          }
        }}
        centeredSlides={!isDesktop}
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
      </Container>
  );
};