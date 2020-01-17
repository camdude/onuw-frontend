import React, { useState, useEffect } from "react";

import Navigation from "../layouts/Navigation";
import Text from "../components/UIElements/Text";
import Button from "../components/FormElements/Button";
import Filter from "../components/Filter";
import roleBackup from "../assets/roles.json";
import { useHttpClient } from "../hooks/useHttpClient";

const SetList = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedRolesets, setloadedRolesets] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await sendRequest(
          "http://localhost:5000/api/roleset"
        );
        setloadedRolesets(responseData.rolesets);
      } catch (error) {
        console.log(error);
        console.log("Loading Backup");
        setloadedRolesets(roleBackup.rolesets);
      }
    }
    fetchData();
  }, [sendRequest])

  return (
    <div className="SetList">
      <Navigation />
      <main className="main-body">
        <Text element="h2">Role Sets</Text>
        <Button to="/rolesets/add">Add Role Set</Button>
        {!isLoading && loadedRolesets ? <Filter data={loadedRolesets} /> : <Text>Loading ...</Text>}
      </main>
    </div>
  );
};

export default SetList;
