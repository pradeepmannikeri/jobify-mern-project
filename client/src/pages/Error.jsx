import img from "../assets/images/not-found.svg";
import { Link, useRouteError } from "react-router-dom";
import Wrapper from "../assets/wrappers/ErrorPage";

const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="not found img" />
          <h3>Ohh!! page not found</h3>
          <p>we cant seem to find the page you are looking for</p>
          <Link to="/dashboard">go home</Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div>Something Went Wrong</div>
    </Wrapper>
  );
};

export default Error;
