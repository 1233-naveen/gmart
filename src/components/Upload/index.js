import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Avatar } from "@mui/material";
import "../../App.css";

const Upload = () => {
  const [uploadMessage, setUploadMessage] = useState(""); 
  const [uploads, setUploads] = useState("");

  function onChangeFile(e) {
    setUploads(e);
  }

  function uploadFile(e) {
    e.preventDefault();

    if (uploads === "") {
      setUploadMessage("Please Upload File");
    } else {
      let formData = new FormData();
      formData.append("image", uploads[0]);
      axios
        .post("http://localhost:8000/users/upload/", formData)
        .then((res) => res)
        .then((res) => setUploadMessage(res.data));
      setUploads("");
    }
  }

  // useEffect(()=>{
  //     axios.get("http://localhost:8000/users/upload/1682500854254")
  //         .then((res) => res)
  //         .then((res) => {
  //             console.log(res)

  //         })

  // },[])

  return (
    <>
      <div>
        <form onSubmit={uploadFile}>
          <label htmlFor="profileImage">
            <Avatar />
          </label>
          <input
            type="file"
            name="image"
            id="profileImage"
            onChange={(e) => {
              onChangeFile(e.target.files);
            }}
          />

          <button type="submit">Submit</button>
        </form>
      </div>

      <div className={uploadMessage.length === 18 ? "upload-status" : ""}>
        {uploadMessage}
      </div>
      <div></div>
    </>
  );
};

export default Upload;
