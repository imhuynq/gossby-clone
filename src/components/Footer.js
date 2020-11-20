import React from 'react';
import {Paypal, Visa, Master, Discover, AE, LogoFooter, Facebook, Twitter, Arrow} from '../icons';
import '../footer.scss';
import BackToTop from './BackToTop';
const footerData = [
    {
        title: 'Main Menu',
        item: [
            {title: 'Home'},
            {title: 'Best Selling'},
            {title: 'Product'},
            {title: 'Gift for'},
            {title: 'Best Friends'},
            {title: 'Sister'},
            {title: 'Family'},
            {title: 'Couple'},
            {title: 'Animals/Pet'},
            {title: 'Jobs/Hobies'},
            {title: 'LGBT'},
            {title: 'Christmas Ornaments'},
        ]
    },
    {
        title: 'Information',
        item: [
            {title: 'About Us'},
            {title: 'Help Center'},
            {title: 'FAQs'},
            {title: 'Payment Methods'},
            {title: 'Privacy Policy'},
            {title: 'Shipping Policy'},
            {title: 'Refund Policy'},
            {title: 'Terms of Service'},
            {title: 'Track Order'},
            {title: 'Happy Customer'},
            {title: 'Contact Us'},
        ]
    }
]
const Footer = () => {
    return <><div id="footer">
        <div class="container-custom">
            <div class="row footer_info">
                <div class="col-xl-2 col-12 footer_col">
                    <div class="footer_logo">
                        <a href="<?= OSC::$base_url ?>" title="<?= $this->getLogo()->alt ?>">
                            <img src="https://d10w21o3d83in0.cloudfront.net/gossby.com/storage/setting/21.KP8WV5fad050f8c022.png" alt="<?= $this->getLogo()->alt ?>"/>
                        </a>

                        <div id="google-survey-result"></div>

                        {/* <?php if (OSC::helper('core/setting')->get('theme/footer/enable_widget_trustpilot') == 1): ?>
                            <!-- TrustBox script -->
                            <script type="text/javascript" src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js" async></script>
                            <!-- End TrustBox script -->
                            <div id="trustpilot-widget">
                                <?= OSC::helper('core/setting')->get('theme/footer/widget_trustpilot'); ?>
                            </div>
                        <?php endif; ?> */}
                    </div>
                </div>
                {footerData.map(item => <div className="col-xl-2 col-md-4 col-6 footer_col">
                    <h4 className="footer_col_name">{item.title}</h4>
                    <div className="footer_col_body">
                        <ul className="footer_menu">
                           {item.item.map(child => <li className="footer_menu_item"><a href="{$item['url']}">{child.title}</a></li>)}
                        </ul>
                    </div>
                </div>)}
                <div class="col-xl-3 col-md-4 col-12 footer_col">
                    <h4 class="footer_col_name">Gossby</h4>
                    <div class="footer_col_body">
                        <div>6901 Riverport Dr<br/>Louisville, KY, 40258<br/>United States<br/></div>
                        <div>support@gossby.com</div>
                        <div>help@gossby.com</div>
                        {/* <div class="footer_col_body__phone">
                            <?php if ($this->getPhoneSupport()): ?>
                                <?php foreach ($this->getPhoneSupport() as $key => $phone): ?>
                                    <div class="phone-item"><?= $phone ?></div>
                                <?php endforeach; ?>
                            <?php endif; ?>
                        </div> */}
                    </div>
                </div>
                <div class="col-xl-3 col-12 footer_col">
                    <div id="subcribe">
                        <div class="subcribe_header">
                            <h4 class="subcribe_title">SUBSCRIBE</h4>
                            <p class="subcribe_text">Sign up to get the latest on sales, new releases and more ...</p>
                        </div>
                        <div class="subcribe_form_inner">
                            <div class="subcribe_form_inner" style={{display: 'flex'}}>
                                <input type="email" name="email" id="subcribe_input" class="input_common subcribe_input" placeholder="Enter your mail"/>
                                <button class="button_primary button_small subcribe_btn" id="subscribe" name="subscribe" type="submit">Subscribe</button>
                            </div>
                            <p style={{color: 'red',margin: '5px 0 0 0',display: 'none'}} id="error_email"></p>
                        </div>

                    </div>
                </div>
            </div>
            <div class="footer_bottom">
                <div class="row">
                    <div class="col-lg-4 footer_bottom_col footer_bottom_col--left footer_bottom_col--social">
                        <div class="social_item_group">
                            <a href="<?= OSC::helper('core/setting')->get('theme/social/facebook') ?>" rel="nofollow" target="_blank" class="social_item">
                                <i class=""><Facebook /></i>
                            </a>

                            <a href="<?= OSC::helper('core/setting')->get('theme/social/twitter') ?>" rel="nofollow" target="_blank" class="social_item">
                                <i class=""><Twitter/></i>
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-4 footer_bottom_col footer_bottom_col--mid">
                        <a href="<?= OSC::$base_url; ?>" class="footer_power_by" title="<?= $this->getLogo()->alt ?>">
                            <i>
                                <LogoFooter/>
                            </i>
                        </a>
                    </div>
                    <div class="col-lg-4 footer_bottom_col footer_bottom_col--right">
                        <div class="footer_pay_card">
                            <ul class="payment_logos">
                                <li class="payment_logos--paypal"><Paypal/></li>
                                <li class="payment_logos--visa"><Visa/></li>
                                <li class="payment_logos--master"><Master/></li>
                                <li class="payment_logos--dc"><Discover/></li>
                                <li class="payment_logos--ae"><AE/></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="copyright">
        <div class="container">
            <p>Copyright © 2019 Gossby. All Rights Reserved</p>
        </div>
    </div>
    <BackToTop/>
    </>
}

export default Footer;