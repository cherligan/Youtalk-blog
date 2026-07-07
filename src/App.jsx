import Footer from '../public/components/Footer';
import Header from '../public/components/Header';
import Article from '../public/Article';
import './App.css'
import { useState } from 'react'
export default function App() {
const pathname = window.location.pathname;
if(pathname.startsWith('/article/'))
{
  return <Article></Article>;
}
const [isOpen, setIsOpen] = useState(false);
const burgerClick = () =>
{
  setIsOpen(!isOpen);
}
  return (
    <div>
      <Header></Header>
      <main className='main'>
        <span className='main__path-to-blog'>Главная <img src='./assets/arR.png' alt='arrow'></img> Блог</span>
        <h1 className='main__page-name'>Блог</h1>
        <div className='main__nav'>
          <button className='main__nav--item'><img className='main__item--image' src='./assets/Smiling_Face.png' alt='nav_img'></img>Все</button>
          <button className='main__nav--item'>Самооценка и самопринятие</button>
          <button className='main__nav--item'><img className='main__item--image' src='./assets/Unicorn.png' alt='nav_img'></img>Self</button>
          <button className='main__nav--item'>Чувства и эмоции</button>
          <button className='main__nav--item'>Тревога</button>
          <button className='main__nav--item'>Упражнения</button>
          <button className='main__nav--item'>Психология питания</button>
          <button className='main__nav--item'>Насилие</button>
          <button className='main__nav--item'>Личное здоровье</button>
        </div>
        <div className='main__content'>
          <a href='./article/Article.html' className='main__big-card'>
              <div className='main__card--img-block'>
                <div className='main__tags'>
                  <span className='main__card--tag'><img className='main__tag--image' src='./assets/Unicorn.png' alt='tag-image'></img>Самооценка и самопринятие</span>
                  <span className='main__card--tag'><img className='main__tag--image' src='./assets/Unicorn.png' alt='tag-image'></img>Self</span>
                </div>
                <img className='main__big-card--image' src='./assets/eggs.png' alt='card_image'></img>
              </div>
              <div className='main__card--text-block'>
                <div className='main__card--text-block-main'>
                  <h2 className='main__text--large'>Эмоциональное выгорание – стадии и симптомы, методы восстановления и профилактики</h2>
                  <span className='main__text--small'>Автор: Лиза Файнтух</span>
                  <span className='main__text--medium'>Изначально термин «эмоциональное профессиональной сфере и относился...</span>
                </div>
                <span className='main__text--small'>21.08.2021</span>
              </div>
          </a>
          <div className='main__big-card'>
              <div className='main__card--img-block'>
                <div className='main__tags'>
                  <span className='main__card--tag'><img className='main__tag--image' src='./assets/Unicorn.png' alt='tag-image'></img>Self</span>
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
          <div className='main__card'>
              <div className='main__card--img-block'>
                <div className='main__tags'>
                  <span className='main__card--tag'><img className='main__tag--image' src='./assets/Unicorn.png' alt='tag-image'></img>Самооценка и самопринятие</span>
                  <span className='main__card--tag'><img className='main__tag--image' src='./assets/Unicorn.png' alt='tag-image'></img>Психология питания</span>
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
                  <span className='main__card--tag'><img className='main__tag--image' src='./assets/Unicorn.png' alt='tag-image'></img>Self</span>
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
                  <span className='main__card--tag'><img className='main__tag--image' src='./assets/Unicorn.png' alt='tag-image'></img>Self</span>
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
                  <span className='main__card--tag'><img className='main__tag--image' src='./assets/Unicorn.png' alt='tag-image'></img>Self</span>
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
                  <span className='main__card--tag'><img className='main__tag--image' src='./assets/Unicorn.png' alt='tag-image'></img>Self</span>
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
                  <span className='main__card--tag'><img className='main__tag--image' src='./assets/Unicorn.png' alt='tag-image'></img>Self</span>
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
      <Footer></Footer>
    </div>
  )
}