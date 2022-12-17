import logo from "./logo.svg";
import "./App.css";
import data from "./data";
import SingleQuestion from "./Question";
import { useState } from "react";
function App() {
  const [questions, setQuestions] = useState(data);
  console.log(questions);
  return (
    <main>
      <div className="container">
        <h3>Question and answer about login</h3>
        <section className="info">
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question}/>
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
