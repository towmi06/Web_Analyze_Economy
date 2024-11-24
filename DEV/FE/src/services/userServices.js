import { post } from "../util/request";

export const login = async (options) => {
  const result = await post("user/login", options);
  return result;
}
export const register = async (options) => {
  const result = await post("user/register", options);
  return result;
};
export const changePass = async (options) => {
  const result = await post("user/change", options);
  return result;
}





