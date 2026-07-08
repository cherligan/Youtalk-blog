import Footer from "./components/Footer";
import Header from "./components/Header";
export default function Article()
{
    return(
        <>
            <Header/>
            <main className="article-main">
                <span className='main__path-to-blog'>Главная <img src='/assets/arR.png' alt='arrow'></img> Блог <img src='/assets/arR.png' alt='arrow'></img> Как не утонуть в тревоге и управлять своими страхами</span>
                <div className="article-main__info-block">
                    <h1 className='main__page-name'>Как не утонуть в тревоге и управлять своими страхами</h1>
                    <span className="main__author">Автор: Лиза Файнтух</span>
                    <span className="main__date">21.08.2021</span>
                </div>
                <div className="article-main__cards">
                    <div className="article-main__sign-card">
                        <img className="article-main__sign-card--img" src="/assets/article/card-img.png" alt="card-img"></img>
                        <div className="article-main__sign-card--text-block">
                            <h2 className="article-main__card--text-large">Загружаем свободные окошки</h2>
                            <span className="article-main__card--text-small">Все в порядке, сейчас мы перенаправим вас в сервис записи Qlick, через который удобно выбрать дату,  время встречи и оплатить её</span>
                        </div>
                        <button className="article-main__button">Подробнее</button>
                    </div>
                    <div className="article-main__woman-card">
                        <div className="article-main__woman-card--img-block">
                            <div className="woman-card__img-block--tags">
                                <span className="woman-card__img-block--tag"><img src="/assets/article/pen.png"></img>Переписка</span>
                                <span className="woman-card__img-block--tag"><img src="/assets/article/camera.png"></img>Видео</span>
                            </div>
                            <img className="woman-card__img-block--img" src="/assets/article/woman.png"></img>
                            <div className="woman-card__img-block--text-block">
                                <h2 className="woman-card__img-block--text-large">Лилия</h2>
                                <h3 className="woman-card__img-block--text-medium">Психолог</h3>
                                <span className="woman-card__img-block--text-small">Опыт 6 лет 43 года </span>
                            </div>
                        </div>
                        <div className="article-main__woman-card--text-block">
                            <h2 className="woman-card__text-block--text-large">С чем работает психолог</h2>
                            <ul className="woman-card__text-block--list">
                                <li className="woman-card__text-block--list-item">Тревога, тревожности</li>
                                <li className="woman-card__text-block--list-item">Подавленность</li>
                                <li className="woman-card__text-block--list-item">Тревога и панические атаки</li>
                            </ul>
                            <button className="article-main__button">Подробнее</button>
                        </div>
                    </div>
                </div>
                <img className="main__image" src="/assets/2.2.png"></img>
                <div className="article-main__dialog-block">
                    <h3 className="main__text--small">Содержание</h3>
                    <div className="main__dialog">
                        <ul className="main__dialog">
                            <li className="main__dialog--rep">Как понять, что отношения с мамой были дисфункциональными и привели к травме?</li>
                            <li className="main__dialog--rep">Мама привет!</li>
                            <ul type='none' >Под под заголовок под заголовком
                                <ul>Под под под заголовок под заголовком
                                    <ul>Под под под под заголовок под заголовком</ul>
                                </ul>
                            </ul>
                            <li>Ну вот опять заголовок который как "привет мама"</li>
                            <li>Как понять, что вы страдаете от материнской травмы?</li>
                        </ul>
                    </div>
                </div>
                <div className="main__text-block">
                    <h2 className="main__text--medium">Заголовок h3</h2>
                    <span className="main__text">Один из самых важных навыков, которые может дать работа с психотерапевтом - умение в разных ситуациях по-разному обходиться со своими эмоциями.  Снять этот процесс с автопилота и перевести его в поле сознания.</span>
                    <span className="main__text">Давайте, к примеру, разберем тревогу. Можно разложить перед собой целую коллекцию доступных реакций и выбрать нужную:</span>
                </div>
                <div className="main__quote-card">
                    <span className="main__quote-card--text">Мы знаем, что нуждаться в помощи и поддержке в трудные периоды жизни абсолютно нормально для любого человека, и стремимся сделать психотерапию безопасной, удобной и доступной каждому</span>
                    <h3 className="main__quote-card--large-text">Ана Крымская</h3>
                </div>
            </main>
            <Footer/>
        </>
    )
}