import React, { useState, useEffect, useContext } from "react";

import Navigation from "../layouts/Navigation";
import Text from "../components/UIElements/Text";
import Button from "../components/FormElements/Button";
import Filter from "../components/Filter";
import roleBackup from "../assets/roles.json";
import { useHttpClient } from "../hooks/useHttpClient";
import Spinner from "../components/UIElements/Spinner";
import Footer from "../layouts/Footer";
import { AuthContext } from "../context/auth-context";

const SetList = () => {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedRolesets, setloadedRolesets] = useState();

  const compare = (a, b) => {
    let comparision = 0;
    if (a > b) {
      comparision = 1;
    } else if (a < b) {
      comparision = -1;
    }
    return comparision;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_API_URL}/api/roleset`
        );
        let sortedRolesets = responseData.rolesets.sort((a, b) =>
          compare(a.players, b.players)
        );
        setloadedRolesets(sortedRolesets);
      } catch (error) {
        console.log(error);
        console.log("Loading Backup");
        setloadedRolesets(roleBackup.rolesets);
      }
    };
    fetchData();
  }, [sendRequest]);

  return (
    <div className="SetList">
      <Navigation notifMsg={error} closeNotif={clearError} />
      <main className="main-body">
        <Text element="h2">Role Sets</Text>
        <br />
        {auth.userId && <Button to="/roleset/add">Add Role Set</Button>}
        {!isLoading && loadedRolesets ? (
          <Filter data={loadedRolesets} />
        ) : (
          <Spinner />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default SetList;
