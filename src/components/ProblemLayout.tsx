/* eslint-disable react/jsx-pascal-case */
/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import axios from "axios";
const Section = styled.section`
  width: calc(50% - 3px);
`;
const ProblemHeaderContainer = styled.div`
  width: 100%;
  height: 48px;
  background-color: #fff;
  margin-bottom: 3px;
`;

const CardContainer = styled.div`
  width: 100%;
  height: calc((100vh - 48px) - 3px);
  overflow-y: auto;
`;

const ProblemHeader = styled.h3`
  font-size: 14px;
  line-height: 20px;
  color: #4c4c4c;
  padding: 13px 0 14px 24px;
`;

const ProblemLayout = () => {
  const [problemData, setProblemData] = useState([]);

  useEffect(() => {
    getProblemsData();
  }, []);

  const getProblemsData = async () => {
    try {
      const response = await axios.get("dummy/problems.json");
      setProblemData(response.data.data);
      console.log(response);
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <Section>
      <ProblemHeaderContainer>
        <ProblemHeader>학습지 상세 편집</ProblemHeader>
      </ProblemHeaderContainer>
      <CardContainer>
        {/* <ProblemList problems={problemData} /> */}
      </CardContainer>
    </Section>
  );
};

export default ProblemLayout;
