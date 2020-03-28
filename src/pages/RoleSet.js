import React, { useState, useEffect, useContext } from "react";

import Navigation from "../layouts/Navigation";
import Text from "../components/UIElements/Text";
import RoleCard from "../components/RoleCard";
import { useHttpClient } from "../hooks/useHttpClient";
import Spinner from "../components/UIElements/Spinner";
import Footer from "../layouts/Footer";
import { AuthContext } from "../context/auth-context";

const RoleSet = props => {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedRoleset, setloadedRoleset] = useState();

  const id = props.match.params.sid;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_API_URL}/api/roleset/${id}`
        );
        setloadedRoleset(responseData.roleset);
      } catch (err) {
        console.log(error);
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
                    <RoleCard card={r} showImg={auth.perms===1}/>
                  </li>
                );
              })
            : ""}
        </ul>
      </React.Fragment>
    );
  }
  if (error) {
    roleDetails = null;
  }

  return (
    <div className="RoleSet">
      <Navigation notifMsg={error} closeNotif={clearError} />
      <main className="main-body">{roleDetails}</main>
      <Footer />
    </div>
  );
};

export default RoleSet;
