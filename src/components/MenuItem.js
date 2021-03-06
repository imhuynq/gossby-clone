import React from 'react'
import { ArrowLeft, ArrowRight }  from '../icons';
import {Link} from 'react-router-dom';
// arrButton.click(function () {
// 	$(this).next().addClass('open');
// 	if ($(window).width() < 992) {
// 		$('html , body').addClass('open_menu_child');
// 	}
// });
// backButton.click(function () {
// 	$(this).offsetParent().removeClass('open');
// 	if ($(window).width() < 992) {
// 		$('html , body').removeClass('open_menu_child');
// 	}
// });
const nextMenu = e => {
    e.currentTarget.nextElementSibling.classList.add('open')
}
const backMenu = e => {
    e.currentTarget.offsetParent.classList.remove('open')
}

const MenuItem = ({item}) => {
    const link = item.title === 'Home' ? '/' : `/product/${item.title}`;
    return <li className={`menu_mobile_item ${item.children ? 'has_child' : '' }`}>
        <Link to={link} class="menu_mobile_url" title="<?= $params['title'] ?>">
            {item.title}
        </Link>
        <span class="menu_mobile_arr" onClick={nextMenu}><ArrowRight/></span>
        {item.children && <div class="menu_mobile_sub">
                <div class="menu_mobile_header">
                <span class="menu_mobile_back" onClick={backMenu}>
                        <ArrowLeft/>
                    </span>
                    <h3 class="menu_mobile_title">
                        {item.title}
                    </h3>
                </div>
                <ul class="menu_mobile_lst">
                    <div class='menu_mobile_only'>
                        {item.children?.map(child => <MenuItem item={child} />)}
                    </div>
                    <div class='menu_desktop_only'>
                        {item.children?.map(child => <li class="menu_mobile_item second-menu">
                            <div class='d-flex align-items-center'>
                                <Link to={child.title} class="menu_mobile_url" title="<?= $child['title'] ?>">
                                    {child.title}
                                </Link>
                            </div>
                            {/* <?= $this->renderSubmenu($child, 0); ?> */}
                        </li>)}
                    </div>
                </ul>
                
            </div>
        }
    </li>
}

export default MenuItem;