import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import { useNavigate } from 'react-router-dom'
import AuthService from "../services/auth.service";
import UserService from "../services/user.service";
import '../styles/profile.css'

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

// const vpassword = (value) => {
//   if (value.length < 6 || value.length > 40) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         The password must be between 6 and 40 characters.
//       </div>
//     );
//   }
// };

const EditPage = (id) => {
  const currentUser = AuthService.getCurrentUser();
  const form = useRef();
  const checkBtn = useRef();
  const history = useNavigate()
  const [username, setUsername] = useState(currentUser.username);
  const [email, setEmail] = useState(currentUser.email);
  const [firstName, setfirstName] = useState(currentUser.firstName);
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangeFirstName = (e) => {
    const firstName = e.target.value;
    setfirstName(firstName);
  };


  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleUpdate = (e) => {

    e.preventDefault();

    setMessage("");
    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      UserService.updateUserByID(username, email, firstName)
        .then(
          (response) => {
            setMessage(response.data.message);
            setSuccessful(true);
            AuthService.logout();
            history("/");
            window.location.reload(false);
          },
          (error) => {
            const resMessage =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();

            setMessage(resMessage);
            setSuccessful(false);
          }
        );
    }
  };

  return (

    <div className="col-md-12">
      <div id="myHeader">
        <h1>My Account</h1>
      </div>
      <div class="row">
        <div class="col-md-2">
          <div class="d">Details</div>
          <div class="p">Personal Information:</div>
        </div>
        <div class="col-md-7">
          <div class="col-md-3">
            <img src={require('../page_images/profile.png')} class="img-thumbnail" id="profileImage" width="200px" height="200px" className="profile-image" />
          </div>
        </div>
      </div>



      <Form onSubmit={handleUpdate} ref={form}>

        {!successful && (

          <div>
            <div class="form-row">
              <div class="form-group col-md-3 p-4">
                <label for="inputEmail4">First Name:</label>
                <input type="name" class="form-control" id="formName" placeholder="" />
              </div>
              <div class="form-group col-md-3  p-4">
                <label for="inputPassword4">Middle Name:</label>
                <input type="name" class="form-control" id="formName" placeholder="" />
              </div>
              <div class="form-group col-md-3  p-4">
                <label for="inputPassword4">Last Name:</label>
                <input type="name" class="form-control" id="formName" placeholder="" />
              </div>
            </div>
            <label id="birthDate" for="">Birth Date:</label>
            <div class="input-group col-md-3" id="input" >
              <input type="text" class="form-control" id="form" placeholder="dd/mm/yyyy" aria-label="Recipient's username" aria-describedby="basic-addon2" />
              <span class="input-group-btn">
                <button class="btn"><i class="fa fa-calendar"></i></button>
              </span>
            </div>
            <div class="form-group col-md-5" id="i">
              <label for="inputEmail4">Phone Number:</label>
              <input type="name" class="form-control" id="form" placeholder="" />
            </div>
            <div class="form-group col-md-5" id="i">
              <label for="inputPassword4">Email Address:</label>
              <input type="name" class="form-control" id="form" placeholder="" />
            </div>
            <div class="form-group col-md-5" id="i">
              <label for="inputPassword4">Address:</label>
              <input type="name" class="form-control" id="form" placeholder=""/>
            </div>
            <div class="form-group col-md-5" id="i">
              <label for="inputPassword4">Town/City</label>
              <input type="name" class="form-control" id="form" placeholder=""/>
            </div>
            <div class="form-group col-md-5" id="i">
              <label for="inputPassword4">Country:</label>
              <input type="name" class="form-control" id="form" placeholder=""/>
            </div>
            <p></p>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <Input
                type="text"
                className="form-control"
                name="username"
                value={username}
                onChange={onChangeUsername}
                validations={[required, vusername]}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <Input
                type="text"
                className="form-control"
                name="email"
                value={email}
                onChange={onChangeEmail}
                validations={[required, validEmail]}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">First Name:</label>
              <Input
                type="text"
                className="form-control"
                name="firstName"
                value={firstName}
                onChange={onChangeFirstName}
                validations={[required, vusername]}
              />
            </div>

            <div className="form-group">
              <button className="btn btn-primary btn-block">Update</button>
            </div>
          </div>
        )}

        {message && (
          <div className="form-group">
            <div
              className={
                successful ? "alert alert-success" : "alert alert-danger"
              }
              role="alert"
            >
              {message}
            </div>
          </div>
        )}
        <CheckButton style={{ display: "none" }} ref={checkBtn} />
      </Form>
    </div>
  );
};

export default EditPage;
