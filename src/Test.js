import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const Test = () => {
  const [data, setData] = useState(null);
  const [productNames, setProductNames] = useState([]);
  const [productPrices, setProductPrices] = useState([]);
  const { id } = useParams();
  const main = JSON.stringify(data, null, 2);
  console.log(productNames);
  console.log(productPrices);

  useEffect(() => {
    const fetchData = async () => {
      const dbRef = ref(getDatabase(), "profiles/" + id + "/cart");

      onValue(dbRef, (snapshot) => {
        setData(snapshot.val());
      });
    };

    fetchData();
    return () => {};
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      const dbRef = ref(getDatabase(), "profiles/" + id + "/cart");

      onValue(dbRef, (snapshot) => {
        const profiles = snapshot.val();

        if (profiles) {
          const productNamesArray = Object.values(profiles).map(
            (profile) => profile.username
          );

          setProductNames(productNamesArray);
        }
        if (profiles) {
          const productPriceArray = Object.values(profiles).map(
            (profile) => profile.password
          );
          setProductPrices(productPriceArray);
        }
      });
    };

    fetchData();

    return () => {};
  }, []);

  return (
    <div>
      <h1>Data from Firebase Realtime Database:</h1>
      <div>
        {productNames
          ? productNames.map((product) => <pre>{product}</pre>)
          : "Loading . . ."}
      </div>
      <div>
        {productPrices
          ? productPrices.map((product) => <pre>{product}</pre>)
          : "Loading . . ."}
      </div>
      <pre>{main}</pre>
    </div>
  );
};

export default Test;
