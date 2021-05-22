import axios from "axios";

export const getSimilarsData = () => axios.get("dummy/similars.json");
export const getProblemsData = () => axios.get("dummy/problems.json");
