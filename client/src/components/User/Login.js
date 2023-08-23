import React from "react";
const Login = () => {
  return (
    <>
      <div className="container w-50 mt-4 border border-secondary rounded">
        <form>
          {/* 2 column grid layout with text inputs for the first and last names */}
          <div className="row mb-4">
            <div className="col">
              <div className="">
              <label className="form-label" htmlFor="form6Example1">
                  Name
                </label>
                <input
                  type="text"
                  id="form6Example1"
                  className="form-control"
                />
                
              </div>
            </div>

          </div>
          {/* Text input */}
          <div className=" mb-4">
          <label className="form-label" htmlFor="form6Example3">
              Company name
            </label>
            <input type="text" id="form6Example3" className="form-control" />
           
          </div>
          {/* Text input */}
          <div className=" mb-4">
          <label className="form-label" htmlFor="form6Example4">
              Address
            </label>
            <input type="text" id="form6Example4" className="form-control" />
            
          </div>
          {/* Email input */}
          <div className="mb-4">
          <label className="form-label" htmlFor="form6Example5">
              Email
            </label>
            <input type="email" id="form6Example5" className="form-control" />
           
          </div>
          {/* Number input */}
          <div className="mb-4">
          <label className="form-label" htmlFor="form6Example6">
              Phone
            </label>
            <input type="text" id="form6Example6" className="form-control" />
          
          </div>
          
          {/* Submit button */}
          <button type="submit" className="btn btn-primary btn-block mb-4">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;