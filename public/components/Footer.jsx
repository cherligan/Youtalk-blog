export default function Footer()
{
    return(
        <>
            <footer className='footer'>
                <div className='footer__top'>
                <div className='footer__links-block'>
                    <div className='footer__links'>
                    <a href='#about' className='footer__link'>О нас</a>
                    <a href='#tariffs' className='footer__link'>Тарифы</a>
                    <a href='#business' className='footer__link'>Для бизнеса</a>
                    <a href='#psychologists' className='footer__link'>Психологам</a>
                    <a href='#faq' className='footer__link'>FAQ</a>
                    </div>
                    <div className='footer__links'>
                    <a href='#blog' className='footer__link'>Блог</a>
                    <a href='#webinars' className='footer__link'>Вебинары</a>
                    <a href='#podcast' className='footer__link'>Подкаст</a>
                    <a href='#certificate' className='footer__link'>Сертификат</a>
                    <a href='#contacts' className='footer__link'>Контакты</a>
                    </div>
                </div>
                <div className='footer__feedback'>
                    <h2 className='footer__feedback--large-text'>Одно письмо в неделю со свежими новостями и акциями</h2>
                    <div className='footer__input-block'>
                    <input className='footer__input--email' type='email' name='email' placeholder='Ваш e-mail'></input>
                    <button className='footer__input--btn'><img className='footer__btn--image' src='./assets/footer/btn.png' alt='btn_img'></img></button>
                    </div>
                    <span className='footer__feedback--small-text'>Подписываясь, я соглашаюсь на обработку персональных данных в соответствии с ФЗ РФ № 152-ФЗ «О персональных данных», а также с Политикой конфиденциальности</span>
                </div>
                <div className='footer__icons'>
                    <img className='footer__icon-logo' alt='icon' src='./assets/footer/sk.png'></img>
                    <img className='footer__icon' alt='icon' src='./assets/footer/vk.png'></img>
                    <img className='footer__icon' alt='icon' src='./assets/footer/tg.png'></img>
                    <img className='footer__icon' alt='icon' src='./assets/footer/tw.png'></img>
                    <img className='footer__icon' alt='icon' src='./assets/footer/ya.png'></img>
                </div>
                </div>
                <div className='footer__bottom'>
                <span className='footer__bottom--text'>©Youtalk, 2018 – 2022</span>
                <span className='footer__bottom--text'>Юридические документы</span>
                <span className='footer__bottom--text'>Способы оплаты</span>
                </div>
            </footer>
        </>
    )
}