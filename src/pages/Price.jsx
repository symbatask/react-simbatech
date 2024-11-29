import React from 'react'

const Price = () => {
    const handleConversion = () => {
        window.gtag('event', 'conversion', {
          'send_to': 'AW-16800718605/91kDCNvtwvAZEI2-mss-', 
          'value': 1.0,  
          'currency': 'USD', 
        });
      };
  return (
<section class="price" id="price">
    <div class="container">
        <h2 class="price__title content__title">
            Прайс-лист
        </h2>
        <div class="price__content-light price__content price__head">
            <p class="price__subtitle">
                ВИД УСЛУГИ
            </p>
            <p class="price__subtitle">
                СТОИМОСТЬ
            </p>
            <p class="price__subtitle">
                ГАРАНТИЯ
            </p>
        </div>
        <div class="price__content-light price__content">
            <p class="price__desc">
                Диагностика и выезд мастера
            </p>
            <p class="price__desc">
                Бесплатная
            </p>
            <p class="price__desc">
                -
            </p>
        </div>
        <div class="price__content-dark price__content">
            <p class="price__desc">
                Замена термостата (датчик температуры)

            </p>
            <p class="price__desc">
                от 2500 сом
            </p>
            <p class="price__desc">
                от 1 года
            </p>





        </div>
        <div class="price__content-light price__content">
            <p class="price__desc">
                Замена подшипников
            </p>
            <p class="price__desc">
                от 3500 до 7000
            </p>
            <p class="price__desc">
                от 2 лет
            </p>
        </div>
        <div class="price__content-dark price__content">
            <p class="price__desc">
                Ремонт модуля управления (электроной части)
            </p>
            <p class="price__desc">
                от 3000 сом
            </p>
            <p class="price__desc">
                от 1 года
            </p>
        </div>
        <div class="price__content-light price__content">
            <p class="price__desc">
                Замена ТЭНа
            </p>
            <p class="price__desc">
                от 2000 сом
            </p>
            <p class="price__desc">
                от 1 года
            </p>
        </div>
        <div class="price__content-dark price__content">
            <p class="price__desc">
                Замена помпы (в народе насос ) </p>
            <p class="price__desc">
                от 2000 сом
            </p>
            <p class="price__desc">
                от 1 года
            </p>
        </div>
        <div class="price__content-light price__content">
            <p class="price__desc">
                Установка и подключение стиральной машины
            </p>
            <p class="price__desc">
                от 650 сом
            </p>
            <p class="price__desc">
                от 1 года
            </p>
        </div>
        <div class="price__content-dark price__content">
            <p class="price__desc">
                Замена УБЛ (устройство блокировки люка) </p>
            <p class="price__desc">
                от 2500 сом
            </p>
            <p class="price__desc">
                от 1 года
            </p>
        </div>


        <div class="price__content-light price__content">
            <p class="price__desc">
                Замена щёток
            </p>
            <p class="price__desc">
                от 2500 сом
            </p>
            <p class="price__desc">
                от 1 года
            </p>
        </div>
        <div class="price__content-dark price__content">
            <p class="price__desc">
                Замена двигателя
            </p>
            <p class="price__desc">
                от 2500 сом
            </p>
            <p class="price__desc">
                от 1 года
            </p>
        </div>
        <div class="price__content-light price__content">
            <p class="price__desc">
                Замена ремня
            </p>
            <p class="price__desc">
                от 2500 сом
            </p>
            <p class="price__desc">
                от 1 года
            </p>
        </div>
        <div class="price__content-dark price__content">
            <p class="price__desc">
                Замена заливного клапана

            </p>
            <p class="price__desc">
                от 2500 сом
            </p>
            <p class="price__desc">
                от 1 года
            </p>





        </div>

        <div class="price__content-light price__content">
            <p class="price__desc">
                Замена пресостата (датчика уровня воды)

            </p>
            <p class="price__desc">
                от 2500 сом
            </p>
            <p class="price__desc">
                от 1 года
            </p>





        </div>



















        <div class="price__contact section__contact">
            <button class="custom-btn btn-5 hero__btn">
                <a id="whatsapp-link"  href="https://wa.me/+996504776764?text=Здравствуйте! Пишу вам из сайта. Хочу получить консультацию по ремонту стиральной машинки."
                onClick={handleConversion}
                > офорить заказ</a>
            </button>
        </div>

    </div>




</section>
  )
}

export default Price