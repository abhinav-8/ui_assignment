import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {Visibility } from "@mui/icons-material";

import "./index.css";

export default function RecipeReviewCard({ data }) {
  const [like, setLike] = useState(data.likes);
 
  const [check, setCheck] = useState(-1);

  const plusLikes = () => {
    if (check === -1) {
      setLike(like+1);
      setCheck(1);
    }
    else if (check === 1) {
      setLike(like-1);
      setCheck(-1);
    }
  };

  return (
    <Card sx={{ maxWidth: 345, minWidth: 350 }}>

      <div class="container">
        <img
          src= {data.url}
          alt="Avatar"
          class="image"
          style={{ width: "100%" }}
        />
        <div class="middle">
          <div class="text">
          </div>
        </div>
      </div>
      <div>
      <div className="cardBottom">
          {data.name}
          <CardActions disableSpacing>
            <button onClick={plusLikes}>
              <FavoriteIcon sx={{ "&:hover": { color: "red" } }}/>
              {data.likes}
            </button>
            &nbsp;&nbsp;&nbsp;
            <button>
              <Visibility sx={{ "&:hover": { color: "red" } }}/>
              {data.views}
            </button>
          </CardActions>
        </div>
        </div>
    </Card>
  );
}
