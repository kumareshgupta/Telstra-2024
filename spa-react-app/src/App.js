import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/AboutUs";
import Contact from "./components/Contact";
import ContactDetails from "./components/ContactDetails";
import Feedback from "./components/Feedback";
import NotFound from "./components/NotFound";

import "./styles.css";
import BookService from "./components/BookService";

function App() {
  return <BookService />;
}

export default App;
//<Route path="*" element={<NotFound />} />
{
  /* Handles all undefined routes */
}
