import { IAnswer } from "../util/globalInterface";
import { useState } from "react";

interface Props {
  answerId: number;
  answerArray: IAnswer[];
}

export default function Answers({ answerId, answerArray }: Props) {
  // const [right, setRight] = useState(0);
  // const [wrong, setWrong] = useState(0);

  //   const [picked, setPicked] = useState(false);
  const [answers, setAnswers] = useState<IAnswer[]>([...answerArray]);

  const markAnswer = (choice: IAnswer): void => {
    answers.map((answer) => {
      if (choice.id === answer.id) {
        answer.marked = true;
      } else {
        answer.marked = false;
      }
    });
  };

  const checkAnswer = () => {
    answers.map((answer: IAnswer) => {
      if (answer.marked === true && answer.id === answerId) {
        console.log("right answer: ", answer);
      }
    });
  };

  return (
    <>
      {answers.map((answer) => {
        return (
          <div key={answer.id} onClick={() => markAnswer(answer)}>
            <p>{answer.answer}</p>
          </div>
        );
      })}
      <button onClick={checkAnswer}>Submit</button>
    </>
  );
}
