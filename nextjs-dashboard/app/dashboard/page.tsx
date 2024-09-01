import React from "react";
import { fetchRevenue } from "../api/dashboard";

const Dashboard = async () => {
  const posts = await fetchRevenue();

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};

export default Dashboard;
