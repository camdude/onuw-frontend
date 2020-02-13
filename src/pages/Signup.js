import React from "react";
import Recaptcha from "react-recaptcha";

import Navigation from "../layouts/Navigation";
import Text from "../components/UIElements/Text";
import Button from "../components/FormElements/Button";
import Input from "../components/FormElements/Input";
import Card from "../components/UIElements/Card";
import { useForm } from "../hooks/useForm";
import {
  RULE_VALIDATOR_REQUIRED,
  RULE_VALIDATOR_EMAIL
} from "../components/FormElements/validate";
import { useHttpClient } from "../hooks/useHttpClient";
import { useState } from "react";

const Signup = props => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
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
    },
    recaptcha: {
      value: null,
      isValid: false
    }
  });
  const [errorMsg, setErrorMsg] = useState();

  const recaptchaLoaded = () => {
    inputHandler("recaptcha", "Loaded", false);
  };

  const recaptchaVerify = () => {
    inputHandler("recaptcha", null, true);
  };

  const onSignup = async event => {
    event.preventDefault();

    if (formState.inputs.password.value === formState.inputs.confirm.value) {
      try {
        const formData = {
          username: formState.inputs.username.value,
          email: formState.inputs.email.value,
          password: formState.inputs.password.value
        };

        const response = await sendRequest(
          `${process.env.REACT_APP_API_URL}/api/user/new`,
          "POST",
          JSON.stringify(formData),
          { "Content-Type": "application/json" }
        );

        console.log(response);

        props.history.push(`/roleset/all`);
      } catch (error) {
        console.log(error);
      }
    } else {
      setErrorMsg("Please make sure that both passwords match!");
    }
  };

  return (
    <div className="Signup">
      <Navigation notifMsg={error} closeNotif={clearError} />
      <main className="main-body">
        <form className="Signup">
          <Card>
            <Text element="h2">Signup</Text>
            <p className="paragraph Signup__error">{errorMsg}</p>
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
            <Recaptcha
              sitekey="6LeASdEUAAAAAAYIgGK93we9F3Dcwpf_cGr8p3Gx"
              render="explicit"
              onloadCallback={recaptchaLoaded}
              verifyCallback={recaptchaVerify}
            />
            <Button
              type="submit"
              onClick={onSignup}
              disabled={!formState.isFormValid}
            >
              Signup
            </Button>
          </Card>
        </form>
      </main>
    </div>
  );
};

export default Signup;
