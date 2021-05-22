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
export const swapSimilar = () => ({
  type: SWAP_SIMILAR,
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
        draft.problemData = draft.problemData.filter(
          (_: null, index: number) => action.data !== index
        );
        break;
      case SWAP_SIMILAR:
        break;
      default:
        return state;
    }
  });
};

export default reducer;
