import React, { useState, useContext, useEffect } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container as ContainerBase } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import illustration from "images/signup-illustration.svg";
import logo from "images/logo.svg";
import googleIconImageSrc from "images/google-icon.png";
import twitterIconImageSrc from "images/twitter-icon.png";
import { ReactComponent as SignUpIcon } from "feather-icons/dist/icons/user-plus.svg";
import studentRegisterContext from "context/Register/studentRegisterContext";

const Container = tw(
    ContainerBase
)
`min-h-screen bg-primary-900 text-white font-medium flex justify-center -m-8`;
const Content = tw.div `max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div `lg:w-1/2 xl:w-5/12 p-6 sm:p-12`;
const LogoLink = tw.a ``;
const LogoImage = tw.img `h-12 mx-auto`;
const MainContent = tw.div `mt-12 flex flex-col items-center`;
const Heading = tw.h1 `text-2xl xl:text-3xl font-extrabold`;
const FormContainer = tw.div `w-full flex-1 mt-8`;

const SocialButtonsContainer = tw.div `flex flex-col items-center`;
const SocialButton = styled.a `
  ${tw`w-full max-w-xs font-semibold rounded-lg py-3 border text-gray-900 bg-gray-100 hocus:bg-gray-200 hocus:border-gray-400 flex items-center justify-center transition-all duration-300 focus:outline-none focus:shadow-outline text-sm mt-5 first:mt-0`}
  .iconContainer {
    ${tw`bg-white p-2 rounded-full`}
  }
  .icon {
    ${tw`w-4`}
  }
  .text {
    ${tw`ml-4`}
  }
`;

const DividerTextContainer = tw.div`my-12 border-b text-center relative`;
const DividerText = tw.div`leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform -translate-y-1/2 absolute inset-x-0 top-1/2 bg-transparent`;

const Form = tw.form`mx-auto max-w-xs`;
const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
const SubmitButton = styled.button`
  ${tw`mt-5 tracking-wide font-semibold bg-primary-500 text-gray-100 w-full py-4 rounded-lg hover:bg-primary-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3`}
  }
`;
const IllustrationContainer = tw.div`sm:rounded-r-lg flex-1 bg-purple-100 text-center hidden lg:flex justify-center`;
const IllustrationImage = styled.div`
  ${(props) => `background-image: url("${props.imageSrc}");`}
  ${tw`m-12 xl:m-16 w-full max-w-lg bg-contain bg-center bg-no-repeat`}
`;

const Loader = styled.div`
  .loader {
    font-size: 10px;
    margin: 50px auto;
    text-indent: -9999em;
    width: 11em;
    height: 11em;
    border-radius: 50%;
    background: white;
    background: -moz-linear-gradient(
      left,
      #ffffff 10%,
      rgba(255, 255, 255, 0) 42%
    );
    background: -webkit-linear-gradient(
      left,
      #ffffff 10%,
      rgba(255, 255, 255, 0) 42%
    );
    background: -o-linear-gradient(
      left,
      #ffffff 10%,
      rgba(255, 255, 255, 0) 42%
    );
    background: -ms-linear-gradient(
      left,
      #ffffff 10%,
      rgba(255, 255, 255, 0) 42%
    );
    background: linear-gradient(
      to right,
      #ffffff 10%,
      rgba(255, 255, 255, 0) 42%
    );
    position: relative;
    -webkit-animation: load3 1.4s infinite linear;
    animation: load3 1.4s infinite linear;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
  }
  .loader:before {
    width: 50%;
    height: 50%;
    background: #ffffff;
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: "";
  }
  .loader:after {
    background: #0dc5c1;
    width: 75%;
    height: 75%;
    border-radius: 50%;
    content: "";
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  @-webkit-keyframes load3 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load3 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

export default ({
  logoLinkUrl = "#",
  illustrationImageSrc = illustration,
  headingText = "Sign Up For Treact",
  socialButtons = [
    {
      iconImageSrc: googleIconImageSrc,
      text: "Sign Up With Google",
      url: "https://google.com",
    },
    {
      iconImageSrc: twitterIconImageSrc,
      text: "Sign Up With Twitter",
      url: "https://twitter.com",
    },
  ],
  submitButtonText = "Sign Up",
  SubmitButtonIcon = SignUpIcon,
  tosUrl = "#",
  privacyPolicyUrl = "#",
  signInUrl = "#",
}) => {
  const [studentDetails, setStudentDetails] = useState({
    first_name: "",
    last_name: "",
    Email: "",
    reg_num: "",
    campus: "",
    college: "",
    course: "",
    discipline: "",
    gender: "",
    age: "",
    enroll_date: "",
    finish_date: "",
    password: "",
    confirm_password: "",
  });

  const onchange = (e) => {
    console.log("e name is:", e.target.value);
    setStudentDetails({ ...studentDetails, [e.target.name]: e.target.value });
  };

  const { register, loading, error, clearErrors, success, isAuthenticated } =
    useContext(studentRegisterContext);

  useEffect(() => {
    return () => {
      clearErrors();
    };
  }, []);

  const {
    first_name,
    last_name,
    Email,
    reg_num,
    campus,
    college,
    course,
    discipline,
    gender,
    age,
    enroll_date,
    finish_date,
    password,
    confirm_password,
  } = studentDetails;

  const onsubmit = (e) => {
    e.preventDefault();
    console.log("on submit");
    register({     
      Email,
      reg_num,      
      password,
      confirm_password,
    });
    // register({
    //   first_name,
    //   last_name,
    //   Email,
    //   reg_num,
    //   campus,
    //   college,
    //   course,
    //   discipline,
    //   gender,
    //   age,
    //   enroll_date,
    //   finish_date,
    //   password,
    //   confirm_password,
    // });
    clearErrors();
  };

  return (
    <AnimationRevealPage>
      <Container>
        <Content>
          <MainContainer>
            <LogoLink href={logoLinkUrl}>
              <LogoImage src={logo} />
            </LogoLink>
            <MainContent>
              <Heading>{headingText}</Heading>
              {success ? (
                <p tw="mt-8 text-sm text-green-600 text-center">
                  Successfully Registered. You can now Login{" "}
                  <a
                    href="http://localhost:3000/components/innerPages/LoginPage"
                    tw="border-b border-gray-500 border-dotted"
                  >
                    Sign In
                  </a>
                </p>
              ) : (
                <FormContainer>
                  {/* <SocialButtonsContainer>
                {socialButtons.map((socialButton, index) => (
                  <SocialButton key={index} href={socialButton.url}>
                    <span className="iconContainer">
                      <img src={socialButton.iconImageSrc} className="icon" alt="" />
                    </span>
                    <span className="text">{socialButton.text}</span>
                  </SocialButton>
                ))}
              </SocialButtonsContainer> */}
                  <DividerTextContainer>
                    <DividerText> Sign up with your e-mail</DividerText>
                  </DividerTextContainer>
                  <Form onSubmit={onsubmit}>
                  
                    <Input
                      type="email"
                      placeholder="Enter your Email"
                      onChange={onchange}
                      name="Email"
                      value={studentDetails.email}
                      required
                    />
                    <Input
                      type="text"
                      onChange={onchange}
                      name="reg_num"
                      value={studentDetails.reg_num}
                      placeholder="Enter your registration number"
                      required
                    />
                    
                    <div tw="mt-6 text-xs text-gray-600 ">
                      Enter your password{" "}
                    </div>
                    <Input
                      type="password"
                      onChange={onchange}
                      name="password"
                      value={studentDetails.password}
                      placeholder="Password"
                      required
                    />
                    <div tw="mt-6 text-xs text-gray-600 ">
                      Confirm your password{" "}
                    </div>
                    <Input
                      type="password"
                      placeholder="confirm password"
                      onChange={onchange}
                      name="confirm_password"
                      value={studentDetails.confirm_password}
                      placeholder="Confirm Password..."
                      required
                    />
                    {loading ? (
                      <Loader>
                        <div className="loader">Loading...</div>
                      </Loader>
                    ) : (
                      <SubmitButton type="submit">
                        <SubmitButtonIcon className="icon" />
                        <span className="text">{submitButtonText}</span>
                      </SubmitButton>
                    )}
                    {error ? <p style={{ color: "red" }}>{error}</p> : null}
                    <p tw="mt-8 text-sm text-gray-600 text-center">
                      Already have an account?{" "}
                      <a
                        href="http://localhost:3000/components/innerPages/LoginPage"
                        tw="border-b border-gray-500 border-dotted"
                      >
                        Sign In
                      </a>
                    </p>
                  </Form>
                </FormContainer>
              )}
            </MainContent>
          </MainContainer>
          <IllustrationContainer>
            <IllustrationImage imageSrc={illustrationImageSrc} />
          </IllustrationContainer>
        </Content>
      </Container>
    </AnimationRevealPage>
  );
};