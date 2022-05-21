import React, { useState, useRef, useEffect } from 'react';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import { isEmail } from 'validator';
import { useNavigate } from 'react-router-dom';
import AuthService from '../services/auth.service';
import UserService from '../services/user.service';
import '../styles/profile.css';
import axios from 'axios';


const required = (value) => {
  if (!value) {
    return (
      <div className='alert alert-danger' role='alert'>
        This field is required!
      </div>
    );
  }
};

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className='alert alert-danger' role='alert'>
        This is not a valid email.
      </div>
    );
  }
};
const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className='alert alert-danger' role='alert'>
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
  const history = useNavigate();
  const [username, setUsername] = useState(currentUser.username);
  const [email, setEmail] = useState(currentUser.email);
  const [firstName, setfirstName] = useState(currentUser.firstName);
  const [address, setAddress] = useState(currentUser.address);
  const [town, setTown] = useState(currentUser.town);
  const [country, setCountry] = useState(currentUser.country);
  const [phoneNumber, setPhoneNumber] = useState(currentUser.phoneNumber);
  const [imageProf, setImageProf] = useState(' ');
  const [password, setPassword] = useState('');
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState('');

  const [fileName, setFileName] = useState('');
  const fileSelectedHandler = (event) => {
    const fileName = event.target.files[0];
    setFileName(fileName);
  };
  
  console.log(currentUser.imageFile);
  console.log(imageProf);
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

  const onChangePhoneNum = (e) => {
    const phonenum = e.target.value;
    setPhoneNumber(phonenum);
  };
  const onChangeAddress = (e) => {
    const add = e.target.value;
    setAddress(add);
  };
  const onChangeTown = (e) => {
    const twn = e.target.value;
    setTown(twn);
  };
  const onchangeCountry = (e) => {
    const cnt = e.target.value;
    setCountry(cnt);
  };
  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
  const updateImage = async () => {
    console.log(fileName.name);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    UserService.updateUserByID(
      currentUser.username,
      currentUser.email,
      currentUser.firstName,
      fileName.name,
      currentUser.phoneNumber,
      currentUser.address,
      currentUser.town,
      currentUser.country
    ).then(AuthService.logout(), history('/'), window.location.reload(false));
  };
  const deleteUser = () => {
    axios
      .get('http://localhost:3000/api/profile/delete/' + currentUser.username)
      .then(AuthService.logout(), history('/'), window.location.reload(false));
  };
  const handleUpdate = (e) => {
    e.preventDefault();

    setMessage('');
    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      UserService.updateUserByID(
        username,
        email,
        firstName,
        currentUser.imageFile,
        phoneNumber,
        address,
        town,
        country
      ).then(
        (response) => {
          setMessage(response.data.message);
          setSuccessful(true);
          AuthService.logout();
          history('/');
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
  console.log(currentUser);
  const userURL = 'http://localhost:3000/file/' + currentUser.imageFile;
  const profileImage =
    currentUser.imageFile != ''
      ? userURL
      : require('../page_images/profile.png');

  return (
    <div className='col-md-12'>
      <div id='myHeader'>
        <h1>My account</h1>
      </div>
      <div class='row'>
        <div class='col-md-2'>
          <div class='d'>Details</div>
          <div class='p'>Personal Information</div>
        </div>
        <div class='col-md-7'>
          <div class='col-md-3'>
            <img
              src={profileImage}
              class='img-thumbnail'
              id='profileImage'
              width='200px'
              height='200px'
            />
            <form
              action='http://localhost:3000/upload'
              method='POST'
              enctype='multipart/form-data'
              onSubmit={updateImage}>
              <input
                type='file'
                name='file'
                id='input-files'
                onChange={fileSelectedHandler}
              />
              <button type='submit'>Submit</button>
            </form>
          </div>
        </div>
      </div>
      <Form onSubmit={handleUpdate} ref={form}>
        {!successful && (
          <div>
            <div class='form-row'>
              <div class='form-group col-md-3 p-4'>
                <label for='inputEmail4'>Username</label>
                <Input
                  type='text'
                  className='form-control'
                  name='firstName'
                  value={username}
                  onChange={onChangeUsername}
                  validations={[required, vusername]}
                />
              </div>
              <div class='form-group col-md-3  p-4'>
                <label for='inputPassword4'>Email</label>
                <Input
                  type='text'
                  className='form-control'
                  name='email'
                  value={email}
                  onChange={onChangeEmail}
                  validations={[required, validEmail]}
                />
              </div>
              <div class='form-group col-md-3  p-4'>
                <label for='inputPassword4'>First Name</label>
                <Input
                  type='text'
                  className='form-control'
                  name='firstName'
                  value={firstName}
                  onChange={onChangeFirstName}
                  validations={[required, vusername]}
                />
              </div>
            </div>
            <label id='birthDate' for=''>
              Birth Date
            </label>
            <div class='input-group col-md-3' id='input'>
              <input
                type='text'
                class='form-control'
                id='form'
                placeholder='dd/mm/yyyy'
                aria-label="Recipient's username"
                aria-describedby='basic-addon2'
              />
              <span class='input-group-btn'>
                <button class='btn'>
                  <i class='fa fa-calendar'></i>
                </button>
              </span>
            </div>
            <div class='form-group col-md-5' id='i'>
              <label for='inputEmail4'>Phone Number</label>
              <input
                type='name'
                class='form-control'
                id='form'
                value={phoneNumber}
                onChange={onChangePhoneNum}
              />
            </div>

            <div class='form-group col-md-5' id='i'>
              <label for='inputPassword4'>Address</label>
              <input
                type='name'
                class='form-control'
                id='form'
                value={address}
                onChange={onChangeAddress}
              />
            </div>
            <div class='form-group col-md-5' id='i'>
              <label for='inputPassword4'>Town/City</label>
              <input
                type='name'
                class='form-control'
                id='form'
                value={town}
                onChange={onChangeTown}
              />
            </div>
            <div class='form-group col-md-5' id='i'>
              <label for='inputPassword4'>Country</label>
              <input
                type='name'
                class='form-control'
                id='form'
                value={country}
                onChange={onchangeCountry}
              />
            </div>
            <button onClick={deleteUser}>Delete User</button>

            <div className='form-group'>
              <button className='btn btn-primary btn-block'>Update</button>
            </div>
          </div>
        )}

        {message && (
          <div className='form-group'>
            <div
              className={
                successful ? 'alert alert-success' : 'alert alert-danger'
              }
              role='alert'>
              {message}
            </div>
          </div>
        )}
        <CheckButton style={{ display: 'none' }} ref={checkBtn} />
      </Form>
    </div>
  );
};

export default EditPage;
