import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Spinner } from "@chakra-ui/react";

import PhonesList from "./components/PhonesList";

function App() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${process.env.REACT_APP_URL}/telephone`)
      .then((result) => {
        setLoading(false);
        setList(result.data);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, []);

  return (
    <section className="landingPage">
      <h1 className="mainTitle">
        This is your <a href={<PhonesList />}>Phoneallery!</a>
      </h1>
      {loading === true ? (
        <Spinner
          thickness="50px"
          speed="0.65s"
          emptyColor="black"
          color=" rgb(123 189 254);"
          size="xl"
        />
      ) : (
        <PhonesList list={list} />
      )}
    </section>
  );
}

export default App;
