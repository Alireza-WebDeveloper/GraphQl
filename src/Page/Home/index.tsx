import { useState, useEffect } from "react";
import { getJobs } from "../../https/Home";
const Page = () => {
  const [job, setJob] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    getJobs()
      .then((response: any) => {
        setJob(response);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);
  return (
    <div className="bg-purple-500">
      {error ? "err" : job ? "data recvied" : ""}
    </div>
  );
};

export default Page;
