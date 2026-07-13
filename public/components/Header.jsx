import { useState } from 'react'
export default function Header()
{
const [isOpen, setIsOpen] = useState(false);
const burgerClick = () =>
{
  setIsOpen(!isOpen);
}
    return(
        <>
            <header className='header'>
                <img src='/assets/logo.png' className='header__logo' alt='logo'></img>
                <nav className='header__nav'>
                <a href='#about' className='header__nav--item'>О нас</a>
                <a href='#tariffs' className='header__nav--item'>Тарифы</a>
                <a href='#business' className='header__nav--item'>Для бизнеса</a>
                <a href='#psychologists' className='header__nav--item'>Психологам</a>
                <a href='#certificate' className='header__nav--item'>Сертификат</a>
                <a href='#materials' className='header__nav--item'>Материалы <img src='/assets/arD.png' alt='arrow'></img></a>
                <a href='#faq' className='header__nav--item'>FAQ</a>
                </nav>
                <button className='header__btn'>Подобрать психолога</button>
                <button className='header__toggle-menu' onClick={burgerClick}><img src='/assets/toggleMenu.png' alt='toggleMenu'></img></button>
                {isOpen && 
                (
                <div className='header__mobile-nav-pannel'>
                    <a href='#about' className='header__nav--item' onClick={() => setIsOpen(false)}>О нас</a>
                    <a href='#tariffs' className='header__nav--item' onClick={() => setIsOpen(false)}>Тарифы</a>
                    <a href='#business' className='header__nav--item' onClick={() => setIsOpen(false)}>Для бизнеса</a>
                    <a href='#psychologists' className='header__nav--item' onClick={() => setIsOpen(false)}>Психологам</a>
                    <a href='#certificate' className='header__nav--item' onClick={() => setIsOpen(false)}>Сертификат</a>
                    <a href='#materials' className='header__nav--item' onClick={() => setIsOpen(false)}>Материалы</a>
                    <a href='#faq' className='header__nav--item' onClick={() => setIsOpen(false)}>FAQ</a>
                </div>
                )}
            </header>
        </>
    )
}