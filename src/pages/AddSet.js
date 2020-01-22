import React from "react";
import Recaptcha from "react-recaptcha";

import Navigation from "../layouts/Navigation";
import Text from "../components/UIElements/Text";
import Input from "../components/FormElements/Input";
import Button from "../components/FormElements/Button";
import { RULE_VALIDATOR_REQUIRED } from "../components/FormElements/validate";
import SetCreator from "../components/SetCreator/SetCreator";
import { useHttpClient } from "../hooks/useHttpClient";
import { useForm } from "../hooks/useForm";
import Footer from "../layouts/Footer";

const AddSet = props => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [formState, inputHandler] = useForm({
    title: {
      value: "",
      isValid: false
    },
    complexity: {
      value: "",
      isValid: false
    },
    desc: {
      value: "",
      isValid: true
    },
    username: {
      value: "",
      isValid: false
    },
    cards: {
      value: [
        "werewolf",
        "minion",
        "robber",
        "troublemaker",
        "drunk",
        "tanner"
      ],
      isValid: true
    },
    recaptcha: {
      value: null,
      isValid: false
    }
  });

  const recaptchaLoaded = () => {
    inputHandler("recaptcha", "Loaded", false);
    console.log(formState);
  };

  const recaptchaVerify = () => {
    inputHandler("recaptcha", null, true);
    console.log(formState);
  };

  const onRolesetSubmit = async event => {
    event.preventDefault();

    const roles = formState.inputs.cards.value;
    for (let i = 0; i < roles.length; i++) {
      roles[i] = roles[i].replace(" ", "_");
    }

    try {
      const formData = {
        title: formState.inputs.title.value,
        complexity: formState.inputs.complexity.value,
        username: formState.inputs.username.value,
        desc: formState.inputs.desc.value,
        roles: roles
      };

      const response = await sendRequest(
        "https://onuw-backend.cmrnclffrd.now.sh/roleset",
        "POST",
        JSON.stringify(formData),
        { "Content-Type": "application/json" }
      );

      // props.history.push(`/roleset/${response.roleset.id}`);
      props.history.push(`/roleset/all`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="AddSet">
      <Navigation />
      <main className="main-body">
        <Text element="h2">New Role Set</Text>
        <Text>
          Please fill out the following details to create a new role set.
        </Text>
        <form>
          <Text element="h3">Details</Text>
          <Input
            id="title"
            type="text"
            placeholder="Role Set Title"
            label="Role Set Title"
            value={formState.title}
            onInput={inputHandler}
            rules={[RULE_VALIDATOR_REQUIRED]}
            errorMsg="Please enter a title."
          />
          <Input
            id="complexity"
            element="select"
            label="Complexity"
            options={["simple", "moderate", "complex"]}
            initialValid={true}
            initialValue="simple"
            value={formState.complexity}
            onInput={inputHandler}
            rules={[RULE_VALIDATOR_REQUIRED]}
          />
          <Input
            id="desc"
            element="textarea"
            placeholder="Game Notes"
            label="Game Notes"
            initialValid={true}
            value={formState.desc}
            onInput={inputHandler}
          />
          <Input
            id="username"
            type="text"
            placeholder="Username"
            label="Username"
            value={formState.user}
            onInput={inputHandler}
            rules={[RULE_VALIDATOR_REQUIRED]}
            errorMsg="Please enter your username."
          />
          <Text element="h3">Cards</Text>
          <Text>
            Please select the cards you would like to use in this set.
          </Text>
          <SetCreator
            id="cards"
            value={formState.cards}
            onInput={inputHandler}
          />
          <Recaptcha
            sitekey="6LeASdEUAAAAAAYIgGK93we9F3Dcwpf_cGr8p3Gx"
            render="explicit"
            onloadCallback={recaptchaLoaded}
            verifyCallback={recaptchaVerify}
          />
          <Button
            type="submit"
            onClick={onRolesetSubmit}
            disabled={!formState.isFormValid}
          >
            Add Set
          </Button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default AddSet;
