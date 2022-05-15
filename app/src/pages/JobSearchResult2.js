import React, { useState, useEffect } from "react";
import cloneDeep from "lodash/cloneDeep";
import throttle from "lodash/throttle";
import Pagination from "rc-pagination";
import '../Content.css';
import "rc-pagination/assets/index.css";
import { JobData } from "./output";
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/JobSearchResult.css';

const JobSearchResult2 = () => {
    const { query } = useParams();
    const countPerPage = 10;
    const navigate = useNavigate();
    const [value, setValue] = useState(query);
    const [searchVal, setSearchVal] = useState(query);
    const [currentPage, setCurrentPage] = useState(1);
    const [collection, setCollection] = useState(
        cloneDeep(JobData.slice(0, countPerPage))
    );
    const [jobArray, setJobArray] = useState([(item => item.positionName.toLowerCase().indexOf(query.toLowerCase()) > -1 || item.description.toLowerCase().indexOf(query.toLowerCase()) > -1)]);
    const filteredArray = JobData.filter((item) => {
        for (let i = 0; i < jobArray.length; i++) {
            if (!jobArray[i](item)) {
                return false
            }
        }
        return true
    })
    
    const [filterVal, setFilterVal] = useState(filteredArray);
    
    const searchData = React.useRef(
        throttle(val => {
            const query = val.toLowerCase();
            setCurrentPage(1);
            const data = cloneDeep(
                filterVal
                    .slice(0, countPerPage)
            );
            setCollection(data);
        }, 400)
    );

   
    useEffect(() => {
        if (!value) {
            updatePage(1);
        }
        else {
            searchData.current(value);
        }
    }, [value]);

    const updatePage = p => {
        setCurrentPage(p);
        const to = countPerPage * p;
        const from = to - countPerPage;
        setCollection(cloneDeep(filterVal.slice(from, to)));

    };

    useEffect(()=>{
        setFilterVal(filteredArray)
    },[jobArray])
    useEffect(() => {
        updatePage(currentPage)
    }, [filterVal])



    return (
        <>
            <div className="header"></div>

            <div className="job-search-box">
                <input
                    placeholder="Search Campaign"
                    value={searchVal}
                    onChange={e => setSearchVal(e.target.value)}
                />
                <div className="job-search-button" >
                <a onClick={() => { window.location.href = `/job-search-result2/${searchVal}` }}>Search</a>
                </div>
            </div>
            
            <div className="filter-button-wrapper">
           
           <button className='button-styling' onClick={() => { setFilterVal(filterVal)}}> Hà Nội</button>
           <button onClick={() => { setJobArray(prevArray => [...prevArray, (item => item.description.toLowerCase().indexOf("react".toLowerCase()) > -1 || item.positionName.toLowerCase().indexOf("react".toLowerCase()) > -1)])}}> react</button>
            </div>
            
            <div className="jobs">
                {collection.map((item, key) =>

                    <div className="job-container job-container--borderLeft" >
                        <div className="part1">
                            <div className="company">
                                <span className="cname" >{item.company}</span>
                            </div>

                            <div className="position" onClick={() => { navigate(`/job-detail/${item.id}`) }}>{item.positionName}</div>

                            <div className="details">
                                <span>{item.postedAt}</span>
                                <span>&nbsp;•&nbsp;</span>
                                <span >{item.location}</span>
                            </div>
                        </div>

                        <div className="part2">
                            {
                                item.skills.map((skill, index) => {
                                    return (
                                        <span key={index}>
                                            <div onClick={() => { setJobArray(prevArray => [...prevArray, (item => item.description.toLowerCase().indexOf(JSON.parse(JSON.stringify(skill))) > -1 || item.positionName.toLowerCase().indexOf(JSON.parse(JSON.stringify(skill))) > -1)])}}> {skill}</div>
                                        </span>
                                    )
                                })
                            }
                        </div>

                    </div>
                )}
            </div>
            <div className="center">
            <Pagination
                className="pagination"
                pageSize={countPerPage}
                onChange={updatePage}
                current={currentPage}
                total={filterVal.length}
            />
            </div>
        </>
    );
};
export default JobSearchResult2;
