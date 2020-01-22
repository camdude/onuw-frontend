import React from "react";

import Navigation from "../layouts/Navigation";
import Text from "../components/UIElements/Text";
import Button from "../components/FormElements/Button";
import Input from "../components/FormElements/Input";
import Card from "../components/UIElements/Card";
import { useForm } from "../hooks/useForm";
import { RULE_VALIDATOR_REQUIRED, RULE_VALIDATOR_EMAIL } from "../components/FormElements/validate";

const Signup = () => {
  const [formState, inputHandler] = useForm({
    username: {
      value: "",
      isValid: false
    },
    email: {
      value: "",
      isValid: false
    },
    password: {
      value: "",
      isValid: false
    },
    confirm: {
      value: "",
      isValid: false
    }
  });

  const onSignup = event => {
    event.preventDefault();
  };

  return (
    <div className="Signup">
      <Navigation />
      <main className="main-body">
        <form className="">
          <Card>
            <Text element="h2">Signup</Text>
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
              id="email"
              type="email"
              placeholder="Email"
              label="Email"
              value={formState.email}
              onInput={inputHandler}
              rules={[RULE_VALIDATOR_REQUIRED, RULE_VALIDATOR_EMAIL]}
              errorMsg="Please enter your email."
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
            <Input
              id="confirm"
              type="password"
              placeholder="Confirm Password"
              label="Confirm Password"
              value={formState.confirm}
              onInput={inputHandler}
              rules={[RULE_VALIDATOR_REQUIRED]}
              errorMsg="Please confirm your password."
            />
            <Button type="submit" onClick={onSignup}>
              Signup
            </Button>
          </Card>
        </form>
      </main>
    </div>
  );
};

export default Signup;
