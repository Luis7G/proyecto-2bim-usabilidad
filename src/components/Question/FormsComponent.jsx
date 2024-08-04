import React, { useState } from 'react';

function FormsComponent(props) {
  const { question, handleAnswer, handleNextQuestion } = props;
  const [answer, setAnswer] = useState('');

  const handleChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAnswer(answer);
    handleNextQuestion();
    setAnswer('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="answer">{question}</label>
      <input
        type="text"
        id="answer"
        value={answer}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
export default FormsComponent;