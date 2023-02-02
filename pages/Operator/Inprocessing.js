import Body from '../../components/Body';
import Inputfield from '../../components/form/Inputfield';

export default function Inprocessing() {
  {
    /* const inputfield = () => {
    return (
      <div className="px-4 md:px-16 border">
        <label>Username</label>
        <input placeholder="test" type="text" />
      </div>
    );
  };
*/
  }

  return (
    <div className="px-4 md:px-16">
      <p className="text-gray-700 text-3xl mb-4 font-bold">In processing</p>
      <form>
        <Body
          content={
            <>
              <div className="flex grid grid-cols-2 gap-2 mt-2 h-fit">
                <Inputfield placeholder="Last Name" />
                <Inputfield placeholder="First Name" />
                <Inputfield placeholder="DODID" />
                <Inputfield placeholder="Date of Birth" />
                <Inputfield placeholder="Nationality" />
                <Inputfield placeholder="Service" />
                <Inputfield placeholder="Command" />
                <Inputfield placeholder="Installation" />
                <Inputfield placeholder="Rank" />
                <Inputfield placeholder="Rating" />
              </div>
              <button className="md:px-16 px-4 mt-4 ml-2 mb-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                SAVE
              </button>
            </>
          }
        />
      </form>
    </div>
  );
}
