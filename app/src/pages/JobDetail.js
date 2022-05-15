import React from 'react';
import companylogo from '../assets/img/icon/job-list1.png';
import { JobData } from './output';
import { useParams } from 'react-router-dom';

function JobDetail() {
  let index = 0;
  const { id } = useParams();
  for (let i = 0; JobData[i] != null; i++) {
    if (id === JobData[i].id) {
      index = i;
    }
  }
  return (
    <div class='job-post-company pt-120 pb-120'>
      <div class='container'>
        <div class='row justify-content-between'>
          {/* <!-- Left Content --> */}
          <div class='col-xl-7 col-lg-8'>
            {/* <!-- job single --> */}
            <div class='single-job-items mb-50'>
              <div class='job-items'>
                <div class='company-img company-img-details'>
                  <a href='#'>
                    <img src={companylogo} alt='' />
                  </a>
                </div>
                <div class='job-tittle'>
                  <a href='#'>
                    <h4>{JobData[index].positionName}</h4>
                  </a>
                  <ul>
                    <li>{JobData[index].company}</li>
                    <li>
                      <i class='fas fa-map-marker-alt'></i>
                      {JobData[index].location}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <!-- job single End --> */}

            <div class='job-post-details'>
              <div class='post-details1 mb-50'>
                {/* <!-- Small Section Tittle --> */}
                <div class='small-section-tittle'>
                  <h4>Job Description</h4>
                </div>
                <p>{JobData[index].description}</p>
              </div>
              <div class='post-details2  mb-50'>
                {/* <!-- Small Section Tittle --> */}
              </div>
              <div class='post-details2  mb-50'>
                {/* <!-- Small Section Tittle --> */}
              </div>
            </div>
          </div>
          {/* <!-- Right Content --> */}
          <div class='col-xl-4 col-lg-4'>
            <div class='post-details3  mb-50'>
              {/* <!-- Small Section Tittle --> */}
            </div>
            <div class='post-details4  mb-50'>
              {/* <!-- Small Section Tittle --> */}
              <div class='small-section-tittle'>
                <h4>Company Information</h4>
              </div>
              <span>{JobData[index].positionName}</span>
              <ul>
                <li>
                  Name: <span>{JobData[index].positionName} </span>
                </li>
                <li>
                  Web : <span>{JobData[index].url}</span>
                </li>
                <li>
                  Email: <span>carrier.colorlib@gmail.com</span>
                </li>
                <button
                  onClick={(e) => {
                    // e.preventDefault();
                    window.open(JobData[index].url, 'blank');
                  }}>
                  Apply Now!
                </button>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobDetail;
