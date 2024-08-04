import React from 'react';
import { Link } from 'react-router-dom';
import MultimediaComponent from './Question/MultimediaComponent';

function QuestionBody() {
    const question = {
        title: "¿Cuál es el nombre de este animal?",
        image: "https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg"
    }
  return (
    <body>
      <div>
        <MultimediaComponent question={question}/>
      </div>
      <div>

      </div>
    </body>
  );
}

export default QuestionBody;