import React, {useState} from "react";
import cloneDeep from "lodash/cloneDeep";
import throttle from "lodash/throttle";
import Pagination from "rc-pagination";
import '../Content.css';
import "rc-pagination/assets/index.css";
import { JobData } from "./output";
import { useParams, useNavigate } from 'react-router-dom';
const tableHead = {
  positionName: "Position",
  salary: "Salary",
  company: "Company",
  location: "Location",
  postedAt: "Posted",
};

const Table = () => {
  const { query } = useParams();
  const countPerPage = 10;
  const navigate = useNavigate();
  const [value, setValue] = React.useState(query);
  const [searchVal, setSearchVal] = React.useState(query);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [collection, setCollection] = React.useState(
    cloneDeep(JobData.slice(0, countPerPage))
  );
  const searchData = React.useRef(
    throttle(val => {
      const query = val.toLowerCase();
      setCurrentPage(1);
      const data = cloneDeep(
        JobData
          .filter(item => item.positionName.toLowerCase().indexOf(query) > -1 || item.description.toLowerCase().indexOf(query) > -1)
          .slice(0, countPerPage)
      );
      setCollection(data);
    }, 400)
  );


  React.useEffect(() => {
    if (!value) {
      updatePage(1);
    } else {
      searchData.current(value);
    }
  }, [value]);

  const updatePage = p => {
    setCurrentPage(p);
    const to = countPerPage * p;
    const from = to - countPerPage;
    setCollection(cloneDeep(JobData.slice(from, to)));
  };

  const tableRows = (rowData) => {
    const { key, index } = rowData;
    const tableCell = Object.keys(tableHead);
    const columnData = tableCell.map((keyD, i) => {
      return <td key={i}>{key[keyD]}</td>;
    });
    return (
      <tr 
        style={{ cursor: 'pointer' }}
        key={index}
        onClick={() => {
          navigate(`/job-detail/${key.id}`);
        }}>
        {columnData}
      </tr>
    );
  };

  const tableData = () => {
    return collection.map((key, index) => tableRows({ key, index }));
  };

  const headRow = () => {
    return Object.values(tableHead).map((title, index) => (
      <td key={index}>{title}</td>
    ));
  };

  return (
    <>
      <div class="search">
        <input
          placeholder="Search Campaign"
          value={searchVal}
          onChange={e => setSearchVal(e.target.value)}
        />
        <a className="sc-jSMfEi ZfRcs" onClick={() => { window.location.href = `/job-search-result/${searchVal}`; setValue(searchVal) }}>Search</a>
      </div>
      <table>
        <thead>
          <tr>{headRow()}</tr>
        </thead>
        <tbody className="trhover">{tableData()}</tbody>
      </table>
      <Pagination
        pageSize={countPerPage}
        onChange={updatePage}
        current={currentPage}
        total={collection.length}
      />
    </>
  );
};
export default Table;
