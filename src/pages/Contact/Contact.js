import "./style.css"

function Contact() {
	return (
		<div className="contact">
			<span className="heading-num">04. Что дальше?</span>
			<h3 className="heading-three">
				Свяжитесь со мной
            </h3>
			<p className="text-normal text-contact">
				Хотя сейчас я не ищу новых возможностей, мой почтовый ящик всегда открыт. Если у вас есть вопрос или вы просто хотите сказать привет, я сделаю все возможное, чтобы ответить вам!
			</p>
			<form action="#" method="get">
				<button className="hero-btn contact-btn">
					Сказать Привет!
				</button>
            </form>
		</div>
	);
}

export default Contact;