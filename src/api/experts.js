import { apiGet } from "./client";

export const getExperts = () => apiGet("/data");
export const getExpertById = (id) => apiGet(`/data/${id}`);
