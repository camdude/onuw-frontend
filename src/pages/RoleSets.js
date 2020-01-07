import React, { useState } from "react";

import Navigation from "../layouts/Navigation";
import Text from "../components/UIElements/Text";
import RoleSetCard from "../components/RoleSetCard";
import Filter from "../components/Filter";

const RoleSets = () => {
  

  return (
    <div className="RoleSets">
      <Navigation />
      <main className="main-body">
        <Text element="h2">Role Sets</Text>
        <Filter />
      </main>
    </div>
  );
};

export default RoleSets;
