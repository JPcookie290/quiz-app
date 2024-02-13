import { useState, useEffect } from "react";
import { IQuestion } from "../util/globalInterface";
import Answers from "./Answers";

export default function Questions() {
  const [questions, setQuestions] = useState<IQuestion[]>([]);
  const [err, setErr] = useState<Error | null>(null);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    (async () => {
      try {
        const data = await fetch(`/questions`, options);
        setQuestions((await data.json()) as IQuestion[]);
      } catch (error) {
        setErr(error as Error);
      }
    })();
  }, [setQuestions]);

  if (err) {
    return <p>err</p>;
  } else {
    return (
      <>
        <button>Edit Questions</button>
        {questions.map((question) => {
          return (
            <div key={question.id}>
              <h2>{question.question}</h2>
              <Answers
                answerId={question.answerId}
                answerArray={question.answers}
              ></Answers>
            </div>
          );
        })}
      </>
    );
  }
}
