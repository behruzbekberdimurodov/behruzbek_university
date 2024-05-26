import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://c1.wallpaperflare.com/path/885/672/994/house-architecture-building-city-3b8f9aa576cdc01be961666898aa6d1b.jpg"
            alt=""
            title="Oxford"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://c1.wallpaperflare.com/path/839/850/450/oxford-england-building-architecture-1f4bbf6be03ce1c1e8a4a0c84afafb35.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://c1.wallpaperflare.com/path/144/644/1013/uk-oxford-cricket-british-bb5f2463f975251bac89dfbe5394d81b.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide><img src="https://c1.wallpaperflare.com/preview/950/380/838/oxford-england-courtyard-uk.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://c1.wallpaperflare.com/path/314/863/768/the-university-of-toronto-university-of-toronto-u-of-t-campus-59914613befaa09faa5775b80d9b08d2.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://c0.wallpaperflare.com/path/638/482/358/castle-lawn-great-britain-england-ef0a19c67b9b50dcfde4b00021a4927b.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://c1.wallpaperflare.com/path/137/458/362/princeton-new-jersey-nassau-hall-university-18ce5bd974c7b8492ea5ffc42d8871db.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://c1.wallpaperflare.com/path/360/794/359/cambridge-university-england-united-kingdom-higher-education-campus-86ab3fe70f9e8453ad5f8050690221cb.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://r4.wallpaperflare.com/wallpaper/899/330/377/schoolyard-manga-wallpaper-3253dfc433dd315516bd5430a842307d.jpg" alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;
