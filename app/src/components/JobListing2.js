import Data from "../Data.json";
import Jobs from "./Jobs";
import { useState } from "react";
import Header from "./Header";
import Search from "./Search";

function JobListing2() {
  const [filterKeywords, setfilterKeywords] = useState([]);

//   const setSearchKeyword = (Data) => {
//     setfilterKeywords(Data);
//   };

  const addFilterKeywords = (Data) => {
    if (!filterKeywords.includes(Data)) {
      setfilterKeywords([...filterKeywords, Data]);
    }
  };

  const deleteKeyword = (Data) => {
    const newKeywords = filterKeywords.filter((key) => key !== Data);
    setfilterKeywords(newKeywords);
  };

  const clearAll = () => {
    setfilterKeywords([]);
  };

  return (
    <div>
      <div className="header"></div>

      {/* <Search setSearchKeyword={setSearchKeyword} /> */}

      {filterKeywords.length > 0 && (
        <Header
          keywords={filterKeywords}
          removeKeywords={deleteKeyword}
          clearAll={clearAll}
        />
      )}

      <Jobs
        keywords={filterKeywords}
        data={Data}
        setKeywords={addFilterKeywords}
      />
    </div>
  );
}

export default JobListing2;