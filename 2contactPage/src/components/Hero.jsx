import React, { useState } from "react";
import heroImg from "../assets/Service 24_7-pana 1.svg";
import Button from "./Button";
import Form from "./Form";

const Hero = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [submittedData, setSubmittedData] = useState(false);
  function onSubmit(e) {
    e.preventDefault();
    setSubmittedData({
      name,
      email,
      text,
    });
    console.log("Submitted Name:", name);
    console.log("Submitted Email:", email);
    console.log("Submitted Text:", text);
  }
  return (
    <div className="flex items-center justify-center w-fit h-150 gap-20 ml-49.5">
      <div className="w-118 h-114.25 23px flex flex-col gap-4">
        <div className="w-fit  h-fit flex flex-col gap-4.25">
          <div className="w-fit h-fit flex justify-between items-center gap-8">
            <Button
              isBlack={true}
              buttonLogo={
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 2.5H18V14.5H3.17L2 15.67V2.5ZM2 0.5C0.9 0.5 0.00999999 1.4 0.00999999 2.5L0 20.5L4 16.5H18C19.1 16.5 20 15.6 20 14.5V2.5C20 1.4 19.1 0.5 18 0.5H2ZM4 10.5H16V12.5H4V10.5ZM4 7.5H16V9.5H4V7.5ZM4 4.5H16V6.5H4V4.5Z"
                    fill="white"
                  />
                </svg>
              }
              buttonText="VIA SUPPORT CHAT"
            />
            <Button
              isBlack={true}
              buttonLogo={
                <svg
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.62 8.29C5.06 11.12 7.38 13.43 10.21 14.88L12.41 12.68C12.68 12.41 13.08 12.32 13.43 12.44C14.55 12.81 15.76 13.01 17 13.01C17.55 13.01 18 13.46 18 14.01V17.5C18 18.05 17.55 18.5 17 18.5C7.61 18.5 0 10.89 0 1.5C0 0.95 0.45 0.5 1 0.5H4.5C5.05 0.5 5.5 0.95 5.5 1.5C5.5 2.75 5.7 3.95 6.07 5.07C6.18 5.42 6.1 5.81 5.82 6.09L3.62 8.29Z"
                    fill="white"
                  />
                </svg>
              }
              buttonText="VIA CALL"
            />
          </div>
          <Button
            isBlack={false}
            buttonLogo={
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.5 2.5H18.5V14.5H3.67L2.5 15.67V2.5ZM2.5 0.5C1.4 0.5 0.51 1.4 0.51 2.5L0.5 20.5L4.5 16.5H18.5C19.6 16.5 20.5 15.6 20.5 14.5V2.5C20.5 1.4 19.6 0.5 18.5 0.5H2.5ZM4.5 10.5H16.5V12.5H4.5V10.5ZM4.5 7.5H16.5V9.5H4.5V7.5ZM4.5 4.5H16.5V6.5H4.5V4.5Z"
                  fill="black"
                />
              </svg>
            }
            buttonText="VIA EMAIL FORM"
          />
        </div>

        <div>
          <form onSubmit={onSubmit}>
            <div className="flex flex-col gap-5 items-center">
              <div className="relative">
                <Form
                  columnName="Name"
                  formType="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="relative">
                <Form
                  columnName="Email"
                  formType="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="relative">
                <Form
                  columnName="Text"
                  formType="textarea"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
              </div>
            </div>
            <div className=" flex flex-col items-end justify-center gap-2.5">
              <button className=" cursor-pointer mt-2.5 w-55 h-fit rounded px-2.5 py-4.5 bg-black text-white ">
                Submit
              </button>
            </div>
          </form>
        </div>

        {submittedData && (
          <div className="mt-4 text-left">
            <p>
              <strong>Name:</strong> {submittedData.name}
            </p>
            <p>
              <strong>Email:</strong> {submittedData.email}
            </p>
            <p>
              <strong>Text:</strong> {submittedData.text}
            </p>
          </div>
        )}

        <div></div>
      </div>

      <div className="w-152 flex flex-col justify-center h-153.75">
        <img
          className="w-127.2175 h-122.0775 mt-23 ml-11"
          src={heroImg}
          alt="hero img"
        />
      </div>
    </div>
  );
};

export default Hero;
