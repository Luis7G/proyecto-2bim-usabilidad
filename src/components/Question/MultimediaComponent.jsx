
function MultimediaComponent({ question }) {
    return (
    <div>
      <h1>{question.title}</h1>
      <img src={question.image} alt={question.title} />
    </div>
  );
}

export default MultimediaComponent;