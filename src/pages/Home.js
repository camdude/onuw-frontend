import React, { useContext } from "react";

import Navigation from "../layouts/Navigation";
import Text from "../components/UIElements/Text";
import Button from "../components/FormElements/Button";
import Footer from "../layouts/Footer";
import Paypal from "../components/Paypal";
import { AuthContext } from "../context/auth-context";

const Home = () => {
  const auth = useContext(AuthContext);

  return (
    <div className="Home">
      <Navigation />
      <main className="main-body">
        <Text element="h2">One Night Ultimate Werewolf Role Set Database</Text>
        <div className="Home__body">
          <Text>
            Welcome to this unofficial role set management system for the game{" "}
            <Text
              element="a"
              href="https://beziergames.com/collections/one-night-ultimate-werewolf/products/one-night-ultimate-werewolf"
            >
              One Night Ultimate Werewolf
            </Text>{" "}
            created by{" "}
            <Text element="a" href="https://beziergames.com/">
              Bezier Games
            </Text>
            .
          </Text>
          <Button type="link" to="/roleset/all">
            See Role Sets
          </Button>
        </div>
        {!auth.isLoggedIn && (
          <React.Fragment>
            <Text>
              If you would like to add your own rolesets and also get access to
              extra features please create an account.
            </Text>
            <Button type="link" to="/users/signup">
              Sign Up
            </Button>
          </React.Fragment>
        )}

        <div className="Home__dev">
          <Text element="h3">Future Development</Text>
          <Text>
            This site is still in development so please respect its current
            state. Feedback would be much appreciated, so if you find any issues
            or have ideas of how this tool could be improved, please send them{" "}
            <Text element="a" href="mailto:camdude@live.com.au">
              here.
            </Text>
          </Text>
          <div className="paragraph">
            Ideas to implement:
            <ul className="Home__list">
              <li>Add a rating system</li>
              <li>Improve filter function</li>
              <li>Add page to explain each role</li>
            </ul>
          </div>
          <Paypal />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
