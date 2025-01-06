import './Dashboard.css';
import SideMenu from './sideMenu.jsx';

const Dashboard = () => {
        return (
        <div className="dashboard-container">
        <SideMenu />
        <div className="dashboard-body">
                <h4>Dashboard</h4>
        </div>
        </div>
        )
}
export default Dashboard;