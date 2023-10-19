import React, { useEffect, useRef, useState } from "react";
import { Formik } from "formik";

const TeacherAddChapter= () => {
const flag ="chapter";
  const [selFile, setSelFile] = useState("")
  const fileInputRef= useRef();
const ChapterSubmit = async (formdata,{resetForm}) => {
  formdata.file = selFile;
  console.log(formdata);

  const response = await fetch("http://localhost:5000/chapter/add", {
    method: 'POST',
    body: JSON.stringify(formdata),
    headers: {
      "Content-Type": "application/json",
    },
  });
 console.log(response);


 // Clear the file inputs
 if (fileInputRef.current) {
   fileInputRef.current.value = null;
 }
resetForm();

};

const uploadFile=(e)=>{
  const file=e.target.files[0];
  setSelFile(file.name)  
  const fd = new FormData();
  fd.append("myfile", file); 
  fetch("http://localhost:5000/file/uploadfile", {
    method: "POST",
    body: fd,
  }).then((res) => {
    if (res.status === 200) {
    console.log("file uploaded");
    }
  });

}

    return (
        <>
        <div className="container w-50 mt-3" style={{border:"1px solid black"}}>
        <div className="row d-flex justify-content-center align-items-center ">
          <div>
            <Formik
              initialValues={{
                title: " ",
                description: " ",
                thumbnail: null,
                file: null,
                technology: " ",
              }}
              onSubmit={ChapterSubmit}
            >
              {({ values, handleChange, handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                  {/* 2 column grid layout with text inputs for the first and last names */}
                  <div className="row mb-4">
                    <form>
                      <div className="mb-0">
                        <label className="form-label" htmlFor="form6Example1">
                          Title
                        </label>
                        <input
                          type="text"
                          id="title"
                          className="form-control"
                          onChange={handleChange}
                          value={values.title}
                        />
                      </div>
                      <div className="mb-0">
                        <label className="form-label" htmlFor="form6Example6">
                          Description
                        </label>
                        <textarea
                          type="text"
                          className="form-control"
                          id="description"
                          rows="4"
                          onChange={handleChange}
                          value={values.description}
                        ></textarea>
                      </div>
                      <div className="mb-1">
                        <label className="form-label" htmlFor="form6Example5">
                          File
                        </label>
                        <input
                          type="file"
                          id="file"
                          className="form-control"
                          onChange={uploadFile}
                          ref={fileInputRef}
                        //   value={values.file}
                        />
                      </div>
                    </form>
                    {/* Submit button */}
                    <div>
                      <button
                        type="submit"
                        className="btn btn-primary btn-block mt-3"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
        </>
    )
}
export default TeacherAddChapter