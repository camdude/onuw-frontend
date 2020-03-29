import React, { useState, useEffect, useContext } from "react";

import Navigation from "../layouts/Navigation";
import Text from "../components/UIElements/Text";
import Filter from "../components/Filter";
import roleBackup from "../assets/roles.json";
import { useHttpClient } from "../hooks/useHttpClient";
import Spinner from "../components/UIElements/Spinner";
import Footer from "../layouts/Footer";
import { AuthContext } from "../context/auth-context";

const Collection = () => {
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
        const userData = await sendRequest(
          `${process.env.REACT_APP_API_URL}/api/user/${auth.userId}`
        );

        const favourites = userData.user.favourites;

        const responseData = await sendRequest(
          `${process.env.REACT_APP_API_URL}/api/roleset`
        );

        let sortedRolesets = responseData.rolesets.sort((a, b) =>
          compare(a.players, b.players)
        );

        const favouriteRolesets = sortedRolesets.filter(set => {
          let isFav = false;
          favourites.forEach(favId => {
            isFav = isFav || set.id === favId;
          });
          return isFav;
        });

        setloadedRolesets(favouriteRolesets);
      } catch (error) {
        console.log(error);
        console.log("Loading Backup");
        setloadedRolesets(roleBackup.rolesets);
      }
    };
    fetchData();
  }, [sendRequest]);

  return (
    <div className="Collection">
      <Navigation notifMsg={error} closeNotif={clearError} />
      <main className="main-body">
        <Text element="h2">My Collection</Text>
        <br />
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

export default Collection;
