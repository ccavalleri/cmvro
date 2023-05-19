import Body from '../../../components/Body';
import Layout from '../../../components/Layout';

export default function Outprocessing() {
  return (
    <div className="px-4 md:px-16">
      <p className="text-gray-700 text-3xl mb-4 font-bold">Outprocessing</p>

      <Body />
    </div>
  );
}

Outprocessing.getLayout = function (page) {
  return <Layout>{page}</Layout>;
};