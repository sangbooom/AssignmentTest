import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import {
  problemDataType,
  addProblem,
  swapSimilar,
} from "../../reducers/problem";
import {
  CardTitleUnitName,
  CardTitleProblemType,
  CardTitleInner,
  CardContentIndex,
  CardContentContainer,
  CardButtonInner,
  CardButton,
  CardTitleContainer,
  Card,
} from "./style";

interface SimilarListItemProps {
  similar: problemDataType;
  index: number;
}

const SimilarListItem: React.FC<SimilarListItemProps> = ({
  similar,
  index,
}) => {
  const dispatch = useDispatch();
  const targetIndex = index - 1;

  const onClickAddButton = useCallback(() => {
    dispatch(addProblem(targetIndex));
  }, [dispatch, targetIndex]);

  const onClickSwapButton = useCallback(() => {
    dispatch(swapSimilar(targetIndex));
  }, [dispatch, targetIndex]);

  return (
    <Card>
      <CardTitleContainer>
        <CardTitleInner>
          <CardTitleProblemType>{similar.problemType}</CardTitleProblemType>
          <CardTitleUnitName>{similar.unitName}</CardTitleUnitName>
        </CardTitleInner>
        <CardButtonInner>
          <CardButton onClick={onClickAddButton}>
            <p>추가</p>
          </CardButton>
          <CardButton onClick={onClickSwapButton}>
            <p>교체</p>
          </CardButton>
        </CardButtonInner>
      </CardTitleContainer>
      <CardContentContainer>
        <CardContentIndex>{index}</CardContentIndex>
        <img src={similar.problemURL} alt="문제" />
      </CardContentContainer>
    </Card>
  );
};

export default SimilarListItem;
