import React, { useCallback } from "react";
import { problemDataType } from "../../reducers/problem";
import { changeValue, deleteProblem } from "../../reducers/problem";
import { RootState } from "../../reducers";
import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  CardTitleContainer,
  CardButton,
  CardButtonInner,
  CardContentContainer,
  CardContentIndex,
  CardTitleInner,
  CardTitleProblemType,
  CardTitleUnitName,
} from "./style";

interface ProblemListItemProps {
  problem: problemDataType;
  index: number;
}

const ProblemListItem: React.FC<ProblemListItemProps> = ({
  problem,
  index,
}) => {
  const { activeIndex } = useSelector(({ problem }: RootState) => problem);
  const targetIndex = index - 1;

  const dispatch = useDispatch();

  const onClickSimilarCardButton = useCallback(() => {
    dispatch(changeValue({ key: "isButtonClicked", value: true }));
    dispatch(changeValue({ key: "activeIndex", value: targetIndex }));
  }, [dispatch, targetIndex]);

  const onClickDeleteButton = useCallback(() => {
    dispatch(deleteProblem(targetIndex));
    if (activeIndex === targetIndex) {
      dispatch(changeValue({ key: "isButtonClicked", value: false }));
      dispatch(changeValue({ key: "activeIndex", value: -1 }));
    } else if (activeIndex > targetIndex) {
      dispatch(changeValue({ key: "activeIndex", value: activeIndex - 1 }));
    }
  }, [dispatch, activeIndex, targetIndex]);

  return (
    <Card>
      <CardTitleContainer>
        <CardTitleInner>
          <CardTitleProblemType>{problem.problemType}</CardTitleProblemType>
          <CardTitleUnitName>{problem.unitName}</CardTitleUnitName>
        </CardTitleInner>
        <CardButtonInner>
          <CardButton
            onClick={onClickSimilarCardButton}
            active={activeIndex === targetIndex}
          >
            <p>유사문항</p>
          </CardButton>
          <CardButton onClick={onClickDeleteButton}>
            <p>삭제</p>
          </CardButton>
        </CardButtonInner>
      </CardTitleContainer>
      <CardContentContainer>
        <CardContentIndex>{index}</CardContentIndex>
        <img src={problem.problemURL} alt="문제" />
      </CardContentContainer>
    </Card>
  );
};

export default ProblemListItem;
