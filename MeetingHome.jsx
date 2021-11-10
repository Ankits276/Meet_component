import MeetingUserlist from "./MeetUserlist";
import React from "react";

const usersList = [
  {
    id: 1,
    name: "Ankit Satonia",
    image:
      "https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",
  },
  {
    id: 2,
    name: "Ankit Satonia",
    image:
      "https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",
  },
  {
    id: 3,
    name: "Ankit Satonia",
    image:
      "https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",
  },
  {
    id: 4,
    name: "Ankit Satonia",
    image:
      "https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",
  },
  {
    id: 5,
    name: "Ankit Satonia",
    image:
      "https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",
  },
];
const Meetinghome = () => {
  const _renderList = () => {
    return usersList.map((item, index) => {
      return (
        <MeetingUserlist key={index} label={item.name} image={item.image} />
      );
    });
  };

  return (
    <>
      <div style={{display: "flex"}}>{_renderList()}</div>
    </>
  );
};
export default Meetinghome;
