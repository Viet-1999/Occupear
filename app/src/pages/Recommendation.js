import React, { useState } from 'react';
import { JobData } from "./output";
import "../styles/Recommendation.css";

const Recommendation = () => {
    const [question1, setQuestion1] = useState(true);
    const [question2, setQuestion2] = useState(false);
    const [jobArray, setJobArray] = useState([]);
    const [question2confirmation, setquestion2confirmation] = useState(false);


    const filteredArray = JobData.filter((item) => {
        for (let i = 0; i < jobArray.length; i++) {
            if (!jobArray[i](item)) {
                return false
            }
        }
        return true
    })
    return (
        <>
            <div className='recommendation-background-image'>
            <div className="recommendation-container">
                {
                    (() => {
                        if (question1) {
                            return (
                                <div>
                                    <div>Question 1: Choose a Location You are Currently Living</div>
                                    <button className='button-styling' onClick={() => { setJobArray(prevArray => [...prevArray, (item => item.location.toLowerCase().indexOf("Hồ Chí Minh".toLowerCase()) > -1)]); setQuestion1(false); setQuestion2(true) }}> Hồ Chí Minh</button>
                                    <button className='button-styling' onClick={() => { setJobArray(prevArray => [...prevArray, (item => item.location.toLowerCase().indexOf("Hà Nội".toLowerCase()) > -1)]); setQuestion1(false); setQuestion2(true) }}> Hà Nội</button>
                                    <button className='button-styling' onClick={() => { setJobArray(prevArray => [...prevArray, (item => item.location.toLowerCase().indexOf("Đà Nẵng".toLowerCase()) > -1)]); setQuestion1(false); setQuestion2(true) }}>Đà Nẵng</button>
                                    <button className='button-styling' onClick={() => { setJobArray(prevArray => [...prevArray, (item => item.location.toLowerCase().indexOf("Nghệ An".toLowerCase()) > -1)]); setQuestion1(false); setQuestion2(true) }}>Nghệ An</button>

                                </div>
                            )
                        }
                        if (question2) {
                            return (
                                <div>
                                    <div>Question 2: Choose a Category</div>
                                    <p></p>
                                    <div>Programming Languages</div>
                                    <button className='button-styling' onClick={() => { setJobArray(prevArray => [...prevArray, (item => item.positionName.toLowerCase().indexOf("java".toLowerCase()) > -1 || item.description.toLowerCase().indexOf("java".toLowerCase()) > -1)]); setquestion2confirmation(true) }}>Java</button>
                                    <button className='button-styling' onClick={() => { setJobArray(prevArray => [...prevArray, (item => item.positionName.toLowerCase().indexOf("javascript".toLowerCase()) > -1 || item.description.toLowerCase().indexOf("javascript".toLowerCase()) > -1)]); setquestion2confirmation(true) }}>JavaScript</button>
                                    <button className='button-styling' onClick={() => { setJobArray(prevArray => [...prevArray, (item => item.positionName.toLowerCase().indexOf("php".toLowerCase()) > -1 || item.description.toLowerCase().indexOf("php".toLowerCase()) > -1)]); setquestion2confirmation(true) }}>PHP</button>
                                    <button className='button-styling' onClick={() => { setJobArray(prevArray => [...prevArray, (item => item.positionName.toLowerCase().indexOf("python".toLowerCase()) > -1 || item.description.toLowerCase().indexOf("python".toLowerCase()) > -1)]); setquestion2confirmation(true) }}>Python</button>
                                    <button className='button-styling' onClick={() => { setJobArray(prevArray => [...prevArray, (item => item.positionName.toLowerCase().indexOf("golang".toLowerCase()) > -1 || item.description.toLowerCase().indexOf("golang".toLowerCase()) > -1)]); setquestion2confirmation(true) }}>Golang</button>
                                    <button className='button-styling' onClick={() => { setJobArray(prevArray => [...prevArray, (item => item.positionName.toLowerCase().indexOf(".NET".toLowerCase()) > -1 || item.description.toLowerCase().indexOf(".NET".toLowerCase()) > -1)]); setquestion2confirmation(true) }}>.NET</button>
                                    <button className='button-styling' onClick={() => { setJobArray(prevArray => [...prevArray, (item => item.positionName.toLowerCase().indexOf("swift".toLowerCase()) > -1 || item.description.toLowerCase().indexOf("swift".toLowerCase()) > -1)]); setquestion2confirmation(true) }}>Swift</button>
                                    <button className='button-styling' onClick={() => { setJobArray(prevArray => [...prevArray, (item => item.positionName.toLowerCase().indexOf("kotlin".toLowerCase()) > -1 || item.description.toLowerCase().indexOf("kotlin".toLowerCase()) > -1)]); setquestion2confirmation(true) }}>Kotlin</button>
                                    <button className='button-styling' onClick={() => { setJobArray(prevArray => [...prevArray, (item => item.positionName.toLowerCase().indexOf("ruby".toLowerCase()) > -1 || item.description.toLowerCase().indexOf("ruby".toLowerCase()) > -1)]); setquestion2confirmation(true) }}>Ruby</button>

                                    <p></p>
                                    <div>Frameworks</div>
                                    <button className='button-styling' onClick={() => { setJobArray(prevArray => [...prevArray, (item => item.positionName.toLowerCase().indexOf("angular".toLowerCase()) > -1 || item.description.toLowerCase().indexOf("angular".toLowerCase()) > -1)]); setquestion2confirmation(true) }}>Angular</button>
                                    <button className='button-styling' onClick={() => { setJobArray(prevArray => [...prevArray, (item => item.positionName.toLowerCase().indexOf("vuejs".toLowerCase()) > -1 || item.description.toLowerCase().indexOf("vuejs".toLowerCase()) > -1)]); setquestion2confirmation(true) }}>Vue.js</button>

                                    <p></p>
                                    <div>Platforms</div>
                                    <button className='button-styling' onClick={() => { setJobArray(prevArray => [...prevArray, (item => item.positionName.toLowerCase().indexOf("nodejs".toLowerCase()) > -1 || item.description.toLowerCase().indexOf("nodejs".toLowerCase()) > -1)]); setquestion2confirmation(true) }}>Node.js</button>
                                    <button className='button-styling' onClick={() => { setJobArray(prevArray => [...prevArray, (item => item.positionName.toLowerCase().indexOf("docker".toLowerCase()) > -1 || item.description.toLowerCase().indexOf("docker".toLowerCase()) > -1)]); setquestion2confirmation(true) }}>Docker</button>

                                    <p></p>
                                    <div>Mobile Development</div>
                                    <button className='button-styling' onClick={() => { setJobArray(prevArray => [...prevArray, (item => item.positionName.toLowerCase().indexOf("ios".toLowerCase()) > -1 || item.description.toLowerCase().indexOf("ios".toLowerCase()) > -1)]); setquestion2confirmation(true) }}>IOS</button>
                                    <button className='button-styling' onClick={() => { setJobArray(prevArray => [...prevArray, (item => item.positionName.toLowerCase().indexOf("android".toLowerCase()) > -1 || item.description.toLowerCase().indexOf("android".toLowerCase()) > -1)]); setquestion2confirmation(true) }}>Android</button>

                                    <p></p>
                                    <div>Database Management Systems</div>
                                    <button className='button-styling' onClick={() => { setJobArray(prevArray => [...prevArray, (item => item.positionName.toLowerCase().indexOf("mysql".toLowerCase()) > -1 || item.description.toLowerCase().indexOf("mysql".toLowerCase()) > -1)]); setquestion2confirmation(true) }}>MySQL</button>
                                    <button className='button-styling' onClick={() => { setJobArray(prevArray => [...prevArray, (item => item.positionName.toLowerCase().indexOf("sql server".toLowerCase()) > -1 || item.description.toLowerCase().indexOf("sql server".toLowerCase()) > -1)]); setquestion2confirmation(true) }}>SQL Server</button>
                                    <button className='button-styling' onClick={() => { setJobArray(prevArray => [...prevArray, (item => item.positionName.toLowerCase().indexOf("mongodb".toLowerCase()) > -1 || item.description.toLowerCase().indexOf("mongodb".toLowerCase()) > -1)]); setquestion2confirmation(true) }}>MongoDB</button>
                                    <button className='button-styling' onClick={() => { setJobArray(prevArray => [...prevArray, (item => item.positionName.toLowerCase().indexOf("PostgresSQL".toLowerCase()) > -1 || item.description.toLowerCase().indexOf("PostgresSQL".toLowerCase()) > -1)]); setquestion2confirmation(true) }}>PostgresSQL</button>

                                    <p></p>
                                    <div>Other</div>
                                    <button className='button-styling' onClick={() => { setJobArray(prevArray => [...prevArray, (item => item.positionName.toLowerCase().indexOf("unity".toLowerCase()) > -1 || item.description.toLowerCase().indexOf("unity".toLowerCase()) > -1)]); setquestion2confirmation(true) }}>Unity</button>
                                    <button className='button-styling' onClick={() => { setJobArray(prevArray => [...prevArray, (item => item.positionName.toLowerCase().indexOf("wordpress".toLowerCase()) > -1 || item.description.toLowerCase().indexOf("wordpress".toLowerCase()) > -1)]); setquestion2confirmation(true) }}>Wordpress</button>
                                    <button className='button-styling' onClick={() => { setJobArray(prevArray => [...prevArray, (item => item.positionName.toLowerCase().indexOf("ajax".toLowerCase()) > -1 || item.description.toLowerCase().indexOf("ajax".toLowerCase()) > -1)]); setquestion2confirmation(true) }}>Ajax</button>
                                    <button className='button-styling' onClick={() => { setJobArray(prevArray => [...prevArray, (item => item.positionName.toLowerCase().indexOf("frontend".toLowerCase()) > -1 || item.description.toLowerCase().indexOf("frontend".toLowerCase()) > -1)]); setquestion2confirmation(true) }}>Front End</button>
                                    <button className='button-styling' onClick={() => { setJobArray(prevArray => [...prevArray, (item => item.positionName.toLowerCase().indexOf("backend".toLowerCase()) > -1 || item.description.toLowerCase().indexOf("backend".toLowerCase()) > -1)]); setquestion2confirmation(true) }}>Back End</button>
                                    <button className='button-styling' onClick={() => { setJobArray(prevArray => [...prevArray, (item => item.positionName.toLowerCase().indexOf("reactjs".toLowerCase()) > -1 || item.description.toLowerCase().indexOf("reactjs".toLowerCase()) > -1)]); setquestion2confirmation(true) }}>React</button>

                                    <p></p>
                                    <div>Levels</div>
                                    <button className='button-styling' onClick={() => { setJobArray(prevArray => [...prevArray, (item => item.positionName.toLowerCase().indexOf("fresher".toLowerCase()) > -1 || item.description.toLowerCase().indexOf("fresher".toLowerCase()) > -1)]); setquestion2confirmation(true) }}>Fresher</button>
                                    <button className='button-styling' onClick={() => { setJobArray(prevArray => [...prevArray, (item => item.positionName.toLowerCase().indexOf("junior".toLowerCase()) > -1 || item.description.toLowerCase().indexOf("junior".toLowerCase()) > -1)]); setquestion2confirmation(true) }}>Junior</button>
                                    <button className='button-styling' onClick={() => { setJobArray(prevArray => [...prevArray, (item => item.positionName.toLowerCase().indexOf("senior".toLowerCase()) > -1 || item.description.toLowerCase().indexOf("senior".toLowerCase()) > -1)]); setquestion2confirmation(true) }}>Senior</button>

                                    <p></p>
                                    {question2confirmation ? (
                                        <button className='confimationbutton-styling' onClick={() => { setQuestion2(false); console.log(jobArray.length) }}>Next Question</button>

                                    ) : (
                                        <div></div>
                                    )
                                    }

                                    <ul>

                                    </ul>

                                </div>
                            )
                        }
                        else {
                            return <div>
                                {/* <ul>
                                    {JobData.map((item,key) => <li key={key}>{item.positionName}</li>)}
                                </ul> */}
                                {/* <ul>
                                    {JobData.filter(item => item.positionName.toLowerCase()().indexOf(jobArray[0]) > -1).map((item, key) => <li key={key}>{item.positionName}</li>)}
                                </ul> */}
                                <h1>Results: {filteredArray.length} Jobs Searched</h1>
                                <p></p>
                                <ul>
                                    {/* {jobArrayFiltered.map((item, key) => <li key={key}>{item.positionName}</li>)} */}
                                    {/* {jobArray[0]} */}
                                    {filteredArray.map((item, key) =>
                                        <div className='jobdetails-styling'>
                                            <h2 key={key}>{item.positionName}</h2>
                                            <ol className='jobdetails-list-style'>
                                            <li key={key}>Salary: {item.salary}</li>
                                            <li key={key}>Company: {item.company}</li>
                                            <li key={key}>Location: {item.location}</li>
                                            <li key={key}>Rating: {item.rating}</li>
                                            <li key={key}>Reviews: {item.reviewsCount}</li>
                                            <li key={key}>URL: {item.url}</li>
                                            <li key={key}>ID: {item.id}</li>
                                            <li key={key}>Posted At: {item.postedAt}</li>
                                            <li key={key}>Scraped At: {item.scrapedAt}</li>
                                            <li key={key}>Skills: {item.skills}</li>
                                            <li key={key}>Description: {item.description}</li>
                                            </ol>
                                            <p></p>
                                        </div>

                                    )}
                                </ul>
                            </div>
                        }

                    })()
                }
            </div>
            </div>
        </>
    )
};

export default Recommendation;