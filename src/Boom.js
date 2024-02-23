import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Boom = () => {
  const [number, setNumber] = useState(0);
  const history = useHistory();

  useEffect(() => {
    if (number) {
      const intervalId = setInterval(() => {
        setNumber((prevNumber) => {
          console.log(prevNumber);
          if (prevNumber === 1) {
            history.push("/blast");
          }
          return prevNumber - 1;
        });
      }, 500);

      return () => clearInterval(intervalId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [number]);

  const handleClick = () => {
    setNumber(5);
  };

  return (
    <div className="boom">
      {<button onClick={handleClick}>Do Not Press!!!</button>}
      {<h3>{Boolean(number) && number}</h3>}
    </div>
  );
};

export default Boom;
