import React from "react";

import Navigation from "../layouts/Navigation";
import Text from "../components/UIElements/Text";
import Button from "../components/FormElements/Button";

const Home = () => {
  return (
    <div className="Home">
      <Navigation />
      <main className="main-body">
        <Text element="h2">One Night Ultimate Werewolf Role Set Database</Text>
        <div className="Home__body">
          <Text>
            Welcome to this role set management system. This site is still in
            development so please respect it's current state.
          </Text>
          <Text>
            Feedback would be much appreciated, so if you find any issues or
            have ideas of how this tool could be improved, please send them to{" "}
            <Text element="a" href="mailto:camdude@live.com.au">
              camdude@live.com.au
            </Text>
          </Text>
        </div>
        <Button type="link" to="/roleset/all">
          See Role Sets
        </Button>
        <div className="Home__dev">
          <Text element="h3">Future Development</Text>
          <Text>
            Ideas to implement:
            <ul className="Home__list">
              <li>Allow users to sign up</li>
              <li>Only users will have the ability to post new role sets</li>
              <li>Add a rating system</li>
              <li>Allow users to favourite rolesets</li>
              <li>Improve filter function</li>
            </ul>
          </Text>
        </div>
      </main>
    </div>
  );
};

export default Home;
