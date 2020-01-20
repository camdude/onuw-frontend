import React from "react";

import Button from "../FormElements/Button";

const cards = [
  "alien",
  "alpha wolf",
  "annoying lad",
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
  "cow",
  "cupid",
  "curator",
  "cursed",
  "defender-er",
  "detector",
  "diseased",
  "doppelganger",
  "dr peeker",
  "dream wolf",
  "drunk",
  "empath",
  "evilometer",
  "exposer",
  "family man",
  "flipper",
  "gremlin",
  "groob",
  "henchman",
  "hunter",
  "innocent bystander",
  "insomniac",
  "intern",
  "investigator",
  "leader",
  "mad scientist",
  "marksman",
  "mason",
  "minion",
  "mirror man",
  "mortician",
  "mystic wolf",
  "nostradamus",
  "oracle",
  "paranormal investigator",
  "pickpocket",
  "priest",
  "prince",
  "pyschic",
  "rapscallion",
  "rascal",
  "rendfield",
  "revealer",
  "ricochet rhino",
  "robber",
  "role retriever",
  "seer",
  "self-awareness girl",
  "sentinel",
  "squire",
  "switcheroo",
  "synthetic alien",
  "tanner",
  "temptress",
  "the count",
  "the master",
  "the sponge",
  "thing",
  "troublemaker",
  "vampire",
  "village idiot",
  "villager",
  "voodoo lou",
  "werewolf",
  "windy wendy",
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
