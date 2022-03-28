import React from "react";
import Link from "./../Link/Link";

const Navbar = () => {
  const routes = [
    { id: 1, name: "Home", link: "/home" },
    { id: 2, name: "About", link: "/about" },
    { id: 3, name: "Project", link: "/projects" },
    { id: 3, name: "News", link: "/news" },
    { id: 4, name: "Gallery", link: "/gallery" },
  ];
  return (
    <nav>
      <ul className="md:flex justify-content-center">
        {routes.map((route) => (
          <Link id={route.id} route={route} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;