import React, { useState, useEffect } from 'react';
import BannerSlider from '../components/BannerSlider';
import Product from '../components/Product';
import ProductBanner from '../components/ProductBanner';

const MainContainer = () => {
    return <div className='page_home_container container-custom'>
    <BannerSlider/>
    <div className='block_container block_product_style_1'>
        <div className='block_header'>
            <h2 className='block_title'>
                Best Selling
            </h2>
            <a className='block_title_viewmore'>View more</a>
        </div>
        <div className='block_body'>
            <div className='block_product'>
                <div className='row product_list'>
                    <div className='col-6 col-md-4 col-lg-2 product_item'>
                        <Product />
                    </div>
                    <div className='col-6 col-md-4 col-lg-2 product_item'>
                        <Product />
                    </div>
                    <div className='col-6 col-md-4 col-lg-2 product_item'>
                        <Product />
                    </div>
                    <div className='col-6 col-md-4 col-lg-2 product_item'>
                        <Product />
                    </div>
                    <div className='col-6 col-md-4 col-lg-2 product_item'>
                        <Product />
                    </div>
                    <div className='col-6 col-md-4 col-lg-2 product_item'>
                        <Product />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className='block_container block_product_style_1'>
        <div className='block_header'>
            <h2 className='block_title'>
                New Arrivals
            </h2>
            <a className='block_title_viewmore'>View more</a>
        </div>
        <div className='block_body'>
            <div className='block_product'>
                <div className='row product_list'>
                    <div className='col-6 col-md-4 col-lg-2'>
                        <Product />
                    </div>
                    <div className='col-6 col-md-4 col-lg-2'>
                        <Product />
                    </div>
                    <div className='col-6 col-md-4 col-lg-2'>
                        <Product />
                    </div>
                    <div className='col-6 col-md-4 col-lg-2'>
                        <Product />
                    </div>
                    <div className='col-6 col-md-4 col-lg-2'>
                        <Product />
                    </div>
                    <div className='col-6 col-md-4 col-lg-2'>
                        <Product />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className='block_container block_product_style_2'>
        <div className='block_header'>
            <h2 className='block_title'>
                Best Selling
            </h2>
            <a className='block_title_viewmore'>View more</a>
        </div>
        <div className='block_body'>
            <div className='block_product'>
                <ProductBanner bannerData={{
                    name: 'Dogs Mug',
                    link: 'https://d10w21o3d83in0.cloudfront.net/gossby.com/var/opt_images/f0309d9385dd58d40ff80c6e2347c66c.1072x1072.0.1605174431.png',
                }} />
                <div className='row product_list'>
                    <div className='col-6 col-lg-2 product_item'>
                        <Product />
                    </div>
                    <div className='col-6 col-lg-2 product_item'>
                        <Product />
                    </div>
                    <div className='col-6 col-lg-2 product_item'>
                        <Product />
                    </div>
                    <div className='col-6 col-lg-2 product_item'>
                        <Product />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className='block_container block_product_style_3'>
        <div className='block_header'>
            <h2 className='block_title'>
                Best Selling
            </h2>
            <a className='block_title_viewmore'>View more</a>
        </div>
        <div className='block_body'>
            <div className='block_product'>
                <div className='row'>
                    <div className='col-lg-4'>
                        <ProductBanner bannerData={{
                            name: 'Best Friends Mug',
                            link: 'https://d10w21o3d83in0.cloudfront.net/gossby.com/var/opt_images/e8a989255515610f013d55e1b15b503f.532x532.0.1605174503.png',
                        }} />
                    </div>
                    <div className='col-lg-8 product_list_scroll'>
                        <div className='row product_list'>
                            <div className='col-lg-3 product_item'>
                                <Product />
                            </div>
                            <div className='col-lg-3 product_item'>
                                <Product />
                            </div>
                            <div className='col-lg-3 product_item'>
                                <Product />
                            </div>
                            <div className='col-lg-3 product_item'>
                                <Product />
                            </div>
                            <div className='col-lg-3 product_item'>
                                <Product />
                            </div>
                            <div className='col-lg-3 product_item'>
                                <Product />
                            </div>
                            <div className='col-lg-3 product_item'>
                                <Product />
                            </div>
                            <div className='col-lg-3 product_item'>
                                <Product />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className='block_container block_product_style_4'>
        <div className='block_header'>
            <h2 className='block_title'>
                Best Selling
            </h2>
            <a className='block_title_viewmore'>View more</a>
        </div>
        <div className='block_body'>
            <div className='block_product'>
                <div className='row'>
                    <div className='col-lg-8 product_list_scroll'>
                        <div className='row product_list'>
                            <div className='col-lg-3 product_item'>
                                <Product />
                            </div>
                            <div className='col-lg-3 product_item'>
                                <Product />
                            </div>
                            <div className='col-lg-3 product_item'>
                                <Product />
                            </div>
                            <div className='col-lg-3 product_item'>
                                <Product />
                            </div>
                            <div className='col-lg-3 product_item'>
                                <Product />
                            </div>
                            <div className='col-lg-3 product_item'>
                                <Product />
                            </div>
                            <div className='col-lg-3 product_item'>
                                <Product />
                            </div>
                            <div className='col-lg-3 product_item'>
                                <Product />
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <ProductBanner bannerData={{
                            name: 'Best Friends Mug',
                            link: 'https://d10w21o3d83in0.cloudfront.net/gossby.com/var/opt_images/e8a989255515610f013d55e1b15b503f.532x532.0.1605174503.png',
                        }} />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
}

export default MainContainer;