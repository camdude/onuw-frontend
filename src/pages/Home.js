import React from "react";

import Navigation from "../layouts/Navigation";
import Text from "../components/UIElements/Text";
import Button from "../components/FormElements/Button";

const Home = () => {
  return (
    <div className="Home">
      <Navigation />
      <main className="main-body">
        <Text element="h2">
          One Night Ultimate Werewolf Role Set Database
        </Text>
        <div className="">
          <Button type="link" to="/roleset/all">
            See all role sets
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Home;
