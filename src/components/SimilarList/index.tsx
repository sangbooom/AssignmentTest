import React from "react";
import SimilarListItem from "../SimilarListItem";
import {problemDataType} from '../../reducers/problem';

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
