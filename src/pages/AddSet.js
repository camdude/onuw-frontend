import React from "react";

import { useForm } from "../hooks/useForm";

import Navigation from "../layouts/Navigation";
import Text from "../components/UIElements/Text";
import Input from "../components/FormElements/Input";
import Button from "../components/FormElements/Button";
import { RULE_VALIDATOR_REQUIRED } from "../components/FormElements/validate";

const AddSet = () => {
  const [formState, inputHandler] = useForm({
    title: {
      value: "",
      isValid: false
    },
    players: {
      value: 3,
      isValid: false
    },
    compexity: {
      value: "",
      isValid: false
    },
    desc: {
      value: "",
      isValid: false
    }
  });

  return (
    <div className="AddSet">
      <Navigation />
      <main className="main-body">
        <Text element="h2">Add New Role Set</Text>
        <form>
          <Input
            id="title"
            type="text"
            placeholder="Role Set Title"
            label="Role Set Title"
            onInput={inputHandler}
            rules={[RULE_VALIDATOR_REQUIRED]}
            errorMsg="Please enter a title."
          />
          <Input
            id="players"
            type="number"
            placeholder="Player Amount"
            label="Player Amount"
            onInput={inputHandler}
            rules={[RULE_VALIDATOR_REQUIRED]}
            errorMsg="Please enter a number that is at least 3."
          />
          <Input
            id="complexity"
            element="select"
            label="Complexity"
            options={["simple", "moderate", "complex"]}
            initialValid={true}
            onInput={inputHandler}
            rules={[RULE_VALIDATOR_REQUIRED]}
          />
          <Text element="h3">__Expansions__</Text>
          <Input
            id="desc"
            type="textarea"
            placeholder="Description"
            label="Description"
            onInput={inputHandler}
          />
          <Text element="h3">__Cards__</Text>
          <Button type="submit" disabled={!formState.isFormValid}>
            Add
          </Button>
        </form>
      </main>
    </div>
  );
};

export default AddSet;
