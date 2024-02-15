import { useState } from 'react';
import YesComponent from './YesComponent'; // Adjust the path as needed
import NoComponent from './NoComponent';   // Adjust the path as needed
import gif1 from "../assets/valentines.gif";

function Question() {
    const [response, setResponse] = useState('');

    const handleButtonYes = () => {
        setResponse('yes');
    };

    const handleButtonNo = () => {
        setResponse('no');
    };

    return (
        <>
            {response === '' && (
                <div>
                    <h1>Will you be my valentine?</h1>
                    <img src={gif1} alt="Valentine's gif" />
                    <div>
                        <button onClick={handleButtonYes} className='buttonNext btny'>Yes</button>
                        <button onClick={handleButtonNo} className='buttonNext'>No</button>
                    </div>
                </div>
            )}
            {response === 'yes' && <YesComponent />}
            {response === 'no' && <NoComponent />}
        </>
    );
}

export default Question;


  