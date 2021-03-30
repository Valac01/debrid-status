import { useState } from "react";
import PropTypes from "prop-types";

const AuthToken = ({ setLocalAuth }) => {
  const [tokenField, setTokenField] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(tokenField);
    if (tokenField) {
      localStorage.setItem("auth_token", tokenField);
      setLocalAuth(tokenField);
    }
    setTokenField("");
  };
  return (
    <div className="h-96 flex justify-center items-center">
      <div>
        <h3 className="text-2xl text-gray-600 text-center mb-2">
          Set Your Real Debrid Auth Token
        </h3>
        <p className="text-base text-red-400 text-center mb-2">
          It is required to get hosting status for real debrid
        </p>
        <p className="text-base text-gray-400 text-center mb-4">
          You can get your auth token from this&nbsp;
          <a
            className="text-indigo-500 underline"
            href="https://real-debrid.com/apitoken"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            link
          </a>
          , you need to be logged in.
        </p>
        <form onSubmit={handleSubmit} className="text-center">
          <input
            className="shadow-inner bg-gray-100 appearance-none border rounded-lg py-2 px-3 mr-3 text-gray-600"
            type="text"
            value={tokenField}
            onChange={(e) => setTokenField(e.target.value)}
          />
          <button
            type="submit"
            className="text-white bg-green-400 px-4 py-2 rounded-lg"
          >
            Add Token
          </button>
        </form>
      </div>
    </div>
  );
};

AuthToken.propTypes = {
  setLocalAuth: PropTypes.func,
};

export default AuthToken;
