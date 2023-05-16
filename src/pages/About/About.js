import "./style.css"
import aboutimg from "../../img/me.webp"

function About() {
	return (
        <div className="about">
            <article className="about-article">
                <h3 className="heading-three">
                    <span className="heading-num">02.</span>
                    Обо мне
                </h3>
                <p className="text-normal">
                    Начинал контент-менеджером, после был администратором нескольких интернет-магазинов на CMS и конструкторах, писал технические задания разработчикам, разрабатывал макеты дизайна, строил диаграммы и логические цепочки в работе ресурсов. На данный момент являюсь Front-end разработчиком.
                </p>
                <ul className="about-list">
                    <li>
                        <p className="text-normal">
                            Опыт работы: 3 года.
                        </p>
                    </li>
                    <li>
                        <p className="text-normal">
                            Языки: Английский / Русский.
                        </p>
                    </li>
                    <li>
                        <p className="text-normal">
                            Уровень английского: A2 Начинающий.
                        </p>
                    </li>
                </ul>
                <p className="text-normal">
                    Основной стек: 
                </p>
                <ul className="about-list">
                    <li>
                        <p className="text-normal">
                        JavaScript (ES6+)
                        </p>
                    </li>
                    <li>
                        <p className="text-normal">
                            React
                        </p>
                    </li>
                    <li>
                        <p className="text-normal">
                            Vue
                        </p>
                    </li>
                    <li>
                        <p className="text-normal">
                            NodeJS
                        </p>
                    </li>
                    <li>
                        <p className="text-normal">
                            Typescript
                        </p>
                    </li>
                </ul>
            </article>
            <div className="about-block">
                <div className="about-block-wrap">
                    <div className="about-wrap"></div>
                    <img className="about-img" src={aboutimg} alt="me" />
                </div>
                <div className="about-border-wrap"></div>
            </div>
        </div>
	);
}

export default About;