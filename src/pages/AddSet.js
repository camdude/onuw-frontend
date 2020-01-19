import React from "react";

import Navigation from "../layouts/Navigation";
import Text from "../components/UIElements/Text";
import Input from "../components/FormElements/Input";
import Button from "../components/FormElements/Button";
import { RULE_VALIDATOR_REQUIRED } from "../components/FormElements/validate";
import SetCreator from "../components/SetCreator/SetCreator";
import { useHttpClient } from "../hooks/useHttpClient";
import { useForm } from "../hooks/useForm";

const AddSet = () => {
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
    }
  });

  const onRolesetSubmit = async event => {
    event.preventDefault();

    console.log(formState);
    try {
      var formData = new FormData();
      formData.append("title", formState.inputs.title.value);
      formData.append("complexity", formState.inputs.complexity.value);
      formData.append("desc", formState.inputs.desc.value);
      formData.append("roles", formState.inputs.cards.value);

      await sendRequest("http://localhost:5000/api/roleset", "POST", formData);

      // history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="AddSet">
      <Navigation />
      <main className="main-body">
        <Text element="h2">New Role Set</Text>
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
            placeholder="Description"
            label="Description"
            initialValid={true}
            value={formState.desc}
            onInput={inputHandler}
          />
          <Text element="h3">Cards</Text>
          <Text>
            Please select the cards you would like to use in this role set.
          </Text>
          <SetCreator
            id="cards"
            value={formState.cards}
            onInput={inputHandler}
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
    </div>
  );
};

export default AddSet;
