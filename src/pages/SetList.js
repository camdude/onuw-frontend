import React, { useState } from "react";

import Navigation from "../layouts/Navigation";
import Text from "../components/UIElements/Text";
import Filter from "../components/Filter";

const SetList = () => {
  const [data] = useState([
    {
      id: "0001",
      title: "Evil Transformation",
      players: 3,
      complexity: "complex",
      rating: 8,
      expansions: ["original", "daybreak"]
    },
    {
      id: "0002",
      title: "Cautionary Tale",
      players: 4,
      complexity: "moderate",
      rating: 6,
      expansions: ["original", "daybreak"]
    },
    {
      id: "0003",
      title: "Total Chaos",
      players: 5,
      complexity: "complex",
      rating: 7,
      expansions: ["original", "daybreak"]
    },
    {
      id: "0004",
      title: "Classic Werewolf",
      players: 3,
      complexity: "simple",
      rating: 4,
      expansions: ["original"]
    },
    {
      id: "0005",
      title: "Daybreak",
      players: 3,
      complexity: "moderate",
      rating: 3,
      expansions: ["daybreak"]
    }
  ]);

  return (
    <div className="SetList">
      <Navigation />
      <main className="main-body">
        <Text element="h2">Role Sets</Text>
        <Filter data={data} />
      </main>
    </div>
  );
};

export default SetList;
