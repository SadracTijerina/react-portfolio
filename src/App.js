import { React, useState } from "react";
import Header from "./components/Header/Header";
import AboutMe from "./components/AboutMe/AboutMe";
import Footer from "./components/Footer/Footer";
import Project from "./components/Project/Project";
import ContactMe from "./components/ContactMe/ContactMe";
import Resume from "./components/Resume/Resume";

function App() {
  const [navItems] = useState(["About me", "Projects", "Contact Me", "Resume"]);
  const [currentNav, setCurrentNav] = useState(navItems[0]);

  const page = () => {
    switch (currentNav) {
      case "Projects":
        return <Project />;
      case "Contact Me":
        return <ContactMe />;
      case "Resume":
        return <Resume />;
      default:
        return <AboutMe />;
    }
  };

  document.title = currentNav;

  return (
    <div>
      <Header
        navItems={navItems}
        currentNav={currentNav}
        setCurrentNav={setCurrentNav}
      />
      <main>{page(currentNav)}</main>
      <Footer />
    </div>
  );
}

export default App;
