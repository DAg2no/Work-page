import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Gmail from "../../../public/gmail.png";
import stackoverflow from "../../../public/stackoverflow.png";
import github from "../../../public/github.png";
import linkedin from "../../../public/linkedin.png";

const Btn = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          "& > *": {
            m: 1,
          },
        }}
      p={"1rem"}
      >
        <Stack direction="row" spacing={2}>
          <a href="mailto:danielscrip.zsh@gmail.com">
            <img
              src={Gmail}
              alt="Gmail"
              className="bg-transparent"
              style={{
                width: "50px",
                height: "50px",
                cursor: "pointer",
                transition: "transform 0.3s",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
              }}
            />
          </a>
          <a href="https://stackoverflow.com/users/21894223/daniel-uribe?tab=profile">
            <img
              src={stackoverflow}
              alt="stackoverflow"
              className="bg-transparent"
              style={{
                width: "50px",
                height: "50px",
                cursor: "pointer",
                transition: "transform 0.3s",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
              }}
            />
          </a>
          <a href="https://github.com/DAg2no">
            <img
              src={github}
              alt="github"
              className="bg-transparent"
              style={{
                width: "50px",
                height: "50px",
                cursor: "pointer",
                transition: "transform 0.3s",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
              }}
            />
          </a>
          <a href="https://www.linkedin.com/in/daniel-uribe-pulgar-93905a273/">
            <img
              src={linkedin}
              alt="linkedin"
              className="bg-transparent"
              style={{
                width: "50px",
                height: "50px",
                cursor: "pointer",
                transition: "transform 0.3s",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
              }}
            />
          </a>
        </Stack>
      </Box>
    </>
  );
};

export default Btn;
