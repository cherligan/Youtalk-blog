import Footer from "./components/Footer";
import Header from "./components/Header";
export default function Article()
{
    return(
        <>
            <Header/>
            <main className="article-main">
                
                <div className="article-main__info-block">
                    <span className='main__path-to-blog'>Главная <img src='/assets/arR.png' alt='arrow'></img> Блог <img src='/assets/arR.png' alt='arrow'></img> Как не утонуть в тревоге и управлять своими страхами</span>
                    <h1 className='article-main__page-name'>Как не утонуть в тревоге и управлять своими страхами</h1>
                    <div className="article-main__info-block--data">
                        <span className="main__author">Автор: Лиза Файнтух</span>
                        <span className="main__date">21.08.2021</span>
                    </div>
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
                            <ul className="article-main__card-list">
                                <li className="article-main__card-list--item">Тревога, тревожности</li>
                                <li className="article-main__card-list--item">Подавленность</li>
                                <li className="article-main__card-list--item">Тревога и панические атаки</li>
                            </ul>
                            <button className="article-main__button">Подробнее</button>
                        </div>
                    </div>
                    <div className="article-main__image-card">
                        <img className="article-main__image-card--img" src="/assets/article/third-card-img.png"></img>
                    </div>
                    <div className="article-main__buy-card">
                        <h2 className="article-main__buy-card--medium-text"><big className="buy-card__medium-text--big">8</big> Видео сессий</h2>
                        <span className="article-main__buy-card--small-text">Проработать небольшие проблемы и продвинуться в решении сложных запросов</span>
                        <h1 className="article-main__buy-card--large-text">18 500 &#8381;</h1>
                        <button className="article-main__button">Купить</button>
                        <img className="article-main__buy-card--red-gift" src="/assets/article/red-gift.png"></img>
                        <img className="article-main__buy-card--blue-gift" src="/assets/article/blue-gift.png"></img>
                    </div>
                </div>
                <img className="article-main__image" src="/assets/2.2.png"></img>
                <div className="article-main__dialog-block">
                    <h3 className="article-main__text--small">Содержание</h3>
                    <div className="article-main__dialog">
                        <ul className="article-main__list">
                            <li className="article-main__list--item">Как понять, что отношения с мамой были дисфункциональными и привели к травме?</li>
                            <li className="article-main__list--item">Мама привет!</li>
                            <ul type='none' >Под под заголовок под заголовком
                                <ul>Под под под заголовок под заголовком
                                    <ul>Под под под под заголовок под заголовком</ul>
                                </ul>
                            </ul>
                            <li className="article-main__list--item">Ну вот опять заголовок который как "привет мама"</li>
                            <li className="article-main__list--item">Как понять, что вы страдаете от материнской травмы?</li>
                        </ul>
                    </div>
                </div>
                <div className="article-main__text-block">
                    <h2 className="article-main__text--medium">Заголовок h3</h2>
                    <span className="article-main__text">Один из самых важных навыков, которые может дать работа с психотерапевтом - умение в разных ситуациях по-разному обходиться со своими эмоциями.  Снять этот процесс с автопилота и перевести его в поле сознания.</span>
                    <span className="article-main__text">Давайте, к примеру, разберем тревогу. Можно разложить перед собой целую коллекцию доступных реакций и выбрать нужную:</span>
                </div>
                <div className="article-main__quote-card">
                    <img className="article-main__quote-card--img" src="/assets/article/quote-img.png"></img>
                    <span className="article-main__italic--text">Мы знаем, что нуждаться в помощи и поддержке в трудные периоды жизни абсолютно нормально для любого человека, и стремимся сделать психотерапию безопасной, удобной и доступной каждому</span>
                    <h3 className="article-main__quote-card--large-text">Ана Крымская</h3>
                </div>
                <div className="article-main__advices">
                    <h2 className="article-main__advices--large-text">Что еще можно делать с тревогой?</h2>
                    <ul className="article-main__advice-list">
                        <li className="article-main__list--item">Управлять ей через что-то внешнее: включать музыку, которая создает другое настроение, сесть за работу с цифрами, которая быстренько активизирует другие участки мозга, читать блоги, которые вас успокаивают и отвлекают.</li>
                        <li className="article-main__list--item">А еще порой можно разрешить себе тревогу заесть чем-то вкусным. Это, конечно, не самая здоровая стратегия, но в ряде ситуаций можно считать ее вполне рабочей. Особенно, когда внутренний ресурс на нуле, а поддерживающее окружение не в доступе.</li>
                    </ul>
                </div>
                <div className="article-main__image-block">
                    <img className="article-main__image-block--img" src="/assets/article/image-card-img.jpg" alt="image-card--img"></img>
                    <span className="article-main__image-block--small-text">Онтогенез речи отражает групповой эриксоновский гипноз. </span>
                </div>
                <div className="article-main__exercises-block">
                    <div className="article-main__exercises-block--first-exercise">
                        <h2 className="article-main__text">Чем шире доступный вам репертуар реакций и чем более осознанно вы можете выбирать из него то, что лучше всего подойдет в каждой конкретной ситуации, тем больше будет ваша устойчивость к стрессу, депрессии, неопределенности, да и к жизни в целом.</h2>
                        <div className="exercises-block__quote-card">
                            <span className="article-main__italic--text">Мы знаем, что нуждаться в помощи и поддержке в трудные периоды жизни абсолютно нормально для любого человека, и стремимся сделать психотерапию безопасной, удобной и доступной каждому</span>
                            <img className="exercises-block__quote-card--img" src="/assets/article/blot.png" alt="blot"></img>
                        </div>
                        <h2 className="article-main__text">Одна из ключевых задач психотерапии как раз и заключается в том, чтобы этот репертуар расширять и обучать человека пользоваться доступными ему реакциями в той последовательности, пропорции и объеме, которые подходят именно ему. Без оглядки на то, "как правильно" или "как у других".</h2>
                        
                    </div>
                    <div className="article-main__exercises-block--second-exercise">
                        
                    </div>
                    <div className="article-main__exercises-block--third-exercise">
                        
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}