import React from 'react';
import {useParams} from "react-router-dom";
import {Arrow} from '../icons';
import Product from '../components/Product';
import {Link} from 'react-router-dom';
const List = () => {
    const {name} = useParams();
    return <>
        <div class="breadcrumb_container">
            <div class="container">
                <div id="breadcrumb" class="clearfix">
                <span class="breadcrumb_item">
                    <Link to={`/`} title="Home">Home <i class="breadcrumb_arrow"><Arrow/></i></Link>
                </span>
                <span class="breadcrumb_item">
                    <Link to={`/product/${name}`} title="<?= $item[0] ?>">
                        {name}
                        <i class="breadcrumb_arrow"><Arrow/></i>
                    </Link>
                </span>
                </div>
            </div>
        </div>
        <div class="category_banner_empty">
            <div class="container">
                <h1 class="category_banner_name">
                    {name}
                </h1>
                    <div class="category_banner_description">
                    Best selling - check out Gossby’s most sought-for personalized products in various popular topics - friends, family, animals/pets and so much more. Don't be the left-behind ones and keep updated on the trendiest custom-made products on the market.
                    </div>
            </div>
        </div>
        <div class="container">
            <div class="row mb-5 product_list">
                {[1,1,1,1,1,1,1,1,11,1,2,3].map(item => <div class="col-6 col-lg-3 product_item">
                    <Product/>
                </div>)}
            </div>
        </div>
    </>

}

export default List;