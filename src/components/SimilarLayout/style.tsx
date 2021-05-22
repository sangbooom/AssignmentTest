import styled from "@emotion/styled";

export const Section = styled.section`
  width: calc(50% - 3px);
`;
export const SimilarHeaderContainer = styled.section`
  width: 100%;
  height: 48px;
  background-color: #fff;
  margin-bottom: 3px;
`;

export const CardContainer = styled.div`
  width: 100%;
  height: calc(100vh - 48px - 3px);
  overflow-y: auto;
`;

export const SimilarHeader = styled.h3`
  text-align: center;
  line-height: 20px;
  font-size: 14px;
  padding: 14px 0 13px;
  color: #4c4c4c;
`;

export const SimilarListHeader = styled.p`
  height: 36px;
  padding: 8px 0 8px 25px;
  color: #4c4c4c;
  background-color: #fafafa;
  line-height: 20px;
`;

export const ExplainContainer = styled.div`
  width: 100%;
  height: calc(100vh - 48px - 3px);
  overflow-y: auto;
`;

export const Explain = styled.div`
  background: #fff;
  height: calc(100vh - 48px - 3px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ExplainText = styled.p`
  text-align: center;
  line-height: 28px;
  font-size: 14px;
`;

export const ExplainTextButton = styled.span`
  font-size: 12px;
  font-weight: 700;
  padding: 5px 12.5px;
  color: #00abff;
  border: 1px solid #e0e0e0;
  border-radius: 2px;
`;
