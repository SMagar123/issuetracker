import React, { useState, useEffect } from "react";
// Import the main component
import { Viewer } from "@react-pdf-viewer/core";
// Plugins
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
// Worker
import { Worker } from "@react-pdf-viewer/core";
import { getSingleIssue } from "../service/api";
import { useParams } from "react-router-dom";
import { Navbar } from "../components";
export const RequirementView = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const { id } = useParams();
  const [requirementList, setRequirementList] = useState();
  useEffect(() => {
    getIssueDetailofUser();
  }, []);
  const getIssueDetailofUser = async () => {
    let response = await getSingleIssue(id);
    setRequirementList(response.data);
  };
  return (
    <>
      <Navbar />
      <div className="requirement__view">
        {requirementList === undefined ? (
          <h4>Sorry no file found !!!"</h4>
        ) : (
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.6.172/build/pdf.worker.min.js">
            <Viewer
              fileUrl={`/requirements/${requirementList?.requirement[0]}`}
              plugins={[defaultLayoutPluginInstance]}
            />
          </Worker>
        )}
      </div>
    </>
  );
};
