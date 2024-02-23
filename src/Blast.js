import blast from "./blast.jpg";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Blast = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/");
  };

  return (
    <div className="blast">
      <img src={blast} alt="Explosion" onClick={handleClick} />
    </div>
  );
};

export default Blast;
