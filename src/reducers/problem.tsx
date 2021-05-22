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
  targetIndex: number;
  problemData: problemDataType[];
  similarData: problemDataType[];
};

export const initialState: problemState = {
  isButtonClicked: false,
  targetIndex: -1,
  problemData: [],
  similarData: [],
};

export const CHANGE_VALUE = "CHANGE_VALUE" as const;

export const changeValue = (data: any) => ({
  type: CHANGE_VALUE,
  data,
});

type problemAction = ReturnType<typeof changeValue>;

const reducer = (state = initialState, action: problemAction) => {
  return produce(state, (draft: any) => {
    switch (action.type) {
      case CHANGE_VALUE:
        draft[action.data.key] = action.data.value;
        break;
      default:
        return state;
    }
  });
};

export default reducer;
