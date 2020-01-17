import React, { useState, useEffect } from "react";

import Navigation from "../layouts/Navigation";
import Text from "../components/UIElements/Text";
import RoleCard from "../components/RoleCard";
import roleBackup from "../assets/roles.json";
import { useHttpClient } from "../hooks/useHttpClient";

const RoleSet = props => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedRoleset, setloadedRoleset] = useState();

  const id = props.match.params.sid;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/roleset/${id}`
        );
        setloadedRoleset(responseData.roleset);
      } catch (error) {
        console.log(error);
        console.log("Loading Backup");
        setloadedRoleset(
          roleBackup.rolesets.find(r => {
            return r.id == id;
          })
        );
      }
    };
    fetchData();
  }, []);

  let roleDetails = "Loading ...";
  if (!isLoading && loadedRoleset) {
    roleDetails = (
      <React.Fragment>
        <Text element="h2">{loadedRoleset.title}</Text>
        <div className="RoleSet__stats">
          <p className="RoleSet__statElement">
            Players: {loadedRoleset.players}
          </p>
          <p className="RoleSet__statElement">
            Complexity: {loadedRoleset.complexity}
          </p>
          <p className="RoleSet__statElement">Rating: {loadedRoleset.rating}</p>
        </div>

        <Text>Expansions: {loadedRoleset.expansions.join(", ")}</Text>
        <Text>Description: {loadedRoleset.desc}</Text>
        <Text>Cards:</Text>
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
