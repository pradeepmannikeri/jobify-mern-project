import React from "react";
import { StatsContainer, ChartsContainer } from "../components";
import customFetch from "../utils/customFetch";
import { useLoaderData } from "react-router-dom";

export const statsLoader = async () => {
  try {
    const response = await customFetch.get("/jobs/stats");
    return response.data;
  } catch (error) {
    return error;
  }
};

const Stats = () => {
  const { defaultStatus, monthlyApplication } = useLoaderData();
  return (
    <>
      <StatsContainer defaultStatus={defaultStatus} />
      {monthlyApplication?.length > 1 && (
        <ChartsContainer data={monthlyApplication} />
      )}
    </>
  );
};

export default Stats;
