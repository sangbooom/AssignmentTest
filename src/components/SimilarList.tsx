import React from "react";
import SimilarListItem from "./SimilarListItem";

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

interface SimilarListProps {
  similars: problemDataType[];
}

const SimilarList: React.FC<SimilarListProps> = ({ similars }) => {
  return (
    <React.Fragment>
      {similars.map((similar, index) => (
        <SimilarListItem similar={similar} key={index} index={index + 1} />
      ))}
    </React.Fragment>
  );
};

export default SimilarList;
