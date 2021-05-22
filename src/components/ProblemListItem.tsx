/* eslint-disable react/jsx-pascal-case */
/** @jsxImportSource @emotion/react */
import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { problemDataType} from './ProblemList';

interface ProblemListItemProps {
  problem: problemDataType;
  index: number;
}

const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
`;

const CardTitleContainer = styled.div`
  width: 100%;
  height: 53px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-bottom: 1px solid #f5f5f5;
`;

const CardTitleInner = styled.div`
  display: flex;
`;

const CardButtonInner = styled.div`
  display: flex;
  margin-right: 15px;
`;

const CardTitleProblemType = styled.p`
  width: 100px;
  text-align: right;
  padding-right: 18px;
  font-size: 14px;
  font-weight: 700;
  color: #9f9f9f;
`;

const CardTitleUnitName = styled.p`
  width: calc(
    50vw - 100px - 199px
  ); // calc(50vw - CardTitleProblemType의 width - (CardButtonInner의 width 168px + margin-right 15px + scroll-width 16px ) )
  font-size: 14px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #4c4c4c;
`;

const CardButton = styled.button`
  width: 80px;
  height: 36px;
  border: 1px solid #e0e0e0;
  border-radius: 2px;
  background: #fff;
  &:first-of-type {
    margin-right: 8px;
  }
`;

const CardButtonText = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: #00abff;
`;

const CardContentContainer = styled.div`
  width: 100%;
  background-color: #fff;
  display: flex;
  padding: 18px 0 23px;
`;

const CardContentIndex = styled.h3`
  width: 100px;
  padding-right: 37px;
  text-align: right;
  font-size: 24px;
  font-weight: 700;
  color: #02c7f2;
`;

const ProblemListItem: React.FC<ProblemListItemProps> = ({
  problem,
  index,
}) => {
  return (
    <Card>
      <CardTitleContainer>
        <CardTitleInner>
          <CardTitleProblemType>{problem.problemType}</CardTitleProblemType>
          <CardTitleUnitName>{problem.unitName}</CardTitleUnitName>
        </CardTitleInner>
        <CardButtonInner>
          <CardButton>
            <CardButtonText>유사문항</CardButtonText>
          </CardButton>
          <CardButton>
            <CardButtonText>삭제</CardButtonText>
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
