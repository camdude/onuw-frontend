import React from "react";

import Navigation from "../layouts/Navigation";
import Text from "../components/UIElements/Text";
import Button from "../components/FormElements/Button";

const Home = () => {
  return (
    <div className="Home">
      <Navigation />
      <main className="main-body">
        <Text element="h1">
          Welcome to the One Night Ultimate Werewolf Role Set Database.
        </Text>
        <div className="">
          <Text element="h3">Role Sets</Text>
          <Button type="link" to="/rolesets">
            See all role sets
          </Button>
        </div>
        <div className="">
          <br />
          <br />
          <br />
          <Text element="h1">Title</Text>
          <Text element="h2">Title</Text>
          <Text element="h3">Title</Text>
          <Text element="paragraph">Title</Text>
        </div>
      </main>
    </div>
  );
};

export default Home;
