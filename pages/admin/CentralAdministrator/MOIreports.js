import Body from '../../../components/Body';
import Layout from '../../../components/Layout';

export default function MOIreports() {
  return (
    <div className="px-4 md:px-16">
      <p className="text-gray-700 text-3xl mb-4 font-bold">MOI Report</p>
      <Body color="bg-gradient-to-b from-gray-100 to-red-100"  />
    </div>
  );
}

MOIreports.getLayout = function (page) {
  return <Layout>{page}</Layout>;
};
