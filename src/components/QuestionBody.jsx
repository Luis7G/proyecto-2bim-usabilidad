import React from 'react';
import { Link } from 'react-router-dom';
import MultimediaComponent from './Question/MultimediaComponent';
import FormsComponent from './Question/FormsComponent';
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
        <FormsComponent/>
      </div>
    </body>
  );
}

export default QuestionBody;