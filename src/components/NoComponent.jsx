import { useState } from "react";
import gifNo from "../assets/vno.gif";
import Question from './Question'; // Adjust the path as needed

const NoComponent = () => {
    const [showQuestion, setShowQuestion] = useState(false);

    return showQuestion ? (
        <Question />
    ) : (
        <div>
            <h1>Why baby? I've been good this year...</h1>
            <img src={gifNo} alt="Valentine's gif" />
            <div>
                <button className="buttonNext" onClick={() => setShowQuestion(true)}>Okay ask me again</button>
            </div>
        </div>
    );
};

export default NoComponent;
