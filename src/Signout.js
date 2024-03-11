import { useHistory } from "react-router-dom";

const Signout = () => {
  const history = useHistory();

  setTimeout(() => {
    window.location.reload();
    history.push("/home");
  }, 2000);

  return <h2>Signing Out . . . .</h2>;
};

export default Signout;
