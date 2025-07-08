import React, { useRef, useState, useEffect } from "react";
import classes from "./LandingPage.module.css";
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import fireStorage from "../../firebaseConfig";
import axios from "axios";
import VideoSelectionModal from "../CornerSelecttion/VideoSelectionModal";
import ReactPlayer from "react-player";


const LandingPage = () => {
  const [outVidLink, setOutVidLink] = useState("");
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer); // cleanup
  }, []);

  //


  const handleUploadAndConvert = async () => {
    // if (!file || !rectangleCoordinates) {
    //   alert("Please choose a file first!");
    // }
    // const vidId = generateRandomString(8);
    // const storageRef = ref(fireStorage, `${vidId}.mp4`);
    // const uploadTask = uploadBytesResumable(storageRef, file);

    // uploadTask.on(
    //   "state_changed",
    //   (snapshot) => {
    //     const percent = Math.round(
    //       (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    //     );

    //     // update progress
    //     setPercent(percent);
    //   },
    //   (err) => alert("ERROR: 404 TROLOLOL"),
    //   () => {
    //     // download url
    //     getDownloadURL(uploadTask.snapshot.ref).then((url) => {
    //       handleBackendCall(
    //         url,
    //         vidId,
    //         rectangleCoordinates["x"],
    //         rectangleCoordinates["y"]
    //       );
    //     });
    //   }
    // );
  };

  // const handleBackendCall = async (vidUrl, vidId, x, y) => {
  //   try {
  //     axios
  //       .post(
  //         `https://hamesjan.pythonanywhere.com/api/process-video?video_url=${vidUrl}&video_name=${vidId}&x=${x}&y=${y}`
  //       )
  //       .then((response) => {
  //         console.log(response.data); // Handle the response data
  //         setOutVidLink(response.data.processed_video_url);
  //         window.open(response.data.processed_video_url, "_blank");
  //       })
  //       .catch((error) => {
  //         alert("ERROR: 404 TROLOLOL");
  //         console.error(error); // Handle any errors
  //       });
  //   } catch (error) {
  //     alert("ERROR: 404 TROLOLOL");
  //     console.error(
  //       "There has been a problem with your fetch operation:",
  //       error
  //     );
  //   }
  // };

  const downloadVidLink = () => {
    window.open(outVidLink, "_blank"); // Opens the link in a new tab
  };

  return (
    <div className={classes.outer_div}>
      <div className={classes.info_header}>
        <p style={{fontSize: "40px"}}>TrySurfNow is a clip farm</p>
      </div>
        <div className={classes.video_box}>
              <p style={{ marginLeft: "10px" }}>{now.toLocaleString()}</p>
           <div className={classes.camera_container}>
            <img
              src="http://192.168.1.174:8000" // replace with your Pi's actual IP if different
              // src="https://camera-stream.fly.dev/stream" // replace with your Pi's actual IP if different
              alt="Live MJPEG Stream"
              className={classes.camera_stream}
            />
          </div>
        </div>
      </div>
  );
};

export default LandingPage;
