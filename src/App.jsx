import './App.css'

export default function App() {

  return (
    <div>
      <header className='header'>
        <img src='./assets/logo.png' className='header__logo' alt='logo'></img>
        <nav className='header__nav'>
          <a className='header__nav-item'>О нас</a>
          <a className='header__nav-item'>Тарифы</a>
          <a className='header__nav-item'>Для бизнеса</a>
          <a className='header__nav-item'>Психологам</a>
          <a className='header__nav-item'>Сертификат</a>
          <a className='header__nav-item'>Материалы</a>
          <a className='header__nav-item'>FAQ</a>
        </nav>
        <button className='header__btn'>Подобрать психолога</button>
      </header>
    </div>
  )
}