import './App.css'

export default function App() {

  return (
    <div>
      <header className='header'>
        <img src='./assets/logo.png' className='header__logo' alt='logo'></img>
        <nav className='header__nav'>
          <a className='header__nav--item'>О нас</a>
          <a className='header__nav--item'>Тарифы</a>
          <a className='header__nav--item'>Для бизнеса</a>
          <a className='header__nav--item'>Психологам</a>
          <a className='header__nav--item'>Сертификат</a>
          <a className='header__nav--item'>Материалы</a>
          <a className='header__nav--item'>FAQ</a>
        </nav>
        <button className='header__btn'>Подобрать психолога</button>
      </header>
      <main className='main'>
        <span className='main__path-to-blog'>Главная Блог</span>
        <h1 className='main__page-name'>Блог</h1>
        <div className='main__nav'>
          <button className='main__nav--item'>Все</button>
          <button className='main__nav--item'>Самооценка и самопринятие</button>
          <button className='main__nav--item'>Self</button>
          <button className='main__nav--item'>Чувства и эмоции</button>
          <button className='main__nav--item'>Тревога</button>
          <button className='main__nav--item'>Упражнения</button>
          <button className='main__nav--item'>Психология питания</button>
          <button className='main__nav--item'>Насилие</button>
          <button className='main__nav--item'>Личное здоровье</button>
        </div>
        <div className='main__content'>
          <div className='main__big-cards'>
            <div className='main__card'>
              <div className='main__card--img-block'>
                <div className='main__tags'>
                  <span className='main__card--tag'>Самооценка и самопринятие</span>
                  <span className='main__card--tag'>Self</span>
                </div>
                <img className='main__big-card--image-eggs' src='./assets/eggs.png' alt='card_image'></img>
              </div>
              <div className='main__card--text-block'>
                <div className='main__card--text-block-main'>
                  <h2 className='main__text--large'>Эмоциональное выгорание – стадии и симптомы, методы восстановления и профилактики</h2>
                  <span className='main__text--small'>Автор: Лиза Файнтух</span>
                  <span className='main__text--medium'>Изначально термин «эмоциональное профессиональной сфере и относился...</span>
                </div>
                <span className='main__text--small'>21.08.2021</span>
              </div>
            </div>
            <div className='main__card'>
              <div className='main__card--img-block'>
                <div className='main__tags'>
                  <span className='main__card--tag'>Self</span>
                </div>
                <img className='main__big-card--image' src='./assets/running.png' alt='card_image'></img>
              </div>
              <div className='main__card--text-block'>
                <div className='main__card--text-block-main'>
                  <h2 className='main__text--large'>Как не утонуть в тревоге и управлять своими страхами</h2>
                  <span className='main__text--small'>Автор: Екатерина Бельтюкова</span>
                  <span className='main__text--medium'>Один из самых важных навыков, которые может дать работа с психотерапевтом - умение в разных ситуациях по-разному обходиться ...</span>
                </div>
                <span className='main__text--small'>11.08.2021</span>
              </div>
            </div>
          </div>
          <div className='main__card'>
              <div className='main__card--img-block'>
                <div className='main__tags'>
                  <span className='main__card--tag'>Самооценка и самопринятие</span>
                  <span className='main__card--tag'>Психология питания</span>
                </div>
                <img className='main__card--image' src='./assets/2.1.png' alt='card_image'></img>
              </div>
              <div className='main__card--text-block'>
                <div className='main__card--text-block-main'>
                  <h2 className='main__text--large'>Эмоциональное выгорание – стадии и симптомы, методы восстановления и профилактики</h2>
                  <span className='main__text--small'>Автор: Лиза Файнтух</span>
                  <span className='main__text--medium'>Изначально термин «эмоциональное профессиональной сфере и относился...</span>
                </div>
                <span className='main__text--small'>21.08.2021</span>
              </div>
          </div>
          <div className='main__card'>
              <div className='main__card--img-block'>
                <div className='main__tags'>
                  <span className='main__card--tag'>Self</span>
                </div>
                <img className='main__card--image' src='./assets/2.2.png' alt='card_image'></img>
              </div>
              <div className='main__card--text-block'>
                <div className='main__card--text-block-main'>
                  <h2 className='main__text--large'>Как не утонуть в тревоге и управлять своими страхами</h2>
                  <span className='main__text--small'>Автор: Екатерина Бельтюкова</span>
                  <span className='main__text--medium'>Один из самых важных навыков, которые может дать работа с психотерапевтом - умение в разных ситуациях по-разному обходиться ...</span>
                </div>
                <span className='main__text--small'>11.08.2021</span>
              </div>
          </div>
          <div className='main__card'>
              <div className='main__card--img-block'>
                <div className='main__tags'>
                  <span className='main__card--tag'>Self</span>
                </div>
                <img className='main__card--image' src='./assets/2.3.png' alt='card_image'></img>
              </div>
              <div className='main__card--text-block'>
                <div className='main__card--text-block-main'>
                  <h2 className='main__text--large'>Как управлять своими эмоциями: 8 шагов</h2>
                  <span className='main__text--small'>Автор: Екатерина Бельтюкова</span>
                  <span className='main__text--medium'>Клиенты часто спрашивают, как КОНТРОЛИРОВАТЬ свои негативные эмоции. Пришло время об этом написать!</span>
                </div>
                <span className='main__text--small'>07.08.2021</span>
              </div>
          </div>
          <div className='main__card'>
              <div className='main__card--img-block'>
                <div className='main__tags'>
                  <span className='main__card--tag'>Self</span>
                </div>
                <img className='main__card--image' src='./assets/3.1.jpg' alt='card_image'></img>
              </div>
              <div className='main__card--text-block'>
                <div className='main__card--text-block-main'>
                  <h2 className='main__text--large'>Эмоциональное выгорание – стадии и симптомы, методы восстановления и профилактики</h2>
                  <span className='main__text--small'>Автор: Лиза Файнтух под редакцией  Екатерины Бельтюковой</span>
                  <span className='main__text--medium'>Изначально термин «эмоциональное я...</span>
                </div>
                <span className='main__text--small'>21.08.2021</span>
              </div>
          </div>
          <div className='main__card'>
              <div className='main__card--img-block'>
                <div className='main__tags'>
                  <span className='main__card--tag'>Self</span>
                </div>
                <img className='main__card--image' src='./assets/3.2.jpg' alt='card_image'></img>
              </div>
              <div className='main__card--text-block'>
                <div className='main__card--text-block-main'>
                  <h2 className='main__text--large'>Как не утонуть в тревоге и управлять своими страхами</h2>
                  <span className='main__text--small'>Автор: Екатерина Бельтюкова</span>
                  <span className='main__text--medium'>Один из самых важных навыков, которые может дать работа с психотерапевтом - умение в разных ситуациях по-разному обходиться ...</span>
                </div>
                <span className='main__text--small'>11.08.2021</span>
              </div>
          </div>
          <div className='main__card'>
              <div className='main__card--img-block'>
                <div className='main__tags'>
                  <span className='main__card--tag'>Self</span>
                </div>
                <img className='main__card--image' src='./assets/3.3.jpg' alt='card_image'></img>
              </div>
              <div className='main__card--text-block'>
                <div className='main__card--text-block-main'>
                  <h2 className='main__text--large'>Как управлять своими эмоциями: 8 шагов</h2>
                  <span className='main__text--small'>Автор: Екатерина Бельтюкова</span>
                  <span className='main__text--medium'>Клиенты часто спрашивают, как КОНТРОЛИРОВАТЬ свои негативные эмоции. Пришло время об этом написать!</span>
                </div>
                <span className='main__text--small'>07.08.2021</span>
              </div>
          </div>
        </div>
        <button className='main__button'>Ещё</button>
      </main>
      <footer className='footer'>
        <div className='footer__top'>
          <div className='footer__links'>
            <a className='footer__link'>О нас</a>
            <a className='footer__link'>Тарифы</a>
            <a className='footer__link'>Для бизнеса</a>
            <a className='footer__link'>Психологам</a>
            <a className='footer__link'>FAQ</a>
          </div>
          <div className='footer__links'>
            <a className='footer__link'>Блог</a>
            <a className='footer__link'>Вебинары</a>
            <a className='footer__link'>Подкаст</a>
            <a className='footer__link'>Сертификат</a>
            <a className='footer__link'>Контакты</a>
          </div>
          <div className='footer__feedback'>
            <h2 className='footer__feedback--large-text'>Одно письмо в неделю со свежими новостями и акциями</h2>
            <div className='footer__input-block'>
              <input className='footer__input--email' type='email' name='email' placeholder='Ваш e-mail'></input>
              <button className='footer__input--btn'>1333</button>
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
    </div>
  )
}