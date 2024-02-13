import { IAnswer } from "../util/globalInterface";
// import { useState } from "react";

interface Props {
  answerId: number;
  answers: IAnswer[];
}

export default function Answers({ answerId, answers }: Props) {
  //   const [picked, setPicked] = useState(false);

  const markAnswer = (answer: IAnswer): void => {
    console.log(answer);
    console.log("Wanted Id: ", answerId);
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
      <button type="submit">Submit</button>
    </>
  );
}
