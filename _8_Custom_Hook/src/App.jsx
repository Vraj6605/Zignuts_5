import React, { useEffect, useState } from "react";
import Spice from "./Comp/Spice";
import { DNA } from 'react-loader-spinner'
function App() {
  function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(
      () => {
        async function fetchData() {
          // const response = await fetch(url);
          setTimeout(async () => {
            const response = await fetch(url);
            const result = await response.json();
            setData(result);
            setLoading(false);
          }, 3000);
        }
        fetchData();
      },
      { url }
    );

    return { data, loading };
  }

  const { data, loading } = useFetch("https://api.github.com/users/vraj6605");

  if (loading)
    return (
      <div className="flex justify-center items-center my-[200px]">
        <DNA
        visible={true}
        height="200px"
        width="200px"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
      </div>
    );
  return (
    <>
      <div className="flex gap-2 items-center justify-center">
        <img
          className="w-[70px] h-[70px] rounded-[50%] inline-block"
          src={data.avatar_url}
        />
        <h1 className="text-white text-4xl">{data.login}</h1>
      </div>
      <Spice />
    </>
  );

  // return (
  //   <div>
  //     <Spice/>
  //   </div>
  // )
}

export default App;
