/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import ProblemList from "../ProblemList";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reducers";
import { changeValue } from "../../reducers/problem";
import {
  Section,
  ProblemHeader,
  ProblemHeaderContainer,
  CardContainer,
} from "./style";
import * as problemsAPI from "../../lib/api";

const ProblemLayout = () => {
  const dispatch = useDispatch();
  const { problemData } = useSelector(({ problem }: RootState) => problem);

  useEffect(() => {
    getProblemsData();
  }, []);

  const getProblemsData = async () => {
    try {
      const response = await problemsAPI.getProblemsData();
      dispatch(changeValue({ key: "problemData", value: response.data.data }));
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
        <ProblemList problems={problemData} />
      </CardContainer>
    </Section>
  );
};

export default ProblemLayout;
