import React from "react";
import axios from "axios";
import UploadForm from "./components/UploadForm"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageList from "./components/ImageList";


const App = () => {
  return (
  <div style={{ maxWidth: 600, marginLeft: "auto", marginRight: "auto"}}>
    <ToastContainer />
    <h2>사진첩</h2>
    <UploadForm />
    <ImageList />
    </div>
  );
};

export default App;
