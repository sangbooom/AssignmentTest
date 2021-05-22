import React, { useEffect } from "react";
import styled from "@emotion/styled";
import SimilarList from "./SimilarList";
import { RootState } from "../reducers";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeValue } from "../reducers/problem";
import axios from "axios";

const Section = styled.section`
  width: calc(50% - 3px);
`;
const SimilarHeaderContainer = styled.section`
  width: 100%;
  height: 48px;
  background-color: #fff;
  margin-bottom: 3px;
`;

const CardContainer = styled.div`
  width: 100%;
  height: calc(100vh - 48px - 3px);
  overflow-y: auto;
`;

const SimilarHeader = styled.h3`
  text-align: center;
  line-height: 20px;
  font-size: 14px;
  padding: 14px 0 13px;
  color: #4c4c4c;
`;

const SimilarListHeader = styled.p`
  height: 36px;
  padding: 8px 0 8px 25px;
  color: #4c4c4c;
  background-color: #fafafa;
  line-height: 20px;
`;

const ExplainContainer = styled.div`
  width: 100%;
  height: calc(100vh - 48px - 3px);
  overflow-y: auto;
`;

const Explain = styled.div`
  background: #fff;
  height: calc(100vh - 48px - 3px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ExplainText = styled.p`
  text-align: center;
  line-height: 28px;
  font-size: 14px;
`;

const ExplainTextButton = styled.span`
  font-size: 12px;
  font-weight: 700;
  padding: 5px 12.5px;
  color: #00abff;
  border: 1px solid #e0e0e0;
  border-radius: 2px;
`;

const SimilarLayout = () => {
  const dispatch = useDispatch();
  const { isButtonClicked, targetIndex, problemData, similarData } =
    useSelector(({ problem }: RootState) => problem);

  useEffect(() => {
    getSimilarsData();
  }, []);

  const getSimilarsData = async () => {
    try {
      const response = await axios.get("dummy/similars.json");
      dispatch(changeValue({ key: "similarData", value: response.data.data }));
      console.log(response);
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <Section>
      <SimilarHeaderContainer>
        <SimilarHeader>문항 교체/추가</SimilarHeader>
      </SimilarHeaderContainer>
      {!isButtonClicked ? (
        <ExplainContainer>
          <Explain>
            <ExplainText>
              <ExplainTextButton>유사문항</ExplainTextButton> 버튼을 누르면{" "}
              <br />
              해당 문제의 유사 문항을 볼 수 있습니다.
            </ExplainText>
          </Explain>
        </ExplainContainer>
      ) : (
        <CardContainer>
          <SimilarListHeader>
            {problemData[targetIndex].unitName}
          </SimilarListHeader>
          <SimilarList similars={similarData} />
        </CardContainer>
      )}
    </Section>
  );
};

export default SimilarLayout;
