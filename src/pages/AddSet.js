import React from "react";

import { useForm } from "../hooks/useForm";

import Navigation from "../layouts/Navigation";
import Text from "../components/UIElements/Text";
import Input from "../components/FormElements/Input";
import Button from "../components/FormElements/Button";
import { RULE_VALIDATOR_REQUIRED } from "../components/FormElements/validate";
import SetCreator from "../components/SetCreator/SetCreator";

const AddSet = () => {
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

  const onRolesetSubmit = event => {
    event.preventDefault();
    console.log(formState);
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
          <SetCreator value={formState.cards} />
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
