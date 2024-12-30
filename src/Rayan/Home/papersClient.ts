import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const PAPERS_API = `${REMOTE_SERVER}/api/papers`;


export const fetchAllPapers = async () => {
  const { data } = await axios.get(PAPERS_API);
  return data;
 };
 
 export const createPaper = async (paper: any) => {

  const { data } = await axiosWithCredentials.post(`${PAPERS_API}`, paper);
  return data;
};

export const deletePaper = async (id: string) => {
  const { data } = await axiosWithCredentials.delete(`${PAPERS_API}/${id}`);
  return data;};

export const updatePaper = async (paper: any) => {
  const { data } = await axiosWithCredentials.put(`${PAPERS_API}/${paper._id}`, paper);
  return data;
};





