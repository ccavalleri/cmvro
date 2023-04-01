import Body from '../../../components/Body';
import Inputfield from '../../../components/form/Inputfield';
import { useState } from 'react';

export default function Inprocessing() {
  /* const inputfield = () => {
    return (
      <div className="px-4 md:px-16 border">
      errorMessage:"",  
      maxlength: 25,<
      maxlength: 25,label>Username</
      label>
        <input placeholder="test" type="text" />
      </div>
    );
  };
*/
  const [values, setValues] = useState({
    lastName: '',
    firstName: '',
    dodid: '',
    dob: '',
    nationality: '',
    service: '',
    command: '',
    installation: '',
    rank: '',
    rating: '',
    formError: 0,
  });
  const inputs = [
    {
      id: 1,
      name: 'lastName',
      placeholder: 'Last Name',
      errorMessage: '',
      maxlength: 25,
      label: 'Last Name',
      type: 'text',
      required: true,
    },
    {
      id: 2,
      name: 'firstName',
      placeholder: 'First Name',
      errorMessage: '',
      maxlength: 25,
      label: 'First Name',
      type: 'text',
      required: true,
    },
    {
      id: 3,
      name: 'dodid',
      placeholder: 'DODID',
      errorMessage: 'It should be 10 digits',
      maxlength: 10,
      required: true,
      pattern: '[0-9]{10}',
      label: 'DODID',
      type: 'text',
    },
    {
      id: 4,
      name: 'dob',
      placeholder: 'Birthday',
      errorMessage: '',
      maxlength: 25,
      label: 'Birthday',
      type: 'date',
      required: true,
    },
    {
      id: 5,
      name: 'nationality',
      placeholder: 'Nationality',
      errorMessage: '',
      maxlength: 25,
      label: 'Nationality',
      type: 'text',
      required: true,
    },
    {
      id: 6,
      name: 'service',
      placeholder: 'Service',
      errorMessage: '',
      maxlength: 25,
      label: 'Service',
      type: 'text',
      required: true,
    },
    {
      id: 7,
      name: 'command',
      placeholder: 'Command',
      errorMessage: '',
      maxlength: 25,
      label: 'Command',
      type: 'text',
      required: true,
    },
    {
      id: 8,
      name: 'installation',
      placeholder: 'Installation',
      errorMessage: '',
      maxlength: 25,
      label: 'Installation',
      type: 'text',
      required: true,
    },
    {
      id: 9,
      name: 'rank',
      placeholder: 'Rank',
      errorMessage: '',
      maxlength: 25,
      label: 'Rank',
      type: 'text',
      required: true,
    },
    {
      id: 10,
      name: 'rating',
      placeholder: 'Rating',
      errorMessage: '',
      maxlength: 25,
      label: 'Rating',
      type: 'text',
      required: true,
    },
  ];

  const onChange = (e) => {
    setValues({ ...values, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {};

  {
    /*const onBlur = (e) => {
    console.log('>>> onBlur function....');

    if (e.target.validity.patternMismatch) {
      inputs[2].showError = 1;
      // inputs[parseInt(e.target.id) - 1].errorMessage = true;
      console.log(inputs);
      setValues({ ...values, formError: 1 });
    } else setValues({ ...values, formError: 0 });
  };
*/
  }

  console.log(values);
  return (
    <div className="px-4 md:px-16">
      <p className="text-gray-700 text-3xl mb-4 font-bold">In processing</p>
      <form onSubmit={handleSubmit}>
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
