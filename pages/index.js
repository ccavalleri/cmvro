import Layout from './Layout';

export default function Home() {
  return (
    <div>
      <div className="">
 
      </div>
    </div>
  );
}

Home.getLayout =function(page) {
  return <Layout>{page}</Layout>
}