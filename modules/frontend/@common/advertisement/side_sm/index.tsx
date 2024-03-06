import addArray from "../../../../../helpers/data/ad_array_sidesm.json";
import { useEffect, useState } from "react";
import Advertisement from "..";
import { getRandomIndex } from "@/helpers/utils";

const AdvertisementSideSm = ({ className }: any) => {
  const [randomIndex, setRandomIndex] = useState(1);

  // const randomIndex = getRandomIndex(addArray);
  const randomElement = addArray[randomIndex];

  useEffect(() => {
    setRandomIndex(getRandomIndex(addArray));
  }, []);

  return (
    <Advertisement
      className={className}
      width={300}
      height={250}
      src={randomElement.src}
      url={randomElement.url}
    />
  );
};

export default AdvertisementSideSm;
