import styled from "@emotion/styled";

export const Section = styled.section`
  width: calc(50% - 3px);
`;
export const SimilarHeaderContainer = styled.section`
  width: 100%;
  height: 48px;
  margin-bottom: 3px;
  background-color: #fff;
`;

export const CardContainer = styled.div`
  overflow-y: auto;
  width: 100%;
  height: calc(100vh - 48px - 3px);
`;

export const SimilarHeader = styled.h3`
  padding: 14px 0 13px;
  font-size: 14px;
  color: #4c4c4c;
  line-height: 20px;
  text-align: center;
`;

export const SimilarListHeader = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  height: 36px;
  padding: 8px 0 8px 25px;
  background-color: #fafafa;
  font-size: 14px;
  color: #4c4c4c;
  line-height: 20px;
  white-space: nowrap;
`;

export const ExplainContainer = styled.div`
  overflow-y: auto;
  width: 100%;
  height: calc(100vh - 48px - 3px);
`;

export const Explain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 48px - 3px);
  background: #fff;
`;

export const ExplainText = styled.p`
  font-size: 14px;
  color: #9f9f9f;
  line-height: 28px;
  text-align: center;
`;

export const ExplainTextButton = styled.span`
  padding: 5px 12.5px;
  border: 1px solid #e0e0e0;
  border-radius: 2px;
  font-size: 12px;
  color: #00abff;
  font-weight: 700;
`;
