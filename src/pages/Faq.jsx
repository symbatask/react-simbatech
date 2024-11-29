




import React, { useState } from 'react';


const Faq = () => {

    const [openIndex, setOpenIndex] = useState(null);


    const handleClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };


    const faqItems = [
        {
            question: 'Сколько стоит диагностика?',
            answer: 'Диагностика производится абсолютно бесплатно при осуществлении ремонта. В случае отказа от ремонта цена диагностики будет составлять 500 сом.',
        },
        {
            question: 'Какой срок гарантии на ремонт?',
            answer: 'Срок гарантии зависит от вида техники, от 6 месяцев до 2 лет.',
        },
        {
            question: 'Сколько времени занимает ремонт?',
            answer: 'Средний срок ремонта от 1 до 3 дней, в зависимости от сложности ремонта.',
        },
        {
            question: 'Если после вашей диагностики я решу, что ремонтировать товар не буду, есть ли у меня возможность продать его вам?',
            answer: 'Да, мы принимаем нерабочую технику.',
        },
        {
            question: 'Могу ли я проконсультироваться по поводу ремонта со специалистом?',
            answer: 'Да, просто позвоните нам.',
        },
        {
            question: 'Какие запчасти вы ставите, новые или б/у?',
            answer: 'Как правило, новые. Также при необходимости ставим б/у, например, если новая запчасть стоит в 3 раза дороже б/у. Но только при согласовании с клиентом.',
        },
        {
            question: 'Опытные ли у вас мастера?',
            answer: 'Да, у нас проходит тщательный отбор мастеров, которые проходят обучение, повышение квалификации.',
        },
        {
            question: 'Нужно ли сразу платить за ремонт?',
            answer: 'Нет, оплата после ремонта.',
        },
    ];




    return (
        <section className="faq">
            <div className="container">
                <h2 className="faq__title content__title">ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</h2>
                <div className="faq__wrapper">
                    {faqItems.map((item, index) => (
                        <div className='accordion'>
                            <div className="accordion-item" key={index}>
                                <button
                                    className="faq__button"
                                    aria-expanded={openIndex === index}
                                    onClick={() => handleClick(index)}
                                >
                                    <span className="accordion-title">{item.question}</span>
                                    <span className="icon" aria-hidden="true"></span>
                                </button>
                                <div
                                    className="accordion-content"
                                    style={{ display: openIndex === index ? 'block' : 'none' }}
                                >
                                    <p>{item.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;
