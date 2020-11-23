import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import { SearchIcon }  from '../icons';
import { useMediaQuery } from 'react-responsive'
const MainLayout = ({children}) => {
    const [isMenuOpen, setMenuOpen] = useState(false);
	useEffect(() => {
		document.body.classList.toggle('open_menu', isMenuOpen);
		document.getElementsByTagName("html")[0].classList.toggle('open_menu', isMenuOpen);
    },[isMenuOpen])
	const isTabletOrMobileDevice = useMediaQuery({
		query: '(max-width: 992px)'
	})
    return <>
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
                    {children}
                </div>
            </div>
            <Footer/>
        </div>
        {isTabletOrMobileDevice && <Menu isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />}
    </>
}

export default MainLayout;