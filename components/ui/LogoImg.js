import Layout from '../Layout';

export default function LogoImg() {
  return (
    <div className="grid grid-cols-1">
      <img src="logo3.png"/>
    </div>
  );
}

LogoImg.getLayout = function (page) {
  return <Layout>{page}</Layout>;
};