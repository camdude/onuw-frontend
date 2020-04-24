const VALIDATOR_TYPE_REQUIRE = "REQUIRED";
const VALIDATOR_TYPE_MINLENGTH = "MINLENGTH";
const VALIDATOR_TYPE_MAXLENGTH = "MAXLENGTH";
const VALIDATOR_TYPE_EMAIL = "EMAIL";
const VALIDATOR_TYPE_MATCH = "MATCH";
const VALIDATOR_TYPE_CONTAINSLOWER = "LOWER";
const VALIDATOR_TYPE_CONTAINSUPPER = "UPPER";
const VALIDATOR_TYPE_CONTAINSNUMBER = "NUMBER";

export const RULE_VALIDATOR_REQUIRE = () => ({ type: VALIDATOR_TYPE_REQUIRE });
export const RULE_VALIDATOR_MINLENGTH = (val) => ({
  type: VALIDATOR_TYPE_MINLENGTH,
  value: val,
});
export const RULE_VALIDATOR_MAXLENGTH = (val) => ({
  type: VALIDATOR_TYPE_MAXLENGTH,
  value: val,
});
export const RULE_VALIDATOR_EMAIL = () => ({ type: VALIDATOR_TYPE_EMAIL });
export const RULE_VALIDATOR_MATCH = (val) => ({
  type: VALIDATOR_TYPE_MATCH,
  value: val,
});
export const RULE_VALIDATOR_CONTAINSLOWER = () => ({
  type: VALIDATOR_TYPE_CONTAINSLOWER,
});
export const RULE_VALIDATOR_CONTAINSUPPER = () => ({
  type: VALIDATOR_TYPE_CONTAINSUPPER,
});
export const RULE_VALIDATOR_CONTAINSNUMBER = () => ({
  type: VALIDATOR_TYPE_CONTAINSNUMBER,
});

export const validate = (value, rules) => {
  let isValid = true;

  for (const rule of rules) {
    switch (rule.type) {
      case VALIDATOR_TYPE_REQUIRE:
        isValid = isValid && value.trim() !== "";
        break;
      case VALIDATOR_TYPE_MINLENGTH:
        isValid = isValid && value.trim().length >= rule.value;
        break;
      case VALIDATOR_TYPE_MAXLENGTH:
        isValid = isValid && value.trim().length <= rule.value;
        break;
      case VALIDATOR_TYPE_EMAIL:
        isValid = isValid && /\S+@\S+\.\S+/.test(value);
        break;
      case VALIDATOR_TYPE_MATCH:
        isValid = isValid && value == rule.value;
        break;
      case VALIDATOR_TYPE_CONTAINSLOWER:
        isValid = isValid && /[a-z]/.test(value);
        break;
      case VALIDATOR_TYPE_CONTAINSUPPER:
        isValid = isValid && /[A-Z]/.test(value);
        break;
      case VALIDATOR_TYPE_CONTAINSNUMBER:
        isValid = isValid && /\d/.test(value);
        break;
      default:
        console.log("def");
        break;
    }
  }
  return isValid;
};
