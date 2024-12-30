import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const PROJECTS_API = `${REMOTE_SERVER}/api/projects`;


export const fetchAllProjects = async () => {
  const { data } = await axios.get(PROJECTS_API);
  return data;
 };
 
 export const createProject = async (project: any) => {

  const { data } = await axiosWithCredentials.post(`${PROJECTS_API}`, project);
  return data;
};

export const deleteProject = async (id: string) => {
  const { data } = await axiosWithCredentials.delete(`${PROJECTS_API}/${id}`);
  return data;};

export const updateProject = async (project: any) => {
  const { data } = await axiosWithCredentials.put(`${PROJECTS_API}/${project._id}`, project);
  return data;
};





