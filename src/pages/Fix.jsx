import React from 'react'
import WM2 from "../assets/images/wm-2.jpg"
import WM3 from "../assets/images/wm-3.jpg"
import WM4 from "../assets/images/wm-4.jpg"
import WM5 from "../assets/images/wm-5.jpg"
import WM6 from "../assets/images/wm-6.jpg"
import WM7 from "../assets/images/wm-7.jpg"
const Fix = () => {
  return (
    <section class="fix" id="fix">
                <div class="container">

                    <h2 class="fix__title content__title">
                        Причины поломок
                    </h2>

                    <div class="fix__wrapper">
                        <div class="fix__card">
                            <div class="fix__img">
                                <img src={WM2} alt="washing machine" />
                            </div>
                            <div class="fix__content">

                                <h3 class="fix__subtitle">
                                    Машинка не включается,замолчал экран,не греет воду, не сливает воду,пахнет горелым не
                                    крутится барабан,дверца машинки не открывается. </h3>
                                <p class="fix__desc">
                                    У вас из строя вышел модуль управления. Это относится к электронной части машинки. У нас вы
                                    можете заказать ремонт любой сложности до замены модуля управления. Есть гарантия от 6
                                    месяцев.
                                </p>


                            </div>


                        </div>
                        <div class="fix__card">
                            <div class="fix__img">
                                <img src={WM3} alt="washing machine" />

                            </div>
                            <div class="fix__content">

                                <h3 class="fix__subtitle">
                                    Стиральная машинка не греет воду или с бака есть запах вони характерный запаху болота.
                                </h3>

                                <p class="fix__desc">
                                    В большинство случаев причина в том что у машинки полетела ТЭНа. Вы можете заказать у нас
                                    замену ТЭНа с гарантией от 1 года.
                                </p>
                            </div>


                        </div>
                        <div class="fix__card">
                            <div class="fix__img">
                                <img src={WM4} alt="washing machine" />
                            </div>
                            <div class="fix__content">

                                <h3 class="fix__subtitle">
                                    Стиральная машинка трясётся,двигается с местa,идёт неприятный звук. </h3>
                                <p class="fix__desc">
                                    Возможно у вас подшипники на исходе,надо заменить расходные материалы в виде подшипников и
                                    сальника. Обратитесь к нам и получите гарантию от 1 года.
                                </p>

                            </div>


                        </div>
                        <div class="fix__card">
                            <div class="fix__img">
                                <img src={WM4} alt="washing machine" />

                            </div>
                            <div class="fix__content">

                                <h3 class="fix__subtitle">
                                    Стиральная машинка не сливает воду, не отжимает, вещи выходят мокрыми. </h3>
                                <p class="fix__desc">
                                    Скорее всего надо заменить помпы или прочистить патрупки.
                                    Замена помпы у нас проводится с гарантией от 1 года.
                                </p>

                            </div>


                        </div>
                        <div class="fix__card">
                            <div class="fix__img">
                                <img src={WM6} alt="washing machine" />

                            </div>
                            <div class="fix__content">

                                <h3 class="fix__subtitle">
                                    В стиральной машинке идёт утечка воды.
                                </h3>
                                <p class="fix__desc">

                                </p>
                                <ul class="fix__desc">
                                    Причина:
                                    <li>
                                        1. Требуется замена патрубок,

                                    </li>
                                    <li>2. Замена резинки </li>
                                    <li>3.Замена бункера (простым
                                        языком порошка) </li>

                                    У нас осуществляется замена детали абсолютно на любую модель
                                    с гарантией от одного года.
                                </ul>

                            </div>


                        </div>
                        <div class="fix__card">
                            <div class="fix__img">
                                <img src={WM7} alt="washing machine" />

                            </div>
                            <div class="fix__content">

                                <h3 class="fix__subtitle">
                                    Стиральная машинка не открывает дверцу внутри осталось бельё.


                                </h3>
                                <ul class="fix__desc">
                                    Причина:
                                    <li>
                                        1. УБЛ (простым языком замок)

                                    </li>
                                    <li>2. Модуль управления </li>
                                    <li>3. Замкнула деталь в модуле управления </li>
                                    <li>4. Проблема в электронике </li>
                                    У нас вы можете оформить заказ на ремонт с гарантией от одного года.
                                </ul>

                            </div>


                        </div>
                    </div>


                    <swiper-container class="mySwiper fix__swipper" pagination="true" pagination-clickable="true"
                        space-between="30" centered-slides="true" autoplay-delay="5000" autoplay-disable-on-interaction="false">

                        <swiper-slide>


                            <div class="fix__card">
                                <div class="fix__img">
                                    <img src={WM2} alt="washing machine" />
                                </div>
                                <div class="fix__content">

                                    <h3 class="fix__subtitle">
                                        Машинка не включается,замолчал экран,не греет воду, не сливает воду,пахнет горелым не
                                        крутится барабан,дверца машинки не открывается. </h3>
                                    <p class="fix__desc">
                                        У вас из строя вышел модуль управления. Это относится к электронной части машинки. У нас вы
                                        можете заказать ремонт любой сложности до замены модуля управления. Есть гарантия от 6
                                        месяцев.
                                    </p>


                                </div>


                            </div>


                        </swiper-slide>

                        <swiper-slide>
                            <div class="fix__card">
                                <div class="fix__img">
                                    <img src={WM7} alt="washing machine" />

                                </div>
                                <div class="fix__content">

                                    <h3 class="fix__subtitle">
                                        Стиральная машинка не открывает дверцу внутри осталось бельё.


                                    </h3>
                                    <ul class="fix__desc">
                                        Причина:
                                        <li>
                                            1. УБЛ (простым языком замок)

                                        </li>
                                        <li>2. Модуль управления </li>
                                        <li>3. Замкнула деталь в модуле управления </li>
                                        <li>4. Проблема в электронике </li>
                                        У нас вы можете оформить заказ на ремонт с гарантией от одного года.
                                    </ul>

                                </div>


                            </div>
                        </swiper-slide>

                        <swiper-slide>

                            <div class="fix__card">
                                <div class="fix__img">
                                    <img src={WM3} alt="washing machine" />

                                </div>
                                <div class="fix__content">

                                    <h3 class="fix__subtitle">
                                        Стиральная машинка не греет воду или с бака есть запах вони характерный запаху болота.
                                    </h3>

                                    <p class="fix__desc">
                                        В большинство случаев причина в том что у машинки полетела ТЭНа. Вы можете заказать у
                                        нас
                                        замену ТЭНа с гарантией от 1 года.
                                    </p>
                                </div>


                            </div>





                        </swiper-slide>

                        <swiper-slide>

                            <div class="fix__card">
                                <div class="fix__img">
                                    <img src={WM4} alt="washing machine" />
                                </div>
                                <div class="fix__content">

                                    <h3 class="fix__subtitle">
                                        Стиральная машинка трясётся,двигается с местa,идёт неприятный звук. </h3>
                                    <p class="fix__desc">
                                        Возможно у вас подшипники на исходе,надо заменить расходные материалы в виде подшипников
                                        и
                                        сальника. Обратитесь к нам и получите гарантию от 1 года.
                                    </p>

                                </div>


                            </div>







                        </swiper-slide>

                        <swiper-slide>




                            <div class="fix__card">
                                <div class="fix__img">
                                    <img src={WM5} alt="washing machine" />

                                </div>
                                <div class="fix__content">

                                    <h3 class="fix__subtitle">
                                        Стиральная машинка не сливает воду, не отжимает, вещи выходят мокрыми. </h3>
                                    <p class="fix__desc">
                                        Скорее всего надо заменить помпы или прочистить патрупки.
                                        Замена помпы у нас проводится с гарантией от 1 года.
                                    </p>

                                </div>


                            </div>



                        </swiper-slide>

                        <swiper-slide>



                            <div class="fix__card">
                                <div class="fix__img">
                                    <img src={WM6} alt="washing machine" />

                                </div>
                                <div class="fix__content">

                                    <h3 class="fix__subtitle">
                                        В стиральной машинке идёт утечка воды.
                                    </h3>
                                    <p class="fix__desc">

                                    </p>
                                    <ul class="fix__desc">
                                        Причина:
                                        <li>
                                            1. Требуется замена патрубок,

                                        </li>
                                        <li>2. Замена резинки </li>
                                        <li>3.Замена бункера (простым
                                            языком порошка) </li>

                                        У нас осуществляется замена детали абсолютно на любую модель
                                        с гарантией от одного года.
                                    </ul>

                                </div>


                            </div>



                        </swiper-slide>


                    </swiper-container>




                    <div class=" section__contact">
                        <button class="custom-btn btn-5 hero__btn">
                            <a id="whatsapp-link"  href="https://wa.me/+996504776764?text=Здравствуйте!  Хочу получить консультацию по ремонту стиральной машинки.">позвонить нам</a>
                        </button>
                    </div>

                </div>
            </section>
  )
}

export default Fix