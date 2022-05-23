import React from "react";
import { merge } from "lodash";
import SideSection from "../components/SideSection"
import Steps from "../components/Steps"
import UserTypes from "../static/user_types.json"

const TextInputWithUpdate = (props:any) => (
  <>
    <fieldset className = {"input-group" + (props.error !== "" ? " error" : '')}>
      {props.placeholder !== "" && props.value !== "" &&
        <legend>{props.placeholder}</legend>
      }
      <input
        type = {props.type}
        className={`text-input ${props.input}-input`}
        key={props.input}
        placeholder={props.placeholder}
        name = {props.name}
        value = {props.value}
        onChange={props.onChange}
        disabled={props.disabled ? true : false}
      />
    </fieldset>
    {props.instruction !== "" && props.error === "" &&
      <small>{props.instruction}</small>
    }
    {props.error !== "" &&
      <small className = 'error'>{props.error}</small>
    }
  </>
);

const DropdownWithUpdate = (props:any) => (
  <>
    <fieldset className = {"input-group" + (props.error !== "" ? " error" : '')}>
      {props.label !== "" && props.value !== "" &&
        <legend>{props.label}</legend>
      }
      <select 
        key={props.input}
        onChange={props.onChange}
        name = {props.name}
        value = {props.value}
        disabled={props.disabled ? true : false}
      >
        <option value = '' disabled hidden >{props.placeholder}</option>
        {props.options.map((x:any, i:any) => 
          <option value = {x.key}>{x.value}</option>
        )}
      </select>      
    </fieldset>
    {props.instruction !== "" && props.error === "" &&
      <small>{props.instruction}</small>
    }
    {props.error !== "" &&
      <small className = 'error'>{props.error}</small>
    }
  </>
);

const SignIn = () => {
  const hasSideSection = true;
  const totalStep = 3;

  const [profile, setProfile] = React.useState({
    name: "",
    email: "",
    password: "",
    userType: ""
  });

  const [profileError, setProfileError] = React.useState({
    name: '',
    email: '',
    password: '',
    userType: ''
  });

  const [isSubmitable, setIsSubmitable] = React.useState<Boolean>(false);
  const [currentStep, setCurrentStep] = React.useState<number>(1);

  const updateProfile = (e:any) => {
    setProfile(merge({}, profile, { [e.target.name]: e.target.value }));
    setIsSubmitable(true);
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();

    // Check validation
    let isError = false;
    let errorName = '';
    if (profile.name === '' || profile.name === null) {errorName = 'Please enter your name'; isError = true;}
    if (profile.name !== '') {
      const alphanumericRegex: RegExp = new RegExp(/^[0-9a-z A-Z]+$/);
      if (!alphanumericRegex.test(profile.name)) {
        errorName = 'Your name should be alphanumeric'; isError = true;        
      }
    }

    let errorEmail = '';
    if (profile.email === '' || profile.email === null) {errorEmail = 'Please enter valid email address'; isError = true;}
    if (profile.email !== '') {
      const alphanumericRegex: RegExp = new RegExp(/\S+@\S+\.\S+/);
      if (!alphanumericRegex.test(profile.email)) {
        errorEmail = 'Please enter valid email address';
        isError = true;        
      }
    }
    
    let errorPassword = '';
    if (profile.password === '' || profile.password === null) {errorPassword = 'Please enter your password'; isError = true;}
    if (profile.password !== '' && profile.password.length < 8)  {errorPassword = 'Password should be minimum 8 characters'; isError = true;}

    let errorUserType = '';
    if (profile.userType === '' || profile.userType === null) {errorUserType = 'Please select your user type'; isError = true;}

    setProfileError({
      name: errorName,
      email: errorEmail,
      password: errorPassword,
      userType: errorUserType
    });

    if(!isError) {
      setCurrentStep(currentStep + 1);
      alert("Next Step");
    }
  };

  return (
    <>
      <div className = {'page-wrapper' + (hasSideSection ? ' with-side' : '') } >
        <div className = 'contents-wrapper'>
          <Steps 
          total = {totalStep}
          current = {currentStep}
          />
          <div className = "page-signin" >
            <h2>Let's set up your account</h2>
            <p className = "loginQuestion">Already have an account ? <a href = "/">Sign In</a></p>
            <form className = "form-submit" onSubmit={handleSubmit}>
              <TextInputWithUpdate
                type = 'text'
                name = 'name'
                placeholder = 'Your name'
                value = {profile.name}
                onChange={updateProfile}
                error = {profileError.name}
              />
              <TextInputWithUpdate
                type = 'text'
                name = 'email'
                placeholder = 'Email address'
                value = {profile.email}
                onChange={updateProfile}
                error = {profileError.email}
              />
              <DropdownWithUpdate
                name = 'userType'
                label = 'User type'
                placeholder = 'I would describe my user type as'
                value = {profile.userType}
                onChange={updateProfile}
                error = {profileError.userType}
                options = {UserTypes}
              />
              <TextInputWithUpdate
                type = 'password'
                name = 'password'
                placeholder = 'Password'
                value = {profile.password}
                onChange={updateProfile}
                instruction = 'Minimum 8 characters'
                error = {profileError.password}
              />
              <button className = {'btn-submit' + (isSubmitable ? '' : ' btn-disabled')} disabled={!isSubmitable} >Next</button>
              <p>By clicking "Next" button, you agree to creating a free account, and to <a href = "/">Terms of Service</a> and <a href = "/">Privacy Policy</a></p>
            </form>
          </div>
          
        </div>
        {hasSideSection && (
          <SideSection 
            heading = "Dummy Heading"
            description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
          />
        )}
      </div>
    </>
  );
};

export default SignIn;
