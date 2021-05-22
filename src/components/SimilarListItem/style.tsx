import styled from "@emotion/styled";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 8px;
`;

export const CardTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 53px;
  border-bottom: 1px solid #f5f5f5;
  background-color: #fff;
`;

export const CardTitleInner = styled.div`
  display: flex;
`;

export const CardButtonInner = styled.div`
  display: flex;
  margin-right: 15px;
`;

export const CardTitleProblemType = styled.p`
  width: 70px;
  padding-right: 18px;
  font-size: 14px;
  color: #9f9f9f;
  font-weight: 700;
  text-align: right;
  @media all and (min-width: 768px) {
    width: 100px;
  }
`;

export const CardTitleUnitName = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  width: calc(50vw - 100px - 199px);
  // calc(50vw - CardTitleProblemType의 width - (CardButtonInner의 width 168px + margin-right 15px + scroll-width 16px ) )
  font-size: 14px;
  color: #4c4c4c;
  white-space: nowrap;
`;

export const CardButton = styled.button`
  width: 80px;
  height: 36px;
  border: 1px solid #e0e0e0;
  border-radius: 2px;
  background: #fff;
  &:first-of-type {
    margin-right: 8px;
  }
  & > p {
    font-size: 14px;
    font-weight: 700;
    color: #00abff;
  }
`;

export const CardContentContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 18px 0 23px;
  background-color: #fff;
`;

export const CardContentIndex = styled.h3`
  padding: 0 12px 0 15px;
  font-size: 24px;
  color: #02c7f2;
  font-weight: 700;
  text-align: right;
  @media all and (min-width: 768px) {
    width: 100px;
    padding: 0 37px 0 15px;
  }
`;
