import React, { useState } from "react";

export interface ItemRotatorProps {
  items: any[];
  interval: number;
}

export default function ItemRotator(props: any) {
  const [rndmItem, setRndmItem] = useState("");
  const [nextItem, setNextItem] = useState(0);

  const myArray = props.items;

  setTimeout(() => {
    let randomItem = myArray[nextItem];
    setNextItem(nextItem + 1 === myArray.length ? 0 : nextItem + 1);
    setRndmItem(randomItem);
  }, props.interval);
  return <>{rndmItem}</>;
}
