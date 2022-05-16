import React from 'react';
// import '../Content.css';
import '../styles/about-us.css'

const AboutPage = () => (
    <>
    <div className='aboutus-background-image'>
        <div className="aboutus-container">
            <div id="myHeader">
                <h1>About Us</h1>
            </div>
            <pre id="pre1">What is Occupear?</pre>
            <div className="aboutus-box">
                <p id="content">This is a paragraph
                </p>
            </div>

            <p></p>

            <pre id="pre2">How We Came Up with Occupear</pre>
            <div className="aboutus-box">
                <p id="content">This is a paragraph
                </p>
            </div>

            <p></p>

            <pre id="pre3">Purpose of Occupear</pre>
            <div className="aboutus-box">
                <p id="content">This is a paragraph</p>
            </div>

            <p></p>

            <pre id="pre4">Benefits of Occupear</pre>
            <div className="aboutus-box">
                <p id="content">The job finding project could help students and fresh graduates to choose which job they wanted or needed to take in order to earn some money for their relatives they care and love. However, sometimes they do not like the jobs they want to take for various reasons, such as not having required skills, not being old enough, the career path is difficult for them to take and many more. To solve this problem, we could create a recommendation feature that offers recommended jobs they could take through asking the questions in terms of their age, skills they need, skills they learned and many more</p>
            </div>

            <p></p>

            <h2 id="teamName">The Team</h2>
            <br />
            <h3 id="teamMem">Team Member 1: Ly Tin Kiet - s3755692</h3>
            <img src={require('../page_images/profile.png')} className="profileImage" width="100px" height="100px" />
            <div className="aboutus-box">
                <p id="content">My name is Ly Tin Kiet, I am currently a software developer working on this project. My goal in this project is to have a thorough insight of how a project operates all the way from the planning step to a finished product that satisfies all the criterias of the end-user. My experiences from the past projects involved in developing myself to be a full-stack developer since focusing only on frontend or backend development from the start can lead to sufficient understanding between two sides. A project I have worked on in the past is a web application for RMIT students to find their teammates in specific courses, RMIT has a discussion forum to discuss and to find teammates but the privacy of the information prevent them from recruiting ideal teammates and somehow got the bad ones.Therefore, our project steps out to give students places to show more aspects of their lives that I hope I can do the same with this project.To connect more students to the employer in someway they can feel comfortable and divisive with their career paths. HTML, Java and Python are familiar to my daily coding experiences. Nodejs is also used within this project, but all of my works before rarely have chances to use it so this project is also a bit challenging for me to implement a new programming language.</p>
            </div>

            <p></p>

            <h3 id="teamMem">Team Member 2: Nguyen Manh Quoc Viet - s3759306</h3>
            <img src={require('../page_images/14680624_339883713028778_1995089209548736259_n (1).jpg')} className="profileImage" width="100px" height="100px" />
            <div className="aboutus-box">
                <p id="content">My name is Nguyen Manh Quoc Viet. I am currently a programmer working on this project. My goal in this project is to make sure that the project is working successfully and if not, then I need to find out what errors are lurking in it. I could learn programming languages through searching the tutorials via Google and YouTube on how to use them properly to create functions and interfaces, but in order to implement them into a project, I have to carefully think of how they could be built together, so that the project could function properly with no errors. The programming languages I have learned in the past are Python, Java, CSS, HTML, PHP, Javascript and many more. However, after I have learned all of these programming languages, then my knowledge about them is lost, but I could regain my knowledge of them through learning how to use them via searching for tutorials via Google and YouTube, because they are hard to learn, as I have to understand their algorithms and processes. </p>
            </div>

            <p></p>

            <h3 id="teamMem">Team Member 3: Tran Minh Anh - s3740932</h3>
            <img src={require('../page_images/profile.png')} className="profileImage" width="100px" height="100px" />
            <div className="aboutus-box">
                <p id="content">My name is Tran Minh Anh. I, for the most part, am comfortable with OOP Programming Languages such as Python, C++, Java, and mobile development using SwiftUI. This project, however, is about making a functioning marketable web application using ReactJS, NodeJS, and such. These programming languages are ones that I should be familiar with as I have already been through courses such as Web Programming and Further Web Programming. However, the reality is that it has been a while since I last participated in a Web Development project. Therefore, in this course, I will be using this opportunity to relearn the whole Web Development process, and hopefully, by the end of this project, I will be able to become more comfortable with Web Development and will be able to successfully deliver a functional project within the time constraint.  </p>
            </div>

            <p></p>

            <h3 id="teamMem">Team Member 4: Vu Gia Thinh - s3820373</h3>
            <img src={require('../page_images/profile.png')} className="profileImage" width="100px" height="100px" />
            <div className="aboutus-box">
                <p id="content">My name is Vu Gia Thinh. I am currently a member working on this project and I major in data analytics. My goal in this project is to produce a well-functioning product given the time constraints. I am familiar with some programming languages such as Python, C, C++, Java. However, this project requires knowledge of script languages, more specifically, ReactJS and NodeJS which I have no prior knowledge of. Although I have participated in a fundamental Web-programming course so I think I can grab the basics of this project. I am excited to learn more and elaborate with everyone in this project with these brand-new languages.</p>
            </div>
        </div>
        </div>
    </>
);

export default AboutPage;