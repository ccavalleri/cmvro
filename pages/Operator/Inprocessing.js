import Body from '../../components/Body';
import Inputfield from '../../components/form/Inputfield';
import { useState } from 'react';

export default function Inprocessing() {
  /* const inputfield = () => {
    return (
      <div className="px-4 md:px-16 border">
        <label>Username</label>
        <input placeholder="test" type="text" />
      </div>
    );
  };
*/
  const [values, setValues] = useState({
    lastName: "",
    firstName: "",
    dodid: "",
    dob:"",
    nationality:"",
    service:"",
    command:"",
    installation:"",
    rank:"",
    rating:""
  });
  const inputs = [
    {
      id: 1,
      name: 'lastName',
      placeholder: 'Last Name',
      label: 'Last Name',
      type: 'text',
    },
    {
      id: 2,
      name: 'firstName',
      placeholder: 'First Name',
      label: 'First Name',
      type: 'text',
    },
    {
      id: 3,
      name: 'dodid',
      placeholder: 'DODID',
      label: 'DODID',
      type: 'text',
    },
    {
      id: 4,
      name: 'dob',
      placeholder: 'Date of Birth',
      label: 'Date of Birth',
      type: 'text',
    },
    {
      id: 5,
      name: 'nationality',
      placeholder: 'Nationality',
      label: 'Nationality',
      type: 'text',
    },
    {
      id: 6,
      name: 'service',
      placeholder: 'Service',
      label: 'Service',
      type: 'text',
    },
    {
      id: 7,
      name: 'command',
      placeholder: 'Command',
      label: 'Command',
      type: 'text',
    },
    {
      id: 8,
      name: 'installation',
      placeholder: 'Installation',
      label: 'Installation',
      type: 'text',
    },
    {
      id: 9,
      name: 'rank',
      placeholder: 'Rank',
      label: 'Rank',
      type: 'text',
    },
    {
      id: 10,
      name: 'rating',
      placeholder: 'Rating',
      label: 'Rating',
      type: 'text',
    },
  ];

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="px-4 md:px-16">
      <p className="text-gray-700 text-3xl mb-4 font-bold">In processing</p>
      <form>
        <Body
          content={
            <>
              <div className="flex grid grid-cols-2 gap-2 mt-2 h-fit">
                {inputs.map((input) => (
                  <Inputfield
                    key={input.id}
                    {...input}
                    value={values[input.name]}
                    onChange={onChange}
                  />
                ))}
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
