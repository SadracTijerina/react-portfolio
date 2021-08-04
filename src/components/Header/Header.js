import React from "react";
import { useState } from "react";

import Navigation from "../Nav/Navigation";

function Header(props) {
  const [contactSelected, setContactSelected] = useState(false);

  const { navItems = [], currentNav, setCurrentNav } = props;

  return (
    <header>
      <Navigation
        navItems={navItems}
        currentNav={currentNav}
        setCurrentNav={setCurrentNav}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      />
    </header>
  );
}

export default Header;
