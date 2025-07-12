import CompanyDetails from '../components/CompanyDetails';
import HeaderCompanyInfo from '../components/HeaderCompanyInfo';
import LocationMap from '../components/LocationMap';

const Century21Dashboard = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 font-sans space-y-6">
      <HeaderCompanyInfo />
      <CompanyDetails />
      <LocationMap />
    </div>
  );
};

export default Century21Dashboard;
