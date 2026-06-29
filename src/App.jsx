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
              <div className='main__card_img-block'>
                <span className='main__card--tag'>Самооценка и самопринятие</span>
                <span className='main__card--tag'>Self</span>
                <img className='main__card_image' src='./assets/eggs.png' alt='card_image'></img>
              </div>
              <div className='main__card_text-block'>
                <h2 className='main__card_text--large'>Эмоциональное выгорание – стадии и симптомы, методы восстановления и профилактики</h2>
                <span className='main__card_text--small'>Автор: Лиза Файнтух</span>
                <span className='main__card_text--medium'>Изначально термин «эмоциональное профессиональной сфере и относился...</span>
                <span className='main__card_text--small'>21.08.2021</span>
              </div>
            </div>
            <div className='main__card'>
              <div className='main__card_img-block'>
                <span className='main__card--tag'>Self</span>
                <img className='main__card_image' src='./assets/running.png' alt='card_image'></img>
              </div>
              <div className='main__card_text-block'>
                <h2 className='main__card_text--large'>Как не утонуть в тревоге и управлять своими страхами</h2>
                <span className='main__card_text--small'>Автор: Екатерина Бельтюкова</span>
                <span className='main__card_text--medium'>Один из самых важных навыков, которые может дать работа с психотерапевтом - умение в разных ситуациях по-разному обходиться ...</span>
                <span className='main__card_text--small'>11.08.2021</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}