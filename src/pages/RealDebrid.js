import Host from "../components/Host";
import GridStyles from "./Grid.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

const RealDebrid = () => {
  const [hostsData, setHostsData] = useState({});
  useEffect(() => {
    const cancelToken = axios.CancelToken;
    const source = cancelToken.source();
    axios
      .get("https://api.real-debrid.com/rest/1.0/hosts/status", {
        params: {
          auth_token: "",
        },
        cancelToken: source.token,
      })
      .then((res) => {
        setHostsData(res.data);
        console.log(hostsData);
      });

    return () => {
      source.cancel;
    };
  }, []);

  return (
    <div className="container px-2 sm:px-0 pt-4">
      <h1 className="text-2xl text-gray-600">Real Debrid : Hosting status</h1>
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
    </div>
  );
};

export default RealDebrid;
