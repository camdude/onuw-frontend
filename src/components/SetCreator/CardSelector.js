import React from "react";

import Button from "../FormElements/Button";

const cards = [
  "alien",
  "alpha wolf",
  "apprentice tanner",
  "apprentice assassin",
  "apprentice seer",
  "assassin",
  "aura seer",
  "beholder",
  "blob",
  "body snatcher",
  "bodyguard",
  "copycat",
  "the count",
  "cow",
  "cupid",
  "curator",
  "cursed",
  "diseased",
  "doppelganger",
  "dream wolf",
  "drunk",
  "empath",
  "exposer",
  "gremlin",
  "groob",
  "hunter",
  "insomniac",
  "investigator",
  "leader",
  "marksman",
  "mason",
  "the master",
  "minion",
  "mortician",
  "mystic wolf",
  "nostradamus",
  "oracle",
  "paranormal investigator",
  "pickpocket",
  "priest",
  "prince",
  "pyschic",
  "rascal",
  "rendfield",
  "revealer",
  "robber",
  "seer",
  "sentinel",
  "squire",
  "synthetic alien",
  "tanner",
  "thing",
  "troublemaker",
  "vampire",
  "village idiot",
  "villager",
  "werewolf",
  "witch",
  "zerb"
];

const CardSelector = props => {
  const onRemoveHandler = event => {
    event.preventDefault();
    props.onRemove(props.index);
  };

  return (
    <div className="Card-Selector">
      <div className="Card-Selector__index">{props.index + 1}</div>
      <img
        className="Card-Selector__image"
        src={require(`../../assets/role_cards/${props.selected.replace(
          / /g,
          "_"
        )}.png`)}
        alt=""
      />
      <select
        id={props.index}
        className="Card-Selector__dropdown"
        onChange={props.onChange}
        value={props.selected}
      >
        {cards.map(c => (
          <option key={c}>{c}</option>
        ))}
      </select>
      <Button onClick={onRemoveHandler} disabled={props.removeDisabled}>&#8722;</Button>
    </div>
  );
};

export default CardSelector;