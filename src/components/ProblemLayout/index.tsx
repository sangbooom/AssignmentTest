import { useEffect } from "react";
import ProblemList from "../ProblemList";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reducers";
import { changeValue } from "../../reducers/problem";
import axios from "axios";
import {
  Section,
  ProblemHeader,
  ProblemHeaderContainer,
  CardContainer,
} from "./style";

const ProblemLayout = () => {
  const dispatch = useDispatch();
  const { problemData } = useSelector(({ problem }: RootState) => problem);

  useEffect(() => {
    getProblemsData();
  }, []);

  const getProblemsData = async () => {
    try {
      const response = await axios.get("dummy/problems.json");
      dispatch(changeValue({ key: "problemData", value: response.data.data }));
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
        <ProblemList problems={problemData} />
      </CardContainer>
    </Section>
  );
};

export default ProblemLayout;
