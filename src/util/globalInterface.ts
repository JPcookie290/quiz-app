export interface IAnswer {
  answer: string;
  marked: boolean;
  id: number;
}
({ marked: false });

export interface IQuestion {
  question: string;
  id: string;
  answerId: number;
  answers: IAnswer[];
}
