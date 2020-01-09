import React, { useState, useEffect } from "react";

import Navigation from "../layouts/Navigation";
import Text from "../components/UIElements/Text";
import RoleCard from "../components/RoleCard";

const RoleSet = props => {
  const [isLoading, setIsLoading] = useState(true);
  const [role, setRole] = useState();
  const [data] = useState([
    {
      id: "0001",
      title: "Evil Transformation",
      players: 3,
      complexity: "complex",
      rating: 8,
      expansions: ["original", "daybreak"],
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non at vel accusamus delectus quaerat ex similique quam? Quisquam corporis natus quis placeat, aut dolore officiis, enim, recusandae sed harum aliquid.",
      roles: [
        "doppelganger",
        "alpha_wolf",
        "mystic_wolf",
        "minion",
        "robber",
        "witch"
      ]
    },
    {
      id: "0002",
      title: "Cautionary Tale",
      players: 4,
      complexity: "moderate",
      rating: 6,
      expansions: ["original", "daybreak"],
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non at vel accusamus delectus quaerat ex similique quam? Quisquam corporis natus quis placeat, aut dolore officiis, enim, recusandae sed harum aliquid.",
      roles: [
        "werewolf",
        "werewolf",
        "seer",
        "apprentice_seer",
        "revealer",
        "hunter",
        "bodyguard"
      ]
    },
    {
      id: "0003",
      title: "Total Chaos",
      players: 5,
      complexity: "complex",
      rating: 7,
      expansions: ["original", "daybreak"],
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non at vel accusamus delectus quaerat ex similique quam? Quisquam corporis natus quis placeat, aut dolore officiis, enim, recusandae sed harum aliquid.",
      roles: [
        "doppelganger",
        "werewolf",
        "alpha_wolf",
        "mystic_wolf",
        "robber",
        "witch",
        "troublemaker",
        "village_idiot",
        "curator"
      ]
    },
    {
      id: "0004",
      title: "Classic Werewolf",
      players: 3,
      complexity: "simple",
      rating: 4,
      expansions: ["original"],
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non at vel accusamus delectus quaerat ex similique quam? Quisquam corporis natus quis placeat, aut dolore officiis, enim, recusandae sed harum aliquid.",
      roles: ["werewolf", "minion", "robber", "troublemaker", "drunk", "tanner"]
    },
    {
      id: "0005",
      title: "One Night Ultimate Daybreak",
      players: 3,
      complexity: "moderate",
      rating: 3,
      expansions: ["daybreak"],
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non at vel accusamus delectus quaerat ex similique quam? Quisquam corporis natus quis placeat, aut dolore officiis, enim, recusandae sed harum aliquid.",
      roles: [
        "alpha_wolf",
        "mystic_wolf",
        "apprentice_seer",
        "witch",
        "village_idiot",
        "revealer"
      ]
    },
    {
      id: "0006",
      title: "One Night Ultimate Werewolf (3 Players)",
      players: 3,
      complexity: "simple",
      rating: 4,
      expansions: ["original"],
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non at vel accusamus delectus quaerat ex similique quam? Quisquam corporis natus quis placeat, aut dolore officiis, enim, recusandae sed harum aliquid.",
      roles: ["werewolf", "werewolf", "seer", "robber", "troublemaker", "villager"]
    },
    {
      id: "0007",
      title: "One Night Ultimate Werewolf (4 Players)",
      players: 4,
      complexity: "simple",
      rating: 4,
      expansions: ["original"],
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non at vel accusamus delectus quaerat ex similique quam? Quisquam corporis natus quis placeat, aut dolore officiis, enim, recusandae sed harum aliquid.",
      roles: ["werewolf", "werewolf", "seer", "robber", "troublemaker", "villager", "villager"]
    },
    {
      id: "0008",
      title: "One Night Ultimate Werewolf (5 Players)",
      players: 5,
      complexity: "simple",
      rating: 4,
      expansions: ["original"],
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non at vel accusamus delectus quaerat ex similique quam? Quisquam corporis natus quis placeat, aut dolore officiis, enim, recusandae sed harum aliquid.",
      roles: ["werewolf", "werewolf", "seer", "robber", "troublemaker", "villager", "villager", "villager"]
    }
  ]);
  const id = props.match.params.sid;

  const fetchData = () => {
    setRole(
      data.find(r => {
        return r.id == id;
      })
    );
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  let roleDetails = "Loading ...";
  if (!isLoading) {
    roleDetails = (
      <React.Fragment>
        <Text element="h2">{role.title}</Text>
        <div className="RoleSet__stats">
          <p className="RoleSet__statElement">Players: {role.players}</p>
          <p className="RoleSet__statElement">Complexity: {role.complexity}</p>
          <p className="RoleSet__statElement">Rating: {role.rating}</p>
        </div>

        <Text>Expansions: {role.expansions.join(", ")}</Text>
        <Text>Description: {role.desc}</Text>
        <Text>Cards:</Text>
        <ul className="RoleList">
          {role.roles
            ? role.roles.map((r, index) => {
                return (
                  <li key={index} className="RoleList__role">
                    <RoleCard card={r} />
                  </li>
                );
              })
            : ""}
        </ul>
      </React.Fragment>
    );
  }

  return (
    <div className="RoleSet">
      <Navigation />
      <main className="main-body">{roleDetails}</main>
    </div>
  );
};

export default RoleSet;
