// Contact.js
import { Link, Outlet } from "react-router-dom";

import React from "react";

function Contact() {
  return (
    <div>
      <h2>Contact Us</h2>
      <nav>
        <ul>
          <li>
            <Link to="details">Contact Details</Link>
          </li>
          <li>
            <Link to="feedback">Feedback</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
  //return <h2>Contact Page</h2>;
}

export default Contact;
