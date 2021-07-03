import { Container } from "@material-ui/core";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import Auth from "./components/Auth/Auth.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Container maxwidth="lg">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/auth">
            <Auth />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
