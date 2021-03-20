import { useEffect, useState } from 'react'
import axios from 'axios'
import Host from '../components/Host'
import GridStyles from './Grid.module.css'

const RealDebrid = () => {
  const [hostsData, setHostsData] = useState({})
  useEffect(() => {
    const cancelToken = axios.CancelToken
    const source = cancelToken.source()
    axios
      .get('https://api.alldebrid.com/v4/hosts', {
        params: {
          agent: 'debrid-status',
        },
        cancelToken: source.token,
      })
      .then((res) => {
        console.log(res.data.data.hosts)
        setHostsData(res.data.data.hosts)
      })

    return () => {
      source.cancel
    }
  }, [])

  return (
    <div className="container px-2 sm:px-0 pt-4">
      <h1 className="text-2xl text-gray-600">All Debrid : Hosting status</h1>
      <div className={GridStyles.grid}>
        {Object.keys(hostsData).map((host) => {
          return <Host key={host} host={hostsData[host]} />
        })}
      </div>
    </div>
  )
}

export default RealDebrid
