import React, { useEffect } from "react";
import "./land.css";
import { BiSearch } from "react-icons/bi";
function Land({ setTag }) {
  const tags = [
    "Discover",
    "Animation",
    "Branding",
    "Illustration",
    "Mobile",
    "Print",
    "Product Design",
    "Typography",
    "Web Design",
  ];
  useEffect(() => {
    const tags = document.querySelectorAll(".miniTag_div");
    if (tags) {
      tags.forEach((tag) => {
        tag.addEventListener("click", () => {
          tags.forEach((tag) => tag.classList.remove("active"));
          if (tag) {
            tag.classList.add("active");
            setTag(tag.innerHTML);
            console.log(tag.innerHTML);
          }
        });
      });
    }
  }, []);
  return (
    <div className="land_main">
      <div className="back"></div>
      <div className="main">
        <div className="tags_div">
          {tags.map((doc, ind) => (
            <div className="miniTag_div" key={ind}>
              {doc}
            </div>
          ))}
        </div>
        <div className="text_div">
          <h3>Explore the world’s leading design portfolios</h3>
          <p>
            Millions of designers and agencies around the world showcase their
            portfolio work on Dribbble - the home to the world’s best design and
            creative professionals.
          </p>
          <div className="search_div">
            <BiSearch className="search_icon" />
            <input
              className="search_input"
              type="text"
              placeholder="Search...."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Land;
