import React, { Component } from 'react'
import '../product_block.scss';

const productData = {
    img: 'https://d10w21o3d83in0.cloudfront.net/gossby.com/var/opt_images/2ef736a1a686ce177eec8b1ceec86a73.500x500.0.1594266431.png',
    title: '3 Sisters - Sisters forever, never apart. Maybe in distance but never at heart.',
    type: 'Personalized Mug',
    price: '13.99'
}
const Product = () => {
    return <div>
        <a href="<?= $product_detail_url; ?>" className="product_item_thumb" title="<?= $product->getProductTitle(); ?>">
            <img
                src={productData.img}
                alt="<?= $product->getProductTitle(); ?>"
                class="lazy_load"
                onerror="this.srcset='<?= $this->getImage('placeholder.png') ?>'"
            />
        </a>
        <div class="product_item_info">
            <h3 class="product_item_name">
                <a href="<?= $product_detail_url; ?>" title="<?= $product->getProductTitle(); ?>">
                    {productData.title}
                </a>
            </h3>
            <div class="product_item_type">
                {productData.type}
            </div>
            <div class="product_item_price">
                {productData.price && <>
                        <span class="product_price_money product_price_money--original">
                            24.99
                        </span>
                        <div class="product_item_saleoff">44%<br/>off</div>
                    <strong class="product_price_money">13.99</strong></>}
                    
                {!productData.price && <span class="product_price_money product_price_money--sold_out">Sold out</span>}
            </div>
        </div>
    </div>
}

export default Product;