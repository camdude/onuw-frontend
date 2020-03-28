import { useState, useCallback, useEffect } from "react";

import { useHttpClient } from "../hooks/useHttpClient";

let logoutTimer;

export const useAuth = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const [token, setToken] = useState(false);
  const [tokenExpirationDate, setTokenExpirationDate] = useState();
  const [userId, setUserId] = useState(false);
  const [userData, setUserData] = useState(false);

  const login = useCallback((uid, token, uData, expirationDate) => {
    setToken(token);
    setUserId(uid);
    setUserData(uData);

    const tokenExpirationDate =
      expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
    setTokenExpirationDate(tokenExpirationDate);
    localStorage.setItem(
      "userData",
      JSON.stringify({
        userId: uid,
        token: token,
        expiration: tokenExpirationDate.toISOString()
      })
    );
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setTokenExpirationDate(null);
    setUserId(null);
    setUserData(null);
    localStorage.removeItem("userData");
  }, []);

  useEffect(() => {
    if (token && tokenExpirationDate) {
      const remainingTime =
        tokenExpirationDate.getTime() - new Date().getTime();
      logoutTimer = setTimeout(logout, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [token, logout, tokenExpirationDate]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (
      storedData &&
      storedData.token &&
      new Date(storedData.expiration) > new Date()
    ) {
      const fetchData = async () => {
        try {
          const responseData = await sendRequest(
            `${process.env.REACT_APP_API_URL}/api/user/${storedData.userId}`
          );
          login(
            storedData.userId,
            storedData.token,
            responseData.user,
            new Date(storedData.expiration)
          );
        } catch (err) {
          console.log(err);
        }
      };
      fetchData();
    }
  }, [login]);

  return { token, login, logout, userId, userData };
};
