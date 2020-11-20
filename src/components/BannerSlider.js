import React, { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
import {Arrow} from '../icons';
SwiperCore.use([Autoplay, Pagination, Navigation ]);
const bannerData = [{name: 'Animals', href:'https://d10w21o3d83in0.cloudfront.net/gossby.com/var/opt_images/46523be28d03c9d4087cc31ca2471f1b.700x700.0.1605174324.jpg'},
{name: 'Best Friends', href:'https://d10w21o3d83in0.cloudfront.net/gossby.com/var/opt_images/46523be28d03c9d4087cc31ca2471f1b.700x700.0.1605174324.jpg'},
{name: 'Sisters', href:'https://d10w21o3d83in0.cloudfront.net/gossby.com/var/opt_images/46523be28d03c9d4087cc31ca2471f1b.700x700.0.1605174324.jpg'},
{name: 'Brothers', href:'https://d10w21o3d83in0.cloudfront.net/gossby.com/var/opt_images/46523be28d03c9d4087cc31ca2471f1b.700x700.0.1605174324.jpg'}]
const BannerSlider = () => {
    
    return <div><Swiper
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
        }}
        loop={false}
        className="banner_container"
        spaceBetween={8}
        slidesPerView={1}
        slidesPerGroup={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        pagination={{
            el: '.swiper-pagination',
            clickable: true,
        }}
        navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }}
        breakpoints={{
            480: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            }
        }}
    >
        {bannerData.map((item, index) => <SwiperSlide key={index}><div className="swiper-slide banner_item">
                    <a href="<?php echo $link;?>" className="banner_item_thumb" title="<?php echo $name;?>">
                        <img src={item.href} />
                    </a>
                    <div className="banner_item_des">
                        <div className="banner_item_group_text">
                            <strong className="banner_item_text banner_item_text__mid">{item.name}</strong>
                            <strong className="banner_item_text banner_item_text__bot">COLLECTION</strong>
                        </div>
                        <a href="<?= $link ;?>" className="product_banner_btn">Shop Now</a>
                    </div>
                </div></SwiperSlide>)}
            <div class="swiper-pagination" />
            <div class="swiper-button-arrow swiper-button-next" />
            <div class="swiper-button-arrow swiper-button-prev" />
    </Swiper>
    </div>
}

export default BannerSlider;