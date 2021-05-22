import axios from "axios";
// 도메인이라면 Config.tsx 만들어서 엔드포인트도 넣어주기
export const getSimilarsData = () => axios.get("dummy/similars.json");
export const getProblemsData = () => axios.get("dummy/problems.json");
