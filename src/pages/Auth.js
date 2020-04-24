import React, { useContext } from "react";

import Navigation from "../layouts/Navigation";
import Text from "../components/UIElements/Text";
import Button from "../components/FormElements/Button";
import Input from "../components/FormElements/Input";
import Card from "../components/UIElements/Card";
import { useForm } from "../hooks/useForm";
import { RULE_VALIDATOR_REQUIRE } from "../components/FormElements/validate";
import { useHttpClient } from "../hooks/useHttpClient";
import { AuthContext } from "../context/auth-context";

const Auth = props => {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [formState, inputHandler] = useForm({
    email: {
      value: "",
      isValid: false
    },
    password: {
      value: "",
      isValid: false
    }
  });

  const onLogin = async event => {
    event.preventDefault();

    try {
      const formData = {
        email: formState.inputs.email.value,
        password: formState.inputs.password.value
      };

      const response = await sendRequest(
        `${process.env.REACT_APP_API_URL}/api/user/login`,
        "POST",
        JSON.stringify(formData),
        { "Content-Type": "application/json" }
      );
      
      auth.login(response.userId, response.token, response.userData);

      props.history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="Auth">
      <Navigation notifMsg={error} closeNotif={clearError} />
      <main className="main-body">
        <form className="Login">
          <Card>
            <Text element="h2">Login</Text>
            <Input
              id="email"
              type="text"
              placeholder="Email"
              label="Email"
              value={formState.email}
              onInput={inputHandler}
              rules={[RULE_VALIDATOR_REQUIRE()]}
              errorMsg="Please enter your email."
            />
            <Input
              id="password"
              type="password"
              placeholder="Password"
              label="Password"
              value={formState.password}
              onInput={inputHandler}
              rules={[RULE_VALIDATOR_REQUIRE()]}
              errorMsg="Please enter your password."
            />
            <Button type="submit" onClick={onLogin}>
              Login
            </Button>
          </Card>
        </form>
        <div className="Create">
          <Text>
            Don't have an account?{" "}
            <Text element="link" to="/users/signup">
              Sign Up
            </Text>
          </Text>
        </div>
      </main>
    </div>
  );
};

export default Auth;
