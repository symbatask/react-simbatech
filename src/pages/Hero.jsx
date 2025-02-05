import React from 'react'
import Logo from "../assets/images/logo.png"

const Hero = () => {
   
  return (
    <section class="hero">
    <div class="container">
        <header class="header">

            <div class="header__wrapper">
                <div class="header__logo">
                    <img src={Logo} alt="logo"/>
                </div>
                <nav class="header__nav">
                    <a href="#price" class="header__link">
                        НАШИ УСЛУГИ
                    </a>
                    <a href="#price" class="header__link">
                        Цены
                    </a>
                    <a href="#about" class="header__link">
                        о нас
                    </a>
                    <a href="#fix" class="header__link">
                        причины поломок
                    </a>
                    <a href="#footer" class="header__link">
                        контакты
                    </a>
                </nav>
                <div class="header__contacts">
                    <a id="whatsapp-link"  href="https://wa.me/+996504776764?text=Здравствуйте! Пишу вам из сайта. По поводу ремонта стиральной машинки." class="header__num"
                    >
                        +996 (504) 77 - 67 - 64

                    </a>
                    <a id="whatsapp-link" href="https://wa.me/+996552776764?text=Здравствуйте! Пишу вам из сайта. По поводу ремонта стиральной машинки." class="header__num"
                    >
                        +996 (552) 77 - 67 - 64
                    </a>
                </div>

                <div class="header__socials">
                    <div class="header__social">
                        <a href="https://wa.me/+996504776764?text=Здравствуйте! Пишу вам из сайта. По поводу ремонта стиральной машинки."
                        >
                            <img class="tn-atom__img t-img loaded"
                                data-original="https://static.tildacdn.one/tild3465-3035-4531-b761-653933373364/whatsapp_1.png"
                                alt="" imgfield="tn_img_1600623338934"
                                src="https://optim.tildacdn.one/tild3465-3035-4531-b761-653933373364/-/resize/70x/-/format/webp/whatsapp_1.png"/>
                        </a>
                    </div>
                    <div class="header__social">
                        <img class="tn-atom__img t-img loaded"
                            data-original="https://static.tildacdn.one/tild3164-3063-4530-b039-306132313134/instagram.png"
                            alt="" imgfield="tn_img_1590247526541"
                            src="https://optim.tildacdn.one/tild3164-3063-4530-b039-306132313134/-/resize/70x/-/format/webp/instagram.png"/>
                    </div>
                </div>
            </div>

        </header>
        <div class="hero__content">
            <h1 class="hero__title content__title">
                сломалась стиральная машина?
            </h1>
            <h3 class="hero__subtitle">
                выедем за 30 минут!
            </h3>

        </div>
        <div class="hero__categories-top">
            <div class="hero__category">
                <p>
                    Компания  №1 по ремонту техники.

                </p>
            </div>
            <div class="hero__category">
                <p>
                    Мастера со стажем от 7 лет.

                </p>
            </div>
            <div class="hero__category">
                <p>
                    Самые лучшие цены по городу.

                </p>
            </div>
            <div class="hero__category hero__none">
                <p>
                Отвечаем на звонки сразу!

                </p>
            </div>

        </div>
        <div class="hero__categories-bottom">

            <div class="hero__category hero__category-bottom hero__media-none">
                <p>
                    Отвечаем на звонки сразу!

                </p>
            </div>
            <div class="hero__category hero__category-bottom">
                <p>
                Гарантия от 6 месяцев.
                </p>
            </div>
        </div>
        <div class="hero__contact  section__contact">
            <button class="custom-btn btn-5 hero__btn">
                <a id="whatsapp-link"  href="https://wa.me/+996504776764?text=Здравствуйте! Пишу вам из сайта. По поводу ремонта стиральной машины."
                > Связаться с нами</a>
            </button>



        </div>
    </div>
</section>
  )
}

export default Hero
