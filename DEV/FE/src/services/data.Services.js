import { patch } from "../util/request";

export const updateData = async (id, options) => {
  const result = await patch(`data/update/${id}`, options);
  return result;
}