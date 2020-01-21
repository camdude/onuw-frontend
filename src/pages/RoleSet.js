import React, { useState, useEffect } from "react";

import Navigation from "../layouts/Navigation";
import Text from "../components/UIElements/Text";
import RoleCard from "../components/RoleCard";
import roleBackup from "../assets/roles.json";
import { useHttpClient } from "../hooks/useHttpClient";
import Spinner from "../components/UIElements/Spinner";

const RoleSet = props => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedRoleset, setloadedRoleset] = useState();

  const id = props.match.params.sid;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await sendRequest(
          `https://onuw-backend.cmrnclffrd.now.sh/roleset/${id}`
        );
        setloadedRoleset(responseData.roleset);
      } catch (error) {
        console.log(error);
        console.log("Loading Backup");
        setloadedRoleset(
          roleBackup.rolesets.find(r => {
            return r.id === id;
          })
        );
      }
    };
    fetchData();
  }, []);

  let roleDetails = <Spinner />;
  if (!isLoading && loadedRoleset) {
    roleDetails = (
      <React.Fragment>
        <Text element="h2">{loadedRoleset.title}</Text>
        <div className="RoleSet__stats">
          <p className="RoleSet__statElement">
            <span className="u-bold-text">Posted By: </span>
            {loadedRoleset.username}
          </p>
          {/* <p className="RoleSet__statElement">
            <span className="u-bold-text">Rating: </span>
            {loadedRoleset.rating}
          </p> */}
          <p className="RoleSet__statElement">
            <span className="u-bold-text">Expansions: </span>
            {loadedRoleset.expansions.join(", ")}
          </p>
          <p className="RoleSet__statElement">
            <span className="u-bold-text">Players: </span>
            {loadedRoleset.players}
          </p>
          <p className="RoleSet__statElement">
            <span className="u-bold-text">Complexity: </span>
            {loadedRoleset.complexity}
          </p>
        </div>
        <Text>
          <span className="u-bold-text">Game Notes: </span>
          {loadedRoleset.desc}
        </Text>
        <Text>
          <span className="u-bold-text">Cards: </span>
        </Text>
        <ul className="RoleList">
          {loadedRoleset.roles
            ? loadedRoleset.roles.map((r, index) => {
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
