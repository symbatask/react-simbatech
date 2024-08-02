import React from 'react'

const Faq = () => {
  return (
    <section class="faq">
    <div class="container">

        <h2 class="faq__title content__title">
            ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ
        </h2>
        <div class="faq__wrapper">
            <div class="accordion">
                <div class="accordion-item">
                    <button class="faq__button" id="accordion-button-1" aria-expanded="false"><span
                        class="accordion-title">
                        Сколько стоит диагностика?
                    </span><span class="icon" aria-hidden="true"></span></button>
                    <div class="accordion-content">
                        <p>
                            Диагностика производится абсолютно бесплатно при осуществлении ремонта. В случае отказа
                            от ремонта
                            цена диагностики будет составлять 500 сом.
                        </p>
                    </div>
                </div>
            </div>
            <div class="accordion">
                <div class="accordion-item">
                    <button class="faq__button" id="accordion-button-1" aria-expanded="false"><span
                        class="accordion-title">
                        Какой срок гарантии на ремонт?
                    </span><span class="icon" aria-hidden="true"></span></button>
                    <div class="accordion-content">
                        <p>
                            Срок гарантии зависит от вида техники, от 6 месяцев до 2 лет.
                        </p>
                    </div>
                </div>
            </div>
            <div class="accordion">
                <div class="accordion-item">
                    <button class="faq__button" id="accordion-button-1" aria-expanded="false"><span
                        class="accordion-title">
                        Сколько времени занимает ремонт?
                    </span><span class="icon" aria-hidden="true"></span></button>
                    <div class="accordion-content">
                        <p>
                            Средний срок ремонта от 1 до 3 дней, в зависимости от сложности ремонта.

                        </p>
                    </div>
                </div>
            </div>

            <div class="accordion">
                <div class="accordion-item">
                    <button class="faq__button" id="accordion-button-1" aria-expanded="false"><span
                        class="accordion-title">
                        Если после вашей диагностики я решу, что ремонтировать товар не буду, есть ли у меня
                        возможность продать его вам?
                    </span><span class="icon" aria-hidden="true"></span></button>
                    <div class="accordion-content">
                        <p>
                            Да, мы принимаем нерабочую технику.
                        </p>
                    </div>
                </div>
            </div>
            <div class="accordion">
                <div class="accordion-item">
                    <button class="faq__button" id="accordion-button-1" aria-expanded="false"><span
                        class="accordion-title">
                        Могу ли я проконсультироваться по поводу ремонта со специалистом?
                    </span><span class="icon" aria-hidden="true"></span></button>
                    <div class="accordion-content">
                        <p>
                            Да, просто позвоните нам.
                        </p>
                    </div>
                </div>
            </div>
            <div class="accordion">
                <div class="accordion-item">
                    <button class="faq__button" id="accordion-button-1" aria-expanded="false"><span
                        class="accordion-title">
                        Какие запчасти вы ставите, новые или б/у?
                    </span><span class="icon" aria-hidden="true"></span></button>
                    <div class="accordion-content">
                        <p>
                            Как правило, новые. Также при необходимости ставим б/у, например, если новая запчасть
                            стоит в 3 раза дороже б/у. Но только при согласовании с клиентом.
                        </p>
                    </div>
                </div>
            </div>


            <div class="accordion">
                <div class="accordion-item">
                    <button class="faq__button" id="accordion-button-1" aria-expanded="false"><span
                        class="accordion-title">
                        Опытные ли у вас мастера?

                    </span><span class="icon" aria-hidden="true"></span></button>
                    <div class="accordion-content">
                        <p>
                            Да, у нас проходит тщательный отбор мастеров, которые проходят обучение, повышение
                            квалификации. </p>
                    </div>
                </div>
            </div>
            <div class="accordion">
                <div class="accordion-item">
                    <button class="faq__button" id="accordion-button-1" aria-expanded="false"><span
                        class="accordion-title">
                        Нужно ли сразу платить за ремонт?


                    </span><span class="icon" aria-hidden="true"></span></button>
                    <div class="accordion-content">
                        <p>
                            Нет, оплата после ремонта.
                        </p>
                    </div>
                </div>
            </div>



        </div>
    </div>
</section>
  )
}

export default Faq