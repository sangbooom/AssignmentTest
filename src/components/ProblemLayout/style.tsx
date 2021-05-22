import styled from "@emotion/styled";

export const Section = styled.section`
  width: calc(50% - 3px);
`;
export const ProblemHeaderContainer = styled.div`
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

export const ProblemHeader = styled.h3`
  padding: 13px 0 14px 24px;
  font-size: 14px;
  line-height: 20px;
  color: #4c4c4c;
`;
