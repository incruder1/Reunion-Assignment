import React from "react";
import Card from "../component/Card";
import Header from "../component/header";
import "./homepage.css";
import City from "../component/filter/City";
import Date from "../component/filter/Date";
import Price from "../component/filter/Price";
import Type from "../component/filter/PropertyType";

function HomePage() {
  return (
    <>
      <Header />
      <Card />
    </>
  );
}

export default HomePage;
