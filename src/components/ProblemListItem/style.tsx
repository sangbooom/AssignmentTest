import styled from "@emotion/styled";

export const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
`;

export const CardTitleContainer = styled.div`
  width: 100%;
  height: 53px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-bottom: 1px solid #f5f5f5;
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
  text-align: right;
  padding-right: 18px;
  font-size: 14px;
  line-height: 14px;
  font-weight: 700;
  color: #9f9f9f;
  @media all and (min-width: 768px) {
    width: 100px;
  }
`;

export const CardTitleUnitName = styled.p`
  width: calc(50vw - 100px - 199px);
  // calc(50vw - CardTitleProblemType의 width - (CardButtonInner의 width 168px + margin-right 15px + scroll-width 16px ) )
  font-size: 14px;
  line-height: 14px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #4c4c4c;
`;

export const CardButton = styled.button<{ active?: boolean }>`
  width: 80px;
  height: 36px;
  border: ${(props) =>
    props.active ? "1px solid #00abff" : "1px solid #e0e0e0"};
  border-radius: 2px;
  background: ${(props) => (props.active ? "#00abff" : "#fff")};
  &:first-of-type {
    margin-right: 8px;
  }
  & > p {
    font-size: 14px;
    font-weight: 700;
    color: ${(props) => (props.active ? "#fff" : "#00abff")};
  }
`;

export const CardContentContainer = styled.div`
  width: 100%;
  background-color: #fff;
  display: flex;
  padding: 18px 0 23px;
`;

export const CardContentIndex = styled.h3`
  padding: 0 12px 0 15px;
  text-align: right;
  font-size: 24px;
  font-weight: 700;
  color: #02c7f2;
  @media all and (min-width: 768px) {
    width: 100px;
    padding: 0 37px 0 15px;
  }
`;
