import React from "react";
import ProblemListItem from "../ProblemListItem";
import { problemDataType } from "../../reducers/problem";

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
