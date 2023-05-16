import Dashboard from '../admin/Viewer/Dashboard';
import LayoutUser from './LayoutUser';

export default function Home() {
  return (
    <div>
      <div className="">
        <Dashboard />
      </div>
    </div>
  );
}

Home.getLayout =function(page) {
  return <LayoutUser>{page}</LayoutUser>
}