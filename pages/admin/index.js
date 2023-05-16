import Dashboard from '../admin/Viewer/Dashboard';
import Layout from '../../components/Layout';

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
  return <Layout>{page}</Layout>
}