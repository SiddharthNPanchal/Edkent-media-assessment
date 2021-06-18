import React from 'react'

import {
    Accordion,
    useTheme,
    makeStyles,
    AccordionSummary,
    Typography,
    AccordionDetails,
  } from "@material-ui/core";
  import {
    ExpandMore as ExpandMoreIcon,
    MailOutline as MailIcon,
    FileCopyOutlined as FileIcon,
    CloudDownloadOutlined as DownloadIcon,
    SettingsApplicationsOutlined as SettingsIcon,
    Description as DescriptionIcon,
    LanguageOutlined as LanguageIcon,
  } from "@material-ui/icons"

  const useStyles = makeStyles((theme) => ({
    colBorderLeft: {
      borderLeft: "1px solid #dee2e6",
      [theme.breakpoints.down("sm")]: {
        borderLeft: "none",
        borderBottom: "1px solid #dee2e6",
        paddingTop: "1rem",
        marginTop: "1rem",
      },
    },
    colBorderRight: {
      borderRight: "1px solid #dee2e6",
      [theme.breakpoints.down("sm")]: {
        borderRight: "none",
        borderTop: "1px solid #dee2e6",
        paddingBottom: "1rem",
        marginBottom: "1rem",
      },
    },
  }));
  

function Dummy() {
    const theme = useTheme();
    const classes = useStyles();
    return (
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h5">Lorem Ipsum</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="row w-100 text-center border-top pt-3">
            <div className={`col-sm-12 col-md-4 text-start`}>
              <Typography variant="h6">
                <div className="row">
                  <div className="col-sm-2 col-md-1">
                    <SettingsIcon
                      style={{
                        color: theme.palette.info.dark,
                        marginRight: "1rem",
                      }}
                    />
                  </div>
                  <div className="col-10">
                    Lorem ipsum is simply a dummy text.
                  </div>
                </div>
              </Typography>
              <ol>
                <li>
                  <div className="mt-3">
                    <Typography>Lorem ipsum is simply a dummy text.</Typography>
                    <Typography variant="caption">
                      Lorem ipsum is simply a dummy text.
                    </Typography>
                  </div>
                </li>
                <li>
                  <div className="mt-3">
                    <Typography>Lorem ipsum is simply a dummy text.</Typography>
                    <Typography variant="caption">
                      Lorem ipsum is simply a dummy text.
                    </Typography>
                  </div>
                </li>
                <li>
                  <div className="mt-3">
                    <Typography>Lorem ipsum is simply a dummy text.</Typography>
                    <Typography variant="caption">
                      Lorem ipsum is simply a dummy text.
                    </Typography>
                  </div>
                </li>
              </ol>
            </div>
            <div
              className={`col-sm-12 col-md-4 ${classes.colBorderLeft} ${classes.colBorderRight} text-start`}
            >
              <Typography variant="h6">
                <div className="row">
                  <div className="col-sm-2 col-md-1">
                    <LanguageIcon
                      style={{
                        color: theme.palette.info.dark,
                        marginRight: "1rem",
                      }}
                    />
                  </div>
                  <div className="col-10">
                    Lorem ipsum is simply a dummy text.
                  </div>
                </div>
              </Typography>
              <ol>
                <li>
                  <div className="mt-3">
                    <Typography>Lorem ipsum is simply a dummy text.</Typography>
                    <Typography variant="caption">
                      Lorem ipsum is simply a dummy text.
                    </Typography>
                  </div>
                </li>
                <li>
                  <div className="mt-3">
                    <Typography>Lorem ipsum is simply a dummy text.</Typography>
                    <Typography variant="caption">
                      Lorem ipsum is simply a dummy text.
                    </Typography>
                  </div>
                </li>
                <li>
                  <div className="mt-3">
                    <Typography>Lorem ipsum is simply a dummy text.</Typography>
                    <Typography variant="caption">
                      Lorem ipsum is simply a dummy text.
                    </Typography>
                  </div>
                </li>
              </ol>
            </div>
            <div className={`col-sm-12 col-md-4 text-start`}>
              <Typography variant="h6">
                <div className="row">
                  <div className="col-sm-2 col-md-1">
                    <DescriptionIcon
                      style={{
                        color: theme.palette.info.dark,
                        marginRight: "1rem",
                      }}
                    />
                  </div>
                  <div className="col-10">
                    Lorem ipsum is simply a dummy text.
                  </div>
                </div>
              </Typography>
              <ol>
                <li>
                  <div className="mt-3">
                    <Typography>Lorem ipsum is simply a dummy text.</Typography>
                    <Typography variant="caption">
                      Lorem ipsum is simply a dummy text.
                    </Typography>
                  </div>
                </li>
                <li>
                  <div className="mt-3">
                    <Typography>Lorem ipsum is simply a dummy text.</Typography>
                    <Typography variant="caption">
                      Lorem ipsum is simply a dummy text.
                    </Typography>
                  </div>
                </li>
                <li>
                  <div className="mt-3">
                    <Typography>Lorem ipsum is simply a dummy text.</Typography>
                    <Typography variant="caption">
                      Lorem ipsum is simply a dummy text.
                    </Typography>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    )
}

export default Dummy
