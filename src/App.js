import Navbar from "./components/Navbar";
import React, { useState } from "react";
import Card from "./components/Card";
import Land from "./components/land";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "./app.css";
function App() {
  let [tag, setTag] = useState("");
  let [allCardData, setAllCardData] = useState([
    {
      name: "Adobe MAX",
      tag: "Branding",
      likes: 93,
      views: 12,
      desc: "abcdef",
      url: "https://www.intrepidtravel.com/adventures/wp-content/uploads/2019/03/Intrepid-Travel-ecuador_amazon-jungle-river.jpg",
    },

    {
      name: "Mako Tsereteli",
      tag: "Print",
      likes: 773,
      views: 139,
      desc: "abcdef",
      url: "https://imgnew.outlookindia.com/public/uploads/articles/2022/1/14/snowfall_1_20220111.jpg"
    },
    {
      name: "Odama",
      tag: "Product Design",
      likes: 400,
      views: 1200,
      desc: "abcdef",
      url: "https://c4.wallpaperflare.com/wallpaper/376/1000/968/nature-full-size-desktop-7680x4320-wallpaper-preview.jpg",
    },
    {
      name: "twintrick",
      tag: "Product Design",
      likes: 280,
      views: 912,
      desc: "abcdef",
      url: "https://uttarakhandtourism.gov.in/sites/default/files/2021-11/Banner_Kedarnath.jpg"
    },
    {
      name: "SLAB",
      tag: "Product Design",
      likes: 190,
      views: 921,
      desc: "abcdef",
      url: "https://admin.banbanjara.com/public/frontend/uploads/product/1577702576843-KedarkanthaTrekBanBanjara.jpg",
    },
    {
      name: "Plainthing Studio",
      tag: "Typography",
      likes: 187,
      views: 1200,
      desc: "abcdef",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxYBWZ1d9X6gQHjkJms1fWs6aRTlrOYd6A5Q&usqp=CAU",
    },
    {
      name: "Abdul Gaffar",
      tag: "Typography",
      likes: 180,
      views: 193,
      desc: "abcdef",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJnVq4Is2DVpFU-pDm57msRPSxSrYUGk7pig&usqp=CAU",
    },
    {
      name: "Fireart Studio",
      tag: "Typography",
      likes: 160,
      views: 453,
      desc: "abcdef",
      url: "http://img.emg-services.net/htmlpages/htmlpage2798/untitled-design-32.jpg",
    },
    {
      name: "Taras Migulko",
      tag: "Web Design",
      likes: 152,
      views: 1200,
      desc: "abcdef",
      url: "https://www.hdwallpapers.in/download/chrysler_300c_full_size_car_luxury_car_sedan_hd_cars-1920x1080.jpg",
    },
    {
      name: "Irakli Meskhi",
      tag: "Web Design",
      likes: 98,
      views: 136,
      desc: "abcdef",
      url: "https://partnersinfire.com/wp-content/uploads/2021/04/Untitled-design-5.png",
    },
    {
      name: "Morva",
      tag: "Web Design",
      likes: 95,
      views: 702,
      desc: "abcdef",
      url:"https://static.toiimg.com/photo/imgsize-152902,msid-91729099/91729099.jpg",
    },
    {
      name: "Lucian Radu",
      tag: "Mobile",
      likes: 172,
      views: 174,
      desc: "abcdef",
      url: "https://photographylife.com/wp-content/uploads/2016/06/Mass.jpg",
    },
    {
      name: "THRC",
      tag: "Illustration",
      likes: 126,
      views: 130,
      desc: "abcdef",
      url: "https://wallpaperaccess.com/full/170249.jpg",
    },
    {
      name: "Lucie Bajgart",
      tag: "Animation",
      likes: 196,
      views: 220,
      desc: "abcdef",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVxMMdrO4jqeuE0X9ucm1hVfrT5E7FpIui4Q&usqp=CAU",
    },
  ]);
  let [cardData, setCardData] = useState([
    {
      name: "Adobe MAX",
      tag: "Branding",
      likes: 93,
      views: 12,
      desc: "abcdef",
      url: "https://www.intrepidtravel.com/adventures/wp-content/uploads/2019/03/Intrepid-Travel-ecuador_amazon-jungle-river.jpg",
    },

    {
      name: "Mako Tsereteli",
      tag: "Print",
      likes: 773,
      views: 139,
      desc: "abcdef",
      url: "https://imgnew.outlookindia.com/public/uploads/articles/2022/1/14/snowfall_1_20220111.jpg"
    },
    {
      name: "Odama",
      tag: "Product Design",
      likes: 400,
      views: 1200,
      desc: "abcdef",
      url: "https://c4.wallpaperflare.com/wallpaper/376/1000/968/nature-full-size-desktop-7680x4320-wallpaper-preview.jpg",
    },
    {
      name: "twintrick",
      tag: "Product Design",
      likes: 280,
      views: 912,
      desc: "abcdef",
      url: "https://uttarakhandtourism.gov.in/sites/default/files/2021-11/Banner_Kedarnath.jpg"
    },
    {
      name: "SLAB",
      tag: "Product Design",
      likes: 190,
      views: 921,
      desc: "abcdef",
      url: "https://admin.banbanjara.com/public/frontend/uploads/product/1577702576843-KedarkanthaTrekBanBanjara.jpg",
    },
    {
      name: "Plainthing Studio",
      tag: "Typography",
      likes: 187,
      views: 1200,
      desc: "abcdef",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxYBWZ1d9X6gQHjkJms1fWs6aRTlrOYd6A5Q&usqp=CAU",
    },
    {
      name: "Abdul Gaffar",
      tag: "Typography",
      likes: 180,
      views: 193,
      desc: "abcdef",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJnVq4Is2DVpFU-pDm57msRPSxSrYUGk7pig&usqp=CAU",
    },
    {
      name: "Fireart Studio",
      tag: "Typography",
      likes: 160,
      views: 453,
      desc: "abcdef",
      url: "http://img.emg-services.net/htmlpages/htmlpage2798/untitled-design-32.jpg",
    },
    {
      name: "Taras Migulko",
      tag: "Web Design",
      likes: 152,
      views: 1200,
      desc: "abcdef",
      url: "https://www.hdwallpapers.in/download/chrysler_300c_full_size_car_luxury_car_sedan_hd_cars-1920x1080.jpg",
    },
    {
      name: "Irakli Meskhi",
      tag: "Web Design",
      likes: 98,
      views: 136,
      desc: "abcdef",
      url: "https://partnersinfire.com/wp-content/uploads/2021/04/Untitled-design-5.png",
    },
    {
      name: "Morva",
      tag: "Web Design",
      likes: 95,
      views: 702,
      desc: "abcdef",
      url:"https://static.toiimg.com/photo/imgsize-152902,msid-91729099/91729099.jpg",
    },
    {
      name: "Lucian Radu",
      tag: "Mobile",
      likes: 172,
      views: 174,
      desc: "abcdef",
      url: "https://photographylife.com/wp-content/uploads/2016/06/Mass.jpg",
    },
    {
      name: "THRC",
      tag: "Illustration",
      likes: 126,
      views: 130,
      desc: "abcdef",
      url: "https://wallpaperaccess.com/full/170249.jpg",
    },
    {
      name: "Lucie Bajgart",
      tag: "Animation",
      likes: 196,
      views: 220,
      desc: "abcdef",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVxMMdrO4jqeuE0X9ucm1hVfrT5E7FpIui4Q&usqp=CAU",
    },

      ]);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [sortAccTo, setSort] = useState("Popular");
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  function handleFilter(i) {
    if (i === 0) {
      console.log(cardData, "\nsad")
      const temparr = [...cardData];
      temparr.sort((a, b) => {
        return b.likes - a.likes;
      });
        setCardData(temparr);
    }
    if (i === 1) {
      const temparr = [...cardData];
      temparr.sort((a, b) => {
        return b.views - a.views;
      });
      setCardData(temparr);
    }
    if (i === 2) {
      const temparr = [...cardData];
      console.log("sortby lolality");
      temparr.filter();
    }
  }

  const handleClose = (i) => {
    setAnchorEl(null);
    if (i === '0') {
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
              <MenuItem onClick={() => handleClose('0')}>Popular</MenuItem>
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
