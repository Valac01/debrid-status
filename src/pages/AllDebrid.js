import { useEffect, useState } from "react";
import axios from "axios";
import Host from "../components/Host";
import GridStyles from "./Grid.module.css";

const RealDebrid = () => {
  const [hostsData, setHostsData] = useState({});
  const [error, setError] = useState("");
  useEffect(() => {
    const cancelToken = axios.CancelToken;
    const source = cancelToken.source();
    axios
      .get("https://api.alldebrid.com/v4/hosts", {
        params: {
          agent: "debrid-status",
        },
        cancelToken: source.token,
      })
      .then((res) => {
        setHostsData(res.data.data.hosts);
      })
      .catch((err) => {
        setError(err.message);
      });

    return () => {
      source.cancel;
    };
  }, []);

  return (
    <div className="container px-2 sm:px-0 pt-4">
      <h1 className="text-2xl text-gray-600">All Debrid : Hosting status</h1>
      {error ? (
        <div className="text-center text-red-500">
          <p>{error}</p>
          <p>You can try refreshing the browser or try again later</p>
        </div>
      ) : (
        <div className={GridStyles.grid}>
          {Object.keys(hostsData).map((host) => {
            return (
              <Host
                key={host}
                host={hostsData[host]}
                status={hostsData[host].status}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default RealDebrid;
