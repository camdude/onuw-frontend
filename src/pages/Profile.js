import React, { useContext, useEffect, useState } from "react";

import Navigation from "../layouts/Navigation";
import Text from "../components/UIElements/Text";
import Footer from "../layouts/Footer";
import { AuthContext } from "../context/auth-context";
import { useHttpClient } from "../hooks/useHttpClient";

const Home = () => {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_API_URL}/api/user/${auth.userId}`
        );
        setUserData(responseData.user);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="Home">
      <Navigation />
      <main className="main-body">
        <Text element="h2">Your Profile</Text>
        {userData && (
          <React.Fragment>
            <Text>Name: {userData.firstName} {userData.lastName}</Text>
            <Text>Username: {userData.username}</Text>
            <Text>Email: {userData.email}</Text>
          </React.Fragment>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Home;
