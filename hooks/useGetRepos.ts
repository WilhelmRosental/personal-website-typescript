import { useEffect, useState } from "react";

const API_URL = "https://api.github.com/users/WilhelmRosental/repos";

export const useGetRepos = () => {
  // create state variables
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

useEffect(() => {
    fetch(API_URL, {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    })
      .then((response) => response.json()) //Converting the response to a JSON object
      .then((data) => {
        // error handling for nonexistent data
        if (data.cod >= 400) {
          setData(data.message);
        }
        setData(data);
      })
      .catch((error) => {setError(error)});
  }, []);

  return { data, error };
};

export default useGetRepos;