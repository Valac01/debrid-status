import Host from "../components/Host";
import GridStyles from "./Grid.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import AuthToken from "../components/AuthToken";

const RealDebrid = () => {
  const [hostsData, setHostsData] = useState({});
  const [localAuth, setLocalAuth] = useState("");

  useEffect(() => {
    setLocalAuth(localStorage.getItem("auth_token"));
    const cancelToken = axios.CancelToken;
    const source = cancelToken.source();
    if (localStorage != "") {
      axios
        .get("https://api.real-debrid.com/rest/1.0/hosts/status", {
          params: {
            auth_token: localAuth,
          },
          cancelToken: source.token,
        })
        .then((res) => {
          setHostsData(res.data);
          console.log(hostsData);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
    return () => {
      source.cancel;
    };
  }, [localAuth]);

  const clearAuthToken = () => {
    setLocalAuth("");
    localStorage.removeItem("auth_token");
  };

  return (
    <div className="container px-2 sm:px-0 pt-4">
      <div className="flex justify-between">
        <h1 className="text-2xl text-gray-600">Real Debrid : Hosting status</h1>
        <button
          onClick={clearAuthToken}
          className="text-white bg-red-400 px-4 py-2 rounded-lg"
        >
          Clear Auth Token
        </button>
      </div>
      {localAuth ? (
        <div className={GridStyles.grid}>
          {Object.keys(hostsData).map((host) => {
            let status = true;
            if (hostsData[host].status === "up") {
              status = true;
            } else {
              status = false;
            }
            return <Host key={host} host={hostsData[host]} status={status} />;
          })}
        </div>
      ) : (
        <AuthToken setLocalAuth={setLocalAuth} />
      )}
    </div>
  );
};

export default RealDebrid;
