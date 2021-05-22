import React from "react";
import ProblemListItem from "./ProblemListItem";

export type problemDataType = {
  id: number;
  unitCode: number;
  answerData: string;
  problemLevel: number;
  problemType: string;
  problemURL: string;
  unitName: string;
  needCheckLayout: number;
  source: number;
  hide: number;
  curriculumNumber: number;
  cebuCode: number;
  totalTimes: number;
  correctTimes: number;
  hwpExist: number;
  scorable: number;
  tagTop: null;
  bookDataId: number;
};

interface ProblemListProps {
  problems: problemDataType[];
}

const ProblemList: React.FC<ProblemListProps> = ({ problems }) => {
  return (
    <React.Fragment>
      {problems.map((problem, index) => (
        <ProblemListItem problem={problem} key={index} index={index + 1} />
      ))}
    </React.Fragment>
  );
};

export default ProblemList;
