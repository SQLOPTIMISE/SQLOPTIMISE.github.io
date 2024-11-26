import React from "react";
import { Helmet } from "react-helmet";
import "../styles/global.css";

const Layout = ({ children }) => (
  <>
    <Helmet>
      <title>SQL OPTIMISE</title>
    </Helmet>
    <header>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/resources">Resources</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
    <main>{children}</main>
    <footer>
      <p>&copy; {new Date().getFullYear()} SQL OPTIMISE. All rights reserved.</p>
      <ul>
        <li><a href="https://github.com/SQLOPTIMISE">GitHub</a></li>
        <li><a href="https://www.linkedin.com/in/gareth-huggins/">LinkedIn</a></li>
      </ul>
    </footer>
  </>
);

export default Layout;