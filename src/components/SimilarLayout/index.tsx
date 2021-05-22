import { useEffect } from "react";
import SimilarList from "../SimilarList";
import { RootState } from "../../reducers";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeValue } from "../../reducers/problem";
import {
  Section,
  SimilarHeader,
  SimilarHeaderContainer,
  SimilarListHeader,
  Explain,
  ExplainContainer,
  ExplainText,
  ExplainTextButton,
  CardContainer,
} from "./style";
import * as problemsAPI from '../../lib/api';

const SimilarLayout = () => {
  const dispatch = useDispatch();
  const { isButtonClicked, activeIndex, problemData, similarData } =
    useSelector(({ problem }: RootState) => problem);

  useEffect(() => {
    getSimilarsData();
  }, []);

  const getSimilarsData = async () => {
    try {
      const response = await problemsAPI.getSimilarsData();
      dispatch(changeValue({ key: "similarData", value: response.data.data }));
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
              <ExplainTextButton>유사문항</ExplainTextButton> 버튼을 누르면
              <br />
              해당 문제의 유사 문항을 볼 수 있습니다.
            </ExplainText>
          </Explain>
        </ExplainContainer>
      ) : (
        <CardContainer>
          <SimilarListHeader>
            {problemData[activeIndex]?.unitName}
          </SimilarListHeader>
          <SimilarList similars={similarData} />
        </CardContainer>
      )}
    </Section>
  );
};

export default SimilarLayout;
