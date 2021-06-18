import React, {useState} from 'react'
import CircularProgressWithLabel from "./progress";
import {
    MailOutline as MailIcon,
    FileCopyOutlined as FileIcon,
    CloudDownloadOutlined as DownloadIcon,
  } from "@material-ui/icons";
  
import {
    Card,
    Button,
    useTheme,
    makeStyles,
    Typography,
  } from "@material-ui/core";

  const useStyles = makeStyles((theme) => ({

  })); 

function Tab() {
    const theme = useTheme();
    
    const [selectedTab, setSelectedTab] = useState("tab1");

    const handleTabChange = (e) => {
    setSelectedTab(e);
  };
    return (
        <div>
            <div className="mt-3 d-flex" style={{ maxWidth: 576 }}>
                <Button
                variant="outlined"
                id="tab1"
                className="me-2 w-100"
                onClick={() => handleTabChange("tab1")}
                style={{
                    borderColor:
                    selectedTab === "tab1" ? theme.palette.info.dark : "#3a3a3a",
                    color: selectedTab === "tab1" ? theme.palette.info.dark : "#3a3a3a",
                }}
                >
                Tab 1
                </Button>
                <Button
                variant="outlined"
                id="tab2"
                className="ms-2 w-100"
                onClick={() => handleTabChange("tab2")}
                style={{
                    borderColor:
                    selectedTab === "tab2" ? theme.palette.info.dark : "#3a3a3a",
                    color: selectedTab === "tab2" ? theme.palette.info.dark : "#3a3a3a",
                }}
                >
                Tab 2
                </Button>
        </div>
        <div className="row mt-3">
        {selectedTab === "tab1" ? (
          <>
            <div className="col-md-6 col-xxl-3 mb-3 pr-md-2">
              <Card>
                <div className="py-2 px-4 d-flex align-items-center">
                  <CircularProgressWithLabel
                    color={theme.palette.info.dark}
                    value={85}
                  />
                  <div className="ms-3">
                    <Typography>50/200</Typography>
                    <Typography>TYPE1</Typography>
                  </div>
                </div>
              </Card>
            </div>
            <div className="col-md-6 col-xxl-3 mb-3 pl-md-2">
              <Card>
                <div className="py-2 px-4 d-flex align-items-center">
                  <MailIcon
                    style={{
                      height: 60,
                      width: 60,
                      color: theme.palette.info.dark,
                    }}
                  />
                  <div className="ms-3">
                    <Typography>1356</Typography>
                    <Typography>TYPE2</Typography>
                  </div>
                </div>
              </Card>
            </div>
            <div className="col-md-6 col-xxl-3 mb-3 pl-md-2">
              <Card>
                <div className="py-2 px-4 d-flex align-items-center">
                  <FileIcon
                    style={{
                      height: 60,
                      width: 60,
                      color: theme.palette.info.dark,
                    }}
                  />
                  <div className="ms-3">
                    <Typography>1258</Typography>
                    <Typography>TYPE3</Typography>
                  </div>
                </div>
              </Card>
            </div>
            <div className="col-md-6 col-xxl-3 mb-3 pl-md-2">
              <Card>
                <div className="py-2 px-4 d-flex align-items-center">
                  <DownloadIcon
                    style={{
                      height: 60,
                      width: 60,
                      color: theme.palette.info.dark,
                    }}
                  />
                  <div className="ms-3">
                    <Typography>534</Typography>
                    <Typography>TYPE4</Typography>
                  </div>
                </div>
              </Card>
            </div>
          </>
        ) : (
          <>
            <div className="col-md-6 col-xxl-3 mb-3 pr-md-2">
              <Card>
                <div className="py-2 px-4 d-flex align-items-center">
                  <CircularProgressWithLabel
                    color={theme.palette.info.dark}
                    value={85}
                  />
                  <div className="ms-3">
                    <Typography>50/200</Typography>
                    <Typography>TYPE1</Typography>
                  </div>
                </div>
              </Card>
            </div>
            <div className="col-md-6 col-xxl-3 mb-3 pl-md-2">
              <Card>
                <div className="py-2 px-4 d-flex align-items-center">
                  <MailIcon
                    style={{
                      height: 60,
                      width: 60,
                      color: theme.palette.info.dark,
                    }}
                  />
                  <div className="ms-3">
                    <Typography>1356</Typography>
                    <Typography>TYPE2</Typography>
                  </div>
                </div>
              </Card>
            </div>
          </>
        )}
      </div>
        </div>
    )
}

export default Tab
