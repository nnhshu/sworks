import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import './assets/scss/Style.scss';

import Header from './components/Header/Header';
import Page from './components/Page/Page';
import HomePage from './pages/Home';
import About_Us from './pages/About_Us';
import Portfolio_Us from './pages/Portfolio';
import Contact_Us from './pages/Contact_Us';

function App() {
	return (
		<div className="page-wrapper">
			<Router>
				<Page>
					<Switch>
						<Route exact path="/">
							<HomePage />
						</Route>
						<Route exact path="/about_us">
							<About_Us />
						</Route>
						<Route exact path="/portfolio_us">
							<Portfolio_Us />
						</Route>
						<Route exact path="/contact_us">
							<Contact_Us />
						</Route>
					</Switch>
				</Page>
			</Router>
		</div>
	);
}

export default App;
