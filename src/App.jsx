import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./Components/Navigation";
import HomePage from "./Components/HomePage";
import AboutPage from "./Components/AboutPage";
import ContactPage from "./Components/ContactPage";
import Counter from "./Components/Counter";
import Footer from "./Components/Footer";

function App() {
    return (
        <>
            <Router>
                <Navigation />
                <Route path="/" exact>
                    <HomePage />
                </Route>
                <Route path="/about">
                    <AboutPage />
                </Route>
                <Route path="/contact">
                    <ContactPage />
                </Route>
                <Route path="/counter">
                    <Counter />
                </Route>
                <Footer />
            </Router>
        </>
    );
}

export default App;
