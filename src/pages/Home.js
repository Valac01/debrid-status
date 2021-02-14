import SiteCard from "../components/SiteCard"
import HomeStyles from './Home.module.css'

const Home = () => {
  return (
    <div className="home container">
      <div className={HomeStyles.grid}>
        <SiteCard name="Real Debrid" to="/real-debrid"/>
        <SiteCard name="All Debrid"to="/all-debrid"/>
      </div>
    </div>
  );
}
 
export default Home;