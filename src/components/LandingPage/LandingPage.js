import React, { useRef, useState, useEffect } from "react";
import classes from "./LandingPage.module.css";
import VideoViewer from "../VideoViewer/VideoViewer";
import VideoSidebar from "./VideoSideBar/VideoSideBar";
import ControlPanel from "./ControlPanel/ControlPanel";


const LandingPage = () => {
  const [outVidLink, setOutVidLink] = useState("");


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
      <div style={{ display: 'flex', justifyContent:"space-between", width: "100%" }}>
          <div className={classes.video_box}>
            <VideoViewer/>
            <ControlPanel/>
            <div className={classes.info_header}>
              <p style={{fontSize: "40px"}}>TrySurfNow is a clip farm</p>
            </div>
            </div>
                <VideoSidebar />
          </div>
      </div>
  );
};

export default LandingPage;
