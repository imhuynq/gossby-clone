import React, {useState, useEffect} from 'react';
import MenuItem from './MenuItem';

const menuData = [
	{
		title: 'Home',
	},
	{
		title: 'All Products',
		children: [
			{
                title: 'Adidas',
                children: [
                    {title: 'Super Star'}, {title: 'Super Man'}
                ]
			},
			{
				title: 'Nike'
            },
            {
                title: 'Bitis',
            },
            {
                title: 'Converse'
            }
		]
	},
	{
		title: 'Best Selling',
	},
	{
		title: 'New Arrivals',
	},
	{
		title: 'Mugs',
	},
	{
		title: 'Ornaments',
	},
	{
		title: 'Canvas',
	},
];

const Menu = ({isMenuOpen, setMenuOpen}) => {    
    return <div class="header_container">
        <nav id="nav_main">
            <div class="nav_container container-custom">
                <div class="menu_mobile">
                    <div class="menu_mobile_inner">
                        <div class="menu_mobile_header">
                            <div class="menu_mobile_title">Menu</div>
                        </div>
                        <div class="menu_mobile_body">
                            <ul class="menu_mobile_lst">
                                {menuData.map(item => <MenuItem item={item} />)}
                            </ul>
                            <ul class="menu_mobile_lst menu_mobile_lst--top">
                                {[{title: 'Track order'},{title: 'FAQs'},{title: 'Contact'}].map(item => <MenuItem item={item} />)}
                            </ul>
                        </div>
                    </div>
                </div>
                <div onClick={() => setMenuOpen(false)} className={`menu_mobile_overlay ${isMenuOpen ? 'open' : ''}`}></div>
            </div>
        </nav>
    </div>
}

export default Menu;