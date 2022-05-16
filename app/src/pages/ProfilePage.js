import React from "react";
import AuthService from "../services/auth.service";
import { Link } from 'react-router-dom';
const ProfilePage = () => {
  const currentUser = AuthService.getCurrentUser();

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>{currentUser.username}</strong>'s Profile
        </h3>
      </header>
      <div>
        <strong>
        </strong>
      </div>
      <p>
        <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
        {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
      </p>
      <p>
        <strong>Id:</strong> {currentUser.id}
      </p>
      <p>
        <strong>Name:</strong> {currentUser.username}
      </p>
      <p>
        <strong>Name:</strong> {currentUser.firstName}
      </p>
      <p>
        <strong>Email:</strong> {currentUser.email}
      </p>
      <p></p>
      <strong>Authorities:</strong>
      <ul>
        {currentUser.roles &&
          currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul>
      <a href="/edit-profile" className="btn head-btn1" >
        Edit
      </a>

    </div>
  );
};

export default ProfilePage;
