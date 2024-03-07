import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const Test = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // Reference to your Firebase Realtime Database
      const dbRef = ref(getDatabase(), "products");

      // Fetch data from Firebase
      onValue(dbRef, (snapshot) => {
        setData(snapshot.val());
      });
    };

    fetchData();

    // Clean up listener when component unmounts
    return () => {
      // No need to remove the listener in newer Firebase versions
    };
  }, []);

  return (
    <div>
      <h1>Data from Firebase Realtime Database:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Test;
