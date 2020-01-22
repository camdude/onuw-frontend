import React from "react";

import Navigation from "../layouts/Navigation";
import Text from "../components/UIElements/Text";
import Button from "../components/FormElements/Button";
import Input from "../components/FormElements/Input";
import Card from "../components/UIElements/Card";
import { useForm } from "../hooks/useForm";
import { RULE_VALIDATOR_REQUIRED } from "../components/FormElements/validate";
import { useHttpClient } from "../hooks/useHttpClient";

const Auth = props => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [formState, inputHandler] = useForm({
    username: {
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
        username: formState.inputs.username.value,
        password: formState.inputs.password.value
      };

      const response = await sendRequest(
        "https://onuw-backend.cmrnclffrd.now.sh/users",
        "POST",
        JSON.stringify(formData),
        { "Content-Type": "application/json" }
      );

      props.history.push(`/`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="Auth">
      <Navigation />
      <main className="main-body">
        <form className="Login">
          <Card>
            <Text element="h2">Login</Text>
            <Input
              id="username"
              type="text"
              placeholder="Username"
              label="Username"
              value={formState.username}
              onInput={inputHandler}
              rules={[RULE_VALIDATOR_REQUIRED]}
              errorMsg="Please enter your username."
            />
            <Input
              id="password"
              type="password"
              placeholder="Password"
              label="Password"
              value={formState.password}
              onInput={inputHandler}
              rules={[RULE_VALIDATOR_REQUIRED]}
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
