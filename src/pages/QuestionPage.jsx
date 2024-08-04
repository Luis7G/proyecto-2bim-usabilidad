import Header from "../components/Header";
import QuestionBody from "../components/QuestionBody";
import QuestionFooter from "../components/QuestionFooter";
import background from "../assets/images/g-home.png";
function QuestionPage() {
  return (
    <div className="relative flex flex-col min-h-screen">
        <div className="absolute inset-0 bg-cover bg-center opacity-90 z-0"
        style={{ backgroundImage: `url(${background})` }}
        />
        <div className="relative z-10 flex flex-col min-h-screen">
    <Header name="Cienias Naturales"/>
    
    <QuestionBody />
    <QuestionFooter />
    </div>
    </div>
  );
}
export default QuestionPage;