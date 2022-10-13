import Navbar from "./components/Navbar";
import React, { useState } from "react";
import Card from "./components/Card";
import Land from "./components/land";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "./app.css";
function App() {
  const [tag, setTag] = useState("");
  const [allCardData, setAllCardData] = useState([
    {
      name: "Abhinav",
      tag: "Animation",
      likes: 10,
      views: 450,
      desc: "abcdef",
    },
    {
      name: "Abhinav",
      tag: "Branding",
      likes: 1,
      views: 100,
      desc: "abcdef",
    },
    {
      name: "Abhinav",
      tag: "Illustration",
      likes: 800,
      views: 1300,
      desc: "abcdef",
    },
    {
      name: "Abhinav",
      tag: "Mobile",
      likes: 60,
      views: 900,
      desc: "abcdef",
    },
    {
      name: "Abhinav",
      tag: "Print",
      likes: 40,
      views: 1200,
      desc: "abcdef",
    },
    {
      name: "Abhinav",
      tag: "Product Design",
      likes: 40,
      views: 1200,
      desc: "abcdef",
    },
    {
      name: "Abhinav",
      tag: "Typography",
      likes: 40,
      views: 1200,
      desc: "abcdef",
    },
    {
      name: "Abhinav",
      tag: "Web Design",
      likes: 40,
      views: 1200,
      desc: "abcdef",
    },
  ]);
  const [cardData, setCardData] = useState([
    {
      name: "Abhinav",
      tag: "Animation",
      likes: 10,
      views: 450,
      desc: "abcdef",
    },
    {
      name: "Abhinav",
      tag: "Branding",
      likes: 1,
      views: 100,
      desc: "abcdef",
    },
    {
      name: "Abhinav",
      tag: "Illustration",
      likes: 800,
      views: 1300,
      desc: "abcdef",
    },
    {
      name: "Abhinav",
      tag: "Mobile",
      likes: 60,
      views: 900,
      desc: "abcdef",
    },
    {
      name: "Abhinav",
      tag: "Print",
      likes: 40,
      views: 1200,
      desc: "abcdef",
    },
    {
      name: "Abhinav",
      tag: "Product Design",
      likes: 40,
      views: 1200,
      desc: "abcdef",
    },
    {
      name: "Abhinav",
      tag: "Typography",
      likes: 40,
      views: 1200,
      desc: "abcdef",
    },
    {
      name: "Abhinav",
      tag: "Web Design",
      likes: 40,
      views: 1200,
      desc: "abcdef",
    },
  ]);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [sortAccTo, setSort] = useState("Popular");
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  function handleFilter(i) {
    if (i == 0) {
      const temparr = [...cardData];
      temparr.sort((a, b) => {
        return b.likes - a.likes;
      });
      setCardData(temparr);
    }
    if (i == 1) {
      const temparr = [...cardData];
      temparr.sort((a, b) => {
        return b.views - a.views;
      });
      setCardData(temparr);
    }
    if (i == 3) {
      const temparr = [...cardData];
      temparr.filter();
    }
  }

  const handleClose = (i) => {
    setAnchorEl(null);
    if (i === 0) {
      setSort("Popular");
      handleFilter(0);
    } else {
      setSort("New & Noteworthy");
      handleFilter(1);
    }
  };

  const handleTagChange = (value) => {
    setTag(value);
    if (value === "Discover") {
      setCardData(allCardData);
    } else {
      const filterDataArr = allCardData.filter((doc, i) => {
        return doc.tag === value;
      });
      setCardData(filterDataArr);
    }
  };

  return (
    <div className="App">
      <Navbar />
      <Land tag={tag} setTag={handleTagChange} />
      <div className="sort_div">
        <div className="menu_div">
          <div>
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              style={{ color: "black" }}
            >
              {sortAccTo}
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={() => handleClose(0)}>Popular</MenuItem>
              <MenuItem onClick={() => handleClose(1)}>
                New & Noteworthy
              </MenuItem>
            </Menu>
          </div>
        </div>
      </div>
      <div className="cards_div">
        {cardData &&
          cardData.map((d, index) => (
            <div key={index}>
              <Card data={d} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
