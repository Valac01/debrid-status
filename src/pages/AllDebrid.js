import { useEffect, useState } from "react";

const RealDebrid = () => {
  const [hostsData, setHostsData] = useState([])
  
  useEffect(() => {
    console.log('Use effect')
    const fetchData = async() => {
      try {
        const res = await fetch('https://api.alldebrid.com/v4/hosts?' + 
        new URLSearchParams({agent: 'DebridStatus', user: 'Apple'}), {
          method: 'GET',
        })
        if(!res.ok) {
          throw Error
        }
        console.log(res)
        const data = await res.json()
        console.log(data.data)
        
        setHostsData(Object.keys(data.data.hosts))
        console.log(hostsData)

      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])
  
  return (
    <div className="container px-2 sm:px-0 pt-4">
      <h1 className="text-2xl text-gray-600">All Debrid : Hosting status</h1>
      { 
        hostsData.map(host => {
          return <p key={host}>{host}</p>
        })
      }
    </div>
  );
}
 
export default RealDebrid;