import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { SearchIcon }  from './icons';
import MenuItem from './components/MenuItem';
import Menu from './components/Menu';
import { useMediaQuery } from 'react-responsive'
import BannerSlider from './components/BannerSlider';
import Product from './components/Product';
import ProductBanner from './components/ProductBanner';
import Footer from './components/Footer';
function App() {
	const [isMenuOpen, setMenuOpen] = useState(false);
	useEffect(() => {
		document.body.classList.toggle('open_menu', isMenuOpen);
		document.getElementsByTagName("html")[0].classList.toggle('open_menu', isMenuOpen);
    },[isMenuOpen])
	const isTabletOrMobileDevice = useMediaQuery({
		query: '(max-width: 992px)'
	})

	return (
		<div className="App">
			<div className="page_wrap">
				<div id="header">
					<div class="topbar">
						<div class="container-custom">
							<div class="row">
								<div class="col-xl-3 col-lg-2 col-md-6 col-6 topbar_col--left">
									<h1 id="logo">
										<a>
											<img src="https://d10w21o3d83in0.cloudfront.net/gossby.com/storage/setting/21.KP8WV5fad050f8c022.png"/>
										</a>
									</h1>
									<a onClick={() => setMenuOpen(true)} id="humbuger_icon" className={isMenuOpen ? 'open' : ''} href="javascript:void(0)" rel="nofollow">
										<span></span>
										<span></span>
										<span></span>
										<span></span>
									</a>
								</div>
								<div class="col-xl-5 col-lg-4 topbar_col--mid">
									<div class="top_search">
										<form action="" id="top_search_frm">
											<div class="input_wrap">
												<input type="text" name="keywords" class="input_common top_search_input" placeholder="Enter here to search" />
												<button type="submit" class="top_search_btn">
													<i class="top_search_icon"><SearchIcon /></i>
												</button>
											</div>
										</form>
									</div>
								</div>
								<div class="col-xl-4 col-lg-6 col-md-6 col-6 topbar_col--right">
									<ul class="navigation_lst topbar_menu">
										{['Track order','FAQs','Contact'].map(item => <li class="nav_item" ><a href="" title="">{item}</a></li>)}
									</ul>
									<div class="topbar_group_btn" id="cart-quantity-container"></div>
								</div>
							</div>
						</div>
					</div>
					{ !isTabletOrMobileDevice && <Menu isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} /> }
				</div>
				<div class="search_mobile">
					<div class="search_mobile_inner">
						<form action="<?php echo $this->getUrl('catalog/frontend/search'); ?>" class="search_mobile_frm">
							<input type="text" name="keywords" class="input_common input_common--small search_mobile_input" placeholder="Enter here to search"/>
							<button type="submit" class="search_mobile_submit">
								<i class="search_mobile_icon"><SearchIcon /></i>
							</button>
						</form>
					</div>
				</div>
				<div className='page_main' id='page_home'>
					<div className='main_body'>
						<div className='page_home_container container-custom'>
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
					</div>
				</div>
				<Footer/>
			</div>
			{isTabletOrMobileDevice && <Menu isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />}
		</div>
	);
}

export default App;