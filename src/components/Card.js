import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import imag from "./image1.jpg";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { AcUnit, Visibility } from "@mui/icons-material";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import AccessibilityIcon from "@mui/icons-material/Accessibility";

import "./index.css";

export default function RecipeReviewCard({ data }) {
  const [like, setLike] = useState(data.likes);
  const [check, setCheck] = useState(0);

  const [show, setShow] = useState(true);

  const showText = () => {
    setShow(!show);
  };

  const plusLikes = () => {
    if (!check) {
      setLike(like + 1);
      setCheck(1);
    }
  };

  return (
    <Card sx={{ maxWidth: 345, minWidth: 350 }}>
      {/* <CardMedia
        component="img"
        height="194"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVyYVoiOs_j0L2UTWrQiXXoH-M8XjM2B3zxlo-3vJaSw&s"
        // image = {imag}
      /> */}
      {/* <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVyYVoiOs_j0L2UTWrQiXXoH-M8XjM2B3zxlo-3vJaSw&s"
        alt="a"
      />

      <h3 class="second-txt">A computer science portal</h3> */}

      {/* <div class="gfg">
        <img
          class="img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVyYVoiOs_j0L2UTWrQiXXoH-M8XjM2B3zxlo-3vJaSw&s"
          alt="a"
        />
        <h3 class="second-txt">A computer science portal</h3>
      </div> */}

      <div class="container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVyYVoiOs_j0L2UTWrQiXXoH-M8XjM2B3zxlo-3vJaSw&s"
          alt="Avatar"
          class="image"
          style={{ width: "100%" }}
        />
        <div class="middle">
          <div class="text">
            {data.desc}
            <AccessTimeFilledIcon />
            <AccessTimeFilledIcon />
          </div>
        </div>
      </div>

      {/* {show ? <div onMouseOver={showText}>{abc.desc}</div> : null} */}

      <div>
        <AcUnitIcon />
        {data.name} &nbsp;
        <button>{data.tag}</button>
        <div className="flex flex-1 justify-end">
          <CardActions disableSpacing>
            <button onClick={plusLikes}>
              <FavoriteIcon />
              {data?.likes}
            </button>
            &nbsp;&nbsp;&nbsp;
            <button>
              <Visibility />
              {data.views}
            </button>
          </CardActions>
        </div>
      </div>
    </Card>
  );
}
