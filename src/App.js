/*REACT-ROUTER*/

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

/*IMPORT SCRIPTS*/

import ScrollToTop from "./utils/scrollToTop";

/*STYLES IMPORTS*/

import "./styles/normalize.css";
import "./styles/style.css";
import "./styles/space.css";

/*IMPORTS COMPONENTS*/

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Work from "./pages/Work/Work";
import Contact from "./pages/Contact/Contact";
import Header from "./components/Header/Header";
import Icon from "./components/Icon/Icon";

function App() {
	return (
		<div className="App">
			<main className="container">
				<Router>
				<ScrollToTop />
					<Header />
					<Icon />
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/about" element={<About />} />
							<Route path="/work" element={<Work />} />
							<Route path="/contact" element={<Contact />} />
						</Routes>
				</Router>
    		</main>
		</div>
	);
}

export default App;