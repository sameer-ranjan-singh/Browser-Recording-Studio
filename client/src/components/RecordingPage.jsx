import { Button } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { ReactMediaRecorder } from "react-media-recorder";
import axios from 'axios';
import { Base_URL } from '../config';

function RecordingPage(){
  const [recordings, setRecordings] = useState([]);

  const handleRecordingComplete = async (blobUrl, recordingType) => {
    console.log('Recording completed. Blob URL:', blobUrl);
    const userId = req.user.id;
    try {
      
      const response = await axios.post(`${Base_URL}/admin/recordings`, {
        userId: userId, 
        recordingUrl: blobUrl,
        recordingType: recordingType,
      },{
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
      }
      });
      const newRecording = response.data;
      setRecordings(prevRecordings => [...prevRecordings, newRecording]);
    } catch (error) {
      console.error('Error storing recording:', error);
    }
  };

    
    const VideoPreview = ({ stream }) => {
      const videoRef = useRef(null);
    
      useEffect(() => {
        if (videoRef.current && stream) {
          videoRef.current.srcObject = stream;
        }
      }, [stream]);
    
      if (!stream) {
        return null;
      }
    
      return <video ref={videoRef} width={300} height={200} autoPlay controls />;
    };

   return (
    <div style={{ display: 'flex',  justifyContent: 'center',}}>
      <div  style={{paddingTop:60 }}>
        <div className='Screen'>
        <ReactMediaRecorder
        //For Screen 
        screen
        audio
    
        render = {({ status, startRecording, stopRecording, mediaBlobUrl,previewStream }) =>(
          <div className='videoSection'> 
            <p className='start-stop'>  {status} </p>
            <div className="VideoDimension" >
              <video src={mediaBlobUrl} controls autoPlay  width={300} height={200}  />
              <VideoPreview stream={previewStream} />
            </div>
            <div className='start-stop'>
            {status !== 'recording' ? (
            <Button onClick={startRecording('screen')}>Start Screen</Button>
          ) : (
            <Button onClick={()=>{
              stopRecording('screen')
              handleRecordingComplete
            }}>Stop Screen</Button>
          )}
            </div>
          </div>
        )}
       />
        </div>

        <div className='Screen'>
        <ReactMediaRecorder
        //For WebCam
        video
        audio
        render={({ status, startRecording, stopRecording, mediaBlobUrl,previewStream }) =>(
          <div className='videoSection'> 
            <p className='start-stop'> {status} </p>
            <div className="WebCamDimension">
              <video  src={mediaBlobUrl} controls autoPlay  width={300} height={200}  />
              <VideoPreview stream={previewStream} />
            </div>
            <div className='start-stop'>
            {status !== 'recording' ? (
            <Button onClick={startRecording('webcam')}>Start webcam</Button>
          ) : (
            <Button onClick={()=>{
              stopRecording('webcam')
              handleRecordingComplete
            }}>Stop webcam</Button>
          )}
            </div>
          </div>
        )}
       />
        </div>
      </div>
    </div>
   
  )
}
export default RecordingPage;
