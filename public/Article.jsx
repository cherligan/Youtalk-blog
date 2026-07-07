import Footer from "./components/Footer";
import Header from "./components/Header";
export default function Article()
{
    return(
        <>
            <Header/>
            <main className="main">
                <span className='main__path-to-blog'>Главная <img src='/assets/arR.png' alt='arrow'></img> Блог <img src='/assets/arR.png' alt='arrow'></img> Как не утонуть в тревоге и управлять своими страхами</span>
                <h1 className='main__page-name'>Как не утонуть в тревоге и управлять своими страхами</h1>
                <span className="main__author">Автор: Лиза Файнтух</span>
                <span className="main__date">21.08.2021</span>
                <img className="main__image" src="/assets/2.2.png"></img>
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