import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from "./axios";

function SearchResult() {
  const params = useParams();
  const [result, setResult] = useState({});

  useEffect(() => {
    const query = params.query;
    axiosInstance
      .get(`/posts/search/?search=${query}`)
      .then(console.log)
      .catch(console.error);
  }, []);

  return (
    <div>
      <h1>Hi</h1>
    </div>
  );
}

export default SearchResult;
