// Core
import React from "react";
import { useSelector } from "react-redux";
// Parts
import Box from "@mui/material/Box";
import { selectorsHotels } from "../../engine/core/hotels/selectors";

function HotelsInner(props) {
  const { hotel } = props;
  return (
    <>
    <Box sx={{fontSize:"30px", color: "primary.main"}}>{hotel.city}</Box>
      <p>{hotel.address}</p>
      <p>{hotel.name}</p>
    </>
  );
}

export function Hotels() {
  const hotelsItems = useSelector(selectorsHotels.items);
  return (
    <>
      <Box component="h1">Hotels</Box>
      {hotelsItems.map((hotel, id) => {
        return <HotelsInner key={id} hotel={hotel}></HotelsInner>;
      })}
    </>
  );
}
