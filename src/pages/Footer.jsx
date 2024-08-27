import React from 'react'
import Logo from "../assets/images/logo.svg"

const Footer = () => {
  return (
    <footer class="footer">
                <div class="container">
                    <div class="footer__wrapper">
                        <div class="header__logo footer__logo">
                            <img src={Logo} alt="logo" />
                        </div>

                        <div class="footer__contacts">
                            <h3 class="footer__title">
                                Телефоны:
                            </h3>
                            <p class="footer__contact">
                                <a href="https://wa.me/+996552776764?text=Здравствуйте! Пишу по поводу ремонта стиральной машины. "> +996 (552) 77 - 67 - 64</a>
                            </p>
                            <p class="footer__contact">
                                <a href="https://wa.me/+996504776764?text=Здравствуйте! Пишу по поводу ремонта стиральной машины. "> +996 (504) 77 - 67 - 64</a>
                            </p>
                        </div>
                        <div class="footer__contacts">
                            <h3 class="footer__title">
                                Адрес:
                            </h3>
                            <p class="footer__contact">
                                г.Бишкек,
                            </p>
                            <p class="footer__contact">
                               Скрябина 45а
                            </p>
                        </div>
                        <div class="footer__contacts">
                            <h3 class="footer__title footer__social">
                                Свяжитесь с нами:
                            </h3>
                            <div class="header__socials">
                                <div class="header__social">
                                    <a href="https://wa.me/+996552776764?text=Здравствуйте! Пишу по поводу ремонта стиральной машины. ">
                                        <img class="tn-atom__img t-img loaded"
                                            data-original="https://static.tildacdn.one/tild3465-3035-4531-b761-653933373364/whatsapp_1.png"
                                            alt="" imgfield="tn_img_1600623338934"
                                            src="https://optim.tildacdn.one/tild3465-3035-4531-b761-653933373364/-/resize/70x/-/format/webp/whatsapp_1.png" />
                                    </a>
                                </div>
                                <div class="header__social">
                                    <img class="tn-atom__img t-img loaded"
                                        data-original="https://static.tildacdn.one/tild3164-3063-4530-b039-306132313134/instagram.png"
                                        alt="" imgfield="tn_img_1590247526541"
                                        src="https://optim.tildacdn.one/tild3164-3063-4530-b039-306132313134/-/resize/70x/-/format/webp/instagram.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
  )
}

export default Footer