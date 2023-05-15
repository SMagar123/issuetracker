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
    <div className="requirement__view">
      {requirementList === undefined ? (
        ""
      ) : (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          <Viewer
            fileUrl={`/requirements/${requirementList.requirement[0]}`}
            plugins={[defaultLayoutPluginInstance]}
          />
        </Worker>
      )}
    </div>
  );
};
