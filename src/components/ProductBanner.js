import React from 'react';

const ProductBanner = ({bannerData}) => {
    return <div className="product_banner">
        <a href="<?= $collection->getDetailUrl();?>" title="<?= $name;?>" class="product_banner_thumb">
            <img
                src={bannerData.link}
                class="lazy_load"
            />
        </a>
        <div class="product_banner_info">
            <h3 class="product_banner_name">{bannerData.name}</h3>
            <h4 class="product_banner_type">HOT COLLECTION</h4>
            <a href="<?= $collection->getDetailUrl();?>" class="product_banner_btn" title="<?= $name ?>">Shop Now</a>
        </div>
    </div>  
}

export default ProductBanner;