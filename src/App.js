import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Singup from "./pages/Signup";
import Login from "./pages/Login";
import Services from "./pages/Services";
import About from "./pages/About";
import Doctor from "./pages/Doctor";
import Header from "./pages/Header";
import Appointment from "./pages/Appointment";
import Feedback from "./pages/Feedback";
import Blog from "./pages/Blog";
import Footer from "./pages/Footer";
import Err from "./pages/Err";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Hospital from "./pages/Hospital";
import Abouthos from "./pages/About_hos";
import Docselect from "./componants/Docselect";
import Reiew from "./pages/Reiew";
import Docprofile from "./pages/Docprofile";
// import './all.min.css';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/doctor">
            <Doctor />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/appointment">
            <Appointment />
          </Route>
          <Route path="/feedback">
            <Feedback />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/hospital">
            <Hospital/>
          </Route>
          <Route path="/abouthos">
            <Abouthos/>
          </Route>
          <Route path="/docselect">
            <Docselect/>
          </Route>
          <Route path="/review">
            <Reiew/>
          </Route>
          <Route path="/doctoreprofile">
            <Docprofile/>
          </Route>
          <Route path="/signup">
            <Singup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/err">
            <Err />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
