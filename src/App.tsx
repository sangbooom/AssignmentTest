import React from "react";
import styled from "@emotion/styled";
import ProblemLayout from "./components/ProblemLayout";
import SimilarLayout from "./components/SimilarLayout";

const Wrapper = styled.main`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
  & > :first-of-type {
    border-right: 2px solid #e0e0e0;
  }
`;

const App: React.FC = () => {
  return (
    <Wrapper>
      <ProblemLayout />
      <SimilarLayout />
    </Wrapper>
  );
};

export default App;
