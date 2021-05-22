import produce from "immer";

export type problemDataType = {
  id: number;
  unitCode: number;
  answerData: string;
  problemLevel: number;
  problemType: string;
  problemURL: string;
  unitName: string;
  needCheckLayout: number;
  source: number;
  hide: number;
  curriculumNumber: number;
  cebuCode: number;
  totalTimes: number;
  correctTimes: number;
  hwpExist: number;
  scorable: number;
  tagTop: null;
  bookDataId: number;
};

type problemState = {
  isButtonClicked: boolean;
  activeIndex: number;
  problemData: problemDataType[];
  similarData: problemDataType[];
};

export const initialState: problemState = {
  isButtonClicked: false,
  activeIndex: -1,
  problemData: [],
  similarData: [],
};

export const CHANGE_VALUE = "CHANGE_VALUE" as const;
export const ADD_PROBLEM = "ADD_PROBLEM" as const;
export const DELETE_PROBLEM = "DELETE_PROBLEM" as const;
export const SWAP_SIMILAR = "SWAP_SIMILAR" as const;

export const changeValue = (data: any) => ({
  type: CHANGE_VALUE,
  data,
});
export const addProblem = (data: number) => ({
  type: ADD_PROBLEM,
  data,
});
export const deleteProblem = (data: number) => ({
  type: DELETE_PROBLEM,
  data,
});
export const swapSimilar = (data: number) => ({
  type: SWAP_SIMILAR,
  data,
});

type problemAction =
  | ReturnType<typeof changeValue>
  | ReturnType<typeof addProblem>
  | ReturnType<typeof deleteProblem>
  | ReturnType<typeof swapSimilar>;

const reducer = (state = initialState, action: problemAction) => {
  return produce(state, (draft: any) => {
    switch (action.type) {
      case CHANGE_VALUE:
        draft[action.data.key] = action.data.value;
        break;
      case ADD_PROBLEM:
        draft.problemData.splice(
          draft.activeIndex + 1,
          0,
          draft.similarData[action.data]
        );
        draft.similarData.splice(action.data, 1);
        break;
      case DELETE_PROBLEM:
        draft.problemData.splice(action.data, 1);
        break;
      case SWAP_SIMILAR:
        draft.problemData.splice(
          draft.activeIndex + 1,
          0,
          draft.similarData[action.data]
        );
        // 교체 누른 문제를 학습지의 active문제의 아래에 추가
        draft.similarData.splice(action.data, 1);
        // 교체 누른 문제를 similarData에서 삭제
        draft.similarData.splice(
          action.data,
          0,
          draft.problemData[draft.activeIndex]
        );
        // 학습지의 active문제를 similarData에서 삭제한 index에 추가
        draft.problemData.splice(draft.activeIndex, 1);
        // 학습지의 active문제를 problemData에서 삭제
        break;
      default:
        return state;
    }
  });
};

export default reducer;
