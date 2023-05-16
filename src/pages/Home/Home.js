import "./style.css";

function Home() {
	return (
        <div className="Home">
            <section className="hero">
                <article className="hero-article">
                    <p className="text-code">
                        Привет! Меня зовут
                    </p>
                    <h1 className="heading hero-name">
                        Станислав Ткачев
                    </h1>
                    <h2 className="heading hero-heading">
                        Я Front-end разработчик
                    </h2>
                    <p className="text-normal hero-text">
                        Cпециализируюсь на разработка и внедрение пользовательских интерфейсов.
                    </p>
                    <form action="#" method="get">
                        <button className="hero-btn">
                            Чекни мой Codepen!
                        </button>
                    </form>
                </article>
            </section>
        </div>
	);
}

export default Home;