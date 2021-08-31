import React, { useContext, useEffect } from "react";
import studentRegisterContext from "../context/Register/studentRegisterContext";
import { useHistory } from "react-router-dom";

function Profile_Settings(props) {
   const authContext= useContext(studentRegisterContext);

   useEffect(() => {
     console.log("calling load user ")
    authContext.loadUser();
   }, []);

  console.log('this is the profile')
  return (
    <>
      <div className="container-fluid px-6 py-4">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12">
            {/* Page header */}
            <div>
              <div
                className="border-bottom pb-4 mb-4 d-flex align-items-center
                  justify-content-between"
              >
                <div className="mb-2 mb-lg-0">
                  <h3 className="mb-0 fw-bold">General</h3>
                </div>
                <div>
                  <a href="#" className="btn btn-primary">
                    Button
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-8">
          <div className="col-xl-3 col-lg-4 col-md-12 col-12">
            <div className="mb-4 mb-lg-0">
              <h4 className="mb-1">General Setting</h4>
              <p className="mb-0 fs-5 text-muted">
                Profile configuration settings{" "}
              </p>
            </div>
          </div>
          <div className="col-xl-9 col-lg-8 col-md-12 col-12">
            {/* card */}
            <div className="card">
              {/* card body */}
              <div className="card-body">
                <div className=" mb-6">
                  <h4 className="mb-1">General Settings</h4>
                </div>
                {/* <div className="row align-items-center mb-8">
                        <div className="col-md-3 mb-3 mb-md-0">
                          <h5 className="mb-0">Avatar</h5>
                        </div>
                        <div className="col-md-9">
                          <div className="d-flex align-items-center">
                            <div className="me-3">
                              <img
                                src="../assets/images/avatar/avatar-5.jpg"
                                className="rounded-circle avatar avatar-lg"
                                alt=""
                              />
                            </div>
                            <div>
                              <button
                                type="submit"
                                className="btn btn-outline-white
                            me-1"
                              >
                                Change
                              </button>
                              <button
                                type="submit"
                                className="btn btn-outline-white"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </div> */}
                {/* col */}
                {/* <div className="row mb-8"> */}
                {/* <div className="col-md-3 mb-3 mb-md-0"> */}
                {/* heading */}
                {/* <h5 className="mb-0">Cover photo</h5>
                        </div> */}
                {/* <div className="col-md-9"> */}
                {/* dropzone input */}
                {/* <div>
                            <form
                              action="#"
                              className="dropzone mb-3 border-dashed"
                            >
                              <div className="fallback">
                                <input name="file" type="file" multiple />
                              </div>
                            </form>
                            <button
                              type="submit"
                              className="btn btn-outline-white"
                            >
                              Change
                            </button>
                          </div> */}
                {/* </div> */}
                {/* </div> */}
                <div>
                  {/* border */}
                  <div className="mb-6">
                    <h4 className="mb-1">Basic information</h4>
                  </div>
                  <form>
                    {/* row */}
                    <div className="mb-3 row">
                      <label
                        htmlFor="fullName"
                        className="col-sm-4 col-form-label
                          form-label"
                      >
                        Full name
                      </label>
                      <div className="col-sm-4 mb-3 mb-lg-0">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First name"
                          id="fullName"
                          required
                        />
                      </div>
                      <div className="col-sm-4">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last name"
                          id="lastName"
                          required
                        />
                      </div>
                    </div>
                    {/* row */}
                    <div className="mb-3 row">
                      <label
                        htmlFor="email"
                        className="col-sm-4 col-form-label
                          form-label"
                      >
                        Email
                      </label>
                      <div className="col-md-8 col-12">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                          id="email"
                          required
                        />
                      </div>
                    </div>
                    {/* row */}
                    <div className="mb-3 row">
                      <label
                        htmlFor="registration_Number"
                        className="col-sm-4 col-form-label
                          form-label"
                      >
                        Registration Number{" "}
                        <span className="text-muted">(reg num)</span>
                      </label>
                      <div className="col-md-8 col-12">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="rgNum"
                          id="rgNum"
                          required
                        />
                      </div>
                    </div>
                    {/* row */}
                    <div className="mb-3 row">
                      <label
                        htmlFor="campus"
                        className="col-sm-4 col-form-label
                          form-label"
                      >
                        Gender
                      </label>
                      <div className="col-md-8 col-12">
                        <select className="form-select" id="location">
                          <option select>Select Gender</option>
                          <option value={1}>Male</option>
                          <option value={2}>Female</option>
                        </select>
                      </div>
                    </div>
                    {/* row */}
                    <div className="mb-3 row">
                      <label
                        htmlFor="age"
                        className="col-sm-4 col-form-label
                          form-label"
                      >
                        Age
                      </label>
                      <div className="col-md-8 col-12">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Your Age"
                          id="addressLine"
                          required
                        />
                      </div>
                      {/* button */}
                      <div className="offset-md-4 col-md-8 col-12 mt-3">
                        <button
                          type="submit"
                          className="btn btn-primary"
                          style={{ color: "#E5E5E5" }}
                        >
                          <span> Save Changes </span>
                        </button>
                      </div>
                    </div>
                    {/* row */}

                    {/* row */}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-8">
          <div className="col-xl-3 col-lg-4 col-md-12 col-12">
            <div className="mb-4 mb-lg-0">
              <h4 className="mb-1">School Profile</h4>
              <p className="mb-0 fs-5 text-muted">edit your school details </p>
            </div>
          </div>
          <div className="col-xl-9 col-lg-8 col-md-12 col-12">
            {/* card */}
            <div className="card" id="edit">
              {/* card body */}
              <div className="card-body">
                <div className="mb-6">
                  <h4 className="mb-1">School</h4>
                </div>
                <form>
                  {/* row */}
                  <div className="mb-3 row">
                    {/* label */}

                    <label
                      htmlFor="campus"
                      className="col-sm-4 col-form-label
                          form-label mb-1"
                    >
                      Campus
                    </label>
                    <div className="col-md-8 col-12">
                      <select className="form-select" id="location">
                        <option select>Select Country</option>
                        <option value={1}>India</option>
                        <option value={2}>UK</option>
                        <option value={3}>USA</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-3 row">
                    {/* label */}

                    <label
                      htmlFor="college"
                      className="col-sm-4 col-form-label
                          form-label mb-1"
                    >
                      Faculty
                    </label>
                    <div className="col-md-8 col-12">
                      <select className="form-select" id="location">
                        <option select>Select Country</option>
                        <option value={1}>India</option>
                        <option value={2}>UK</option>
                        <option value={3}>USA</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-3 row">
                    {/* label */}

                    <label
                      htmlFor="course"
                      className="col-sm-4 col-form-label
                          form-label mb-1"
                    >
                      Course
                    </label>
                    <div className="col-md-8 col-12">
                      <select className="form-select" id="location">
                        <option select>Select Country</option>
                        <option value={1}>India</option>
                        <option value={2}>UK</option>
                        <option value={3}>USA</option>
                      </select>
                    </div>
                  </div>
                  {/* row */}
                  <div className="mb-3 row">
                    <label
                      htmlFor="currentPassword"
                      className="col-sm-4
                         col-form-label form-label"
                    >
                      Discipline
                    </label>
                    <div className="col-md-8 col-12">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your Discipline"
                        id="currentPassword"
                        required
                      />
                    </div>
                  </div>
                  {/* row */}
                  {/* row */}
                  <div className="mb-3 row">
                    <label
                      htmlFor="addressLine"
                      className="col-sm-4 col-form-label
                          form-label"
                    >
                      Year of Enrollment
                    </label>
                    <div className="col-md-8 col-12">
                      <input
                        type="date"
                        className="form-control"
                        placeholder="date of enrollment"
                        id="addressLine"
                        required
                      />
                    </div>
                  </div>
                  {/* row */}
                  {/* row */}
                  <div className="mb-3 row">
                    <label
                      htmlFor="addressLine"
                      className="col-sm-4 col-form-label
                          form-label"
                    >
                      Year of graduation
                    </label>
                    <div className="col-md-8 col-12">
                      <input
                        type="date"
                        className="form-control"
                        placeholder="Year of graduation"
                        id="addressLine"
                        required
                      />
                    </div>
                    {/* button */}
                    <div className="offset-md-4 col-md-8 col-12 mt-3">
                      <button type="submit" className="btn btn-primary">
                        Save Changes
                      </button>
                    </div>
                  </div>
                  {/* row */}
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* BEGINNING OF TEST */}
        <div className="row mb-8">
          <div className="col-xl-3 col-lg-4 col-md-12 col-12">
            <div className="mb-4 mb-lg-0">
              <h4 className="mb-1">Email Setting</h4>
              <p className="mb-0 fs-5 text-muted">
                Add an email settings to profile{" "}
              </p>
            </div>
          </div>
          <div className="col-xl-9 col-lg-8 col-md-12 col-12">
            {/* card */}
            <div className="card" id="edit">
              {/* card body */}
              <div className="card-body">
                <div className="mb-6">
                  <h4 className="mb-1">Email</h4>
                </div>
                <form>
                  {/* row */}
                  <div className="mb-3 row">
                    {/* label */}
                    <label
                      htmlFor="newEmailAddress"
                      className="col-sm-4
                         col-form-label form-label"
                    >
                      New email
                    </label>
                    <div className="col-md-8 col-12">
                      {/* input */}
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email address"
                        id="newEmailAddress"
                        required
                      />
                    </div>
                    {/* button */}
                    <div className="offset-md-4 col-md-8 col-12 mt-3">
                      <button type="submit" className="btn btn-primary">
                        Save Changes
                      </button>
                    </div>
                  </div>
                </form>
                <div className="mb-6 mt-6">
                  <h4 className="mb-1">Change your password</h4>
                </div>
                <form>
                  {/* row */}
                  <div className="mb-3 row">
                    <label
                      htmlFor="currentPassword"
                      className="col-sm-4
                        col-form-label form-label"
                    >
                      Current password
                    </label>
                    <div className="col-md-8 col-12">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Enter Current password"
                        id="currentPassword"
                        required
                      />
                    </div>
                  </div>
                  {/* row */}
                  <div className="mb-3 row">
                    <label
                      htmlFor="currentNewPassword"
                      className="col-sm-4
                        col-form-label form-label"
                    >
                      New password
                    </label>
                    <div className="col-md-8 col-12">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Enter New password"
                        id="currentNewPassword"
                        required
                      />
                    </div>
                  </div>
                  {/* row */}
                  <div className="row align-items-center">
                    <label
                      htmlFor="confirmNewpassword"
                      className="col-sm-4
                        col-form-label form-label"
                    >
                      Confirm new password
                    </label>
                    <div className="col-md-8 col-12 mb-2 mb-lg-0">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Confirm new password"
                        id="confirmNewpassword"
                        required
                      />
                    </div>
                    {/* list */}
                    <div className="offset-md-4 col-md-8 col-12 mt-4">
                      <h6 className="mb-1">Password requirements:</h6>
                      <p>Ensure that these requirements are met:</p>
                      <ul>
                        <li> Minimum 8 characters long the more, the better</li>
                        <li>At least one lowercase character</li>
                        <li>At least one uppercase character</li>
                        <li>
                          At least one number, symbol, or whitespace character
                        </li>
                      </ul>
                      <button type="submit" className="btn btn-primary">
                        Save Changes
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* test  */}
        <div className="row mb-8">
          <div className="col-xl-3 col-lg-4 col-md-12 col-12">
            <div className="mb-4 mb-lg-0">
              <h4 className="mb-1">Preferences</h4>
              <p className="mb-0 fs-5 text-muted">
                Configure your preferences{" "}
              </p>
            </div>
          </div>
          <div className="col-xl-9 col-lg-8 col-md-12 col-12">
            <div className="card" id="preferences">
              <div className="card-body">
                <div className="mb-6">
                  <h4 className="mb-1">Upload Documents</h4>
                </div>
                <form>
                  {/* row */}
                  <div className="mb-3 row">
                    {/* label */}
                    <label
                      htmlFor="docs"
                      className="col-sm-4
                         col-form-label form-label"
                    >
                      upload cv
                    </label>
                    <div className="col-md-8 col-12">
                      {/* input */}
                      <input
                        type="file"
                        className="form-control"
                        placeholder="Upload cv"
                        id="newEmailAddress"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    {/* label */}
                    <label
                      htmlFor="docs"
                      className="col-sm-4
                         col-form-label form-label"
                    >
                      upload cover letter
                    </label>
                    <div className="col-md-8 col-12">
                      {/* input */}
                      <input
                        type="file"
                        className="form-control"
                        placeholder="Upload cover letter"
                        id="cover letter"
                        required
                      />
                    </div>
                    {/* button */}
                  </div>
                  <div className="mb-3 row">
                    {/* label */}
                    <label
                      htmlFor="docs"
                      className="col-sm-4
                         col-form-label form-label"
                    >
                      upload certificates
                    </label>
                    <div className="col-md-8 col-12">
                      {/* input */}
                      <input
                        type="file"
                        className="form-control"
                        placeholder="Upload certificates"
                        id="cover letter"
                        required
                      />
                    </div>
                    {/* button */}
                  </div>
                  <div className="mb-3 row">
                    {/* label */}
                    <label
                      htmlFor="docs"
                      className="col-sm-4
                         col-form-label form-label"
                    >
                      Enter Your Skills
                    </label>
                    <div className="col-md-8 col-12">
                      {/* input */}
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your skills"
                        id="Skills"
                        required
                      />
                    </div>
                    {/* button */}
                    <div className="offset-md-4 col-md-8 col-12 mt-3">
                      <button type="submit" className="btn btn-primary">
                        Save Changes
                      </button>
                    </div>
                  </div>
                  {/* row */}
                  {/* <div className="mb-3 row">
                          <label
                            htmlFor="timeZone"
                            className="col-sm-4 col-form-label
                          form-label"
                          >
                            Time Zone
                          </label>
                          <div className="col-md-8 col-12"> */}
                  {/* <select className="form-select" id="timeZone">
                              <option selected>GMT +5.30</option>
                              <option value={1}>GMT +5.30</option>
                              <option value={2}>GMT +5.30</option>
                              <option value={3}>GMT +5.30 </option>
                            </select> */}
                  {/* </div>
                        </div> */}
                  {/* row */}
                  {/* <div className="mb-3 row">
                          <label
                            htmlFor="dateFormat"
                            className="col-sm-4 col-form-label
                        form-label"
                          >
                            Date Format
                          </label>
                          <div className="col-md-8 col-12"> */}
                  {/* <select className="form-select" id="dateFormat">
                              <option selected>No Preference</option>
                              <option value="Preference">Preference</option>
                            </select> */}
                  {/* </div>
                        </div> */}
                  {/* row */}
                  {/* <div className="mb-3 row">
                          <label className="col-sm-4 col-form-label form-label">
                            Default
                          </label>
                          <div className="col-md-8 col-12">
                            <div
                              className="form-check custom-radio
                          form-check-inline"
                            >
                              <input
                                type="radio"
                                id="customRadioInlineOn"
                                name="customRadioInline"
                                className="form-check-input"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="customRadioInlineOn"
                              >
                                On
                              </label>
                            </div>
                            <div
                              className="form-check custom-radio
                          form-check-inline"
                            >
                              <input
                                type="radio"
                                id="customRadioInlineOff"
                                name="customRadioInline"
                                className="form-check-input"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="customRadioInlineOff"
                              >
                                Off
                              </label>
                            </div>
                          </div>
                        </div> */}
                  {/* row */}
                  {/* <div className="mb-3 row">
                          <div className="col-md-4 col-12">
                            <label className="mb-0 form-label">
                              Choose option default
                            </label>
                          </div>
                          <div className="col-md-8 col-12">
                            <div className="form-check  mb-2">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="customChecktellMe"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="customChecktellMe"
                              >
                                Tell me
                              </label>
                            </div>
                            <div className="form-check  mb-2">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="customCheckemail"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="customCheckemail"
                              >
                                Open e-mail
                              </label>
                            </div>
                            <div className="form-check  mb-2">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="customCheckemailTwo"
                                defaultChecked
                              />
                              <label
                                className="form-check-label"
                                htmlFor="customCheckemailTwo"
                              >
                                Show default
                              </label>
                            </div>
                          </div>
                          <div className="offset-md-4 col-md-8 col-12 mt-2">
                            <button type="submit" className="btn btn-primary">
                              Save Changes
                            </button>
                          </div>
                        </div> */}
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-12 col-12">
            <div className="mb-4 mb-lg-0">
              <h4 className="mb-1">Delete Account</h4>
              <p className="mb-0 fs-5 text-muted">
                Easily set up social media accounts
              </p>
            </div>
          </div>
          <div className="col-xl-9 col-lg-8 col-md-12 col-12">
            {/* card */}
            <div className="card mb-6">
              {/* card body */}
              <div className="card-body">
                <div className="mb-6">
                  <h4 className="mb-1">Danger Zone </h4>
                </div>
                <div>
                  {/* text */}
                  <p>
                    Delete any and all content you have, such as certificates,
                    basic details, emails,etc.
                  </p>
                  <a href="#" className="btn btn-danger">
                    Delete Account
                  </a>
                  <p className="small mb-0 mt-3">
                    Feel free to contact with any{" "}
                    <a href="#">sample@uonbi.ac.ke for</a> questions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile_Settings;
