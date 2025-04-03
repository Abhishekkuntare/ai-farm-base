import FarmersList from "../components/Farmers/FarmersList";
import MarketList from "../components/Markets/MarketList";

function Dashboard() {

  return (
    <div className="p-4">
      <FarmersList />
      {/* <MarketList /> */}
    </div>
  );
}
export default Dashboard;