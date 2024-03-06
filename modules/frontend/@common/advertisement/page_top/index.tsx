import addArray from "../../../../../helpers/data/ad_array.json";
import { useEffect, useState } from "react";
import Advertisement from "..";
import { getRandomIndex } from "@/helpers/utils";

interface propTypes {
  className?: any;
}

const AdvertisementPageTop = ({ className }: propTypes) => {
  const [randomIndex, setRandomIndex] = useState(1);

  // const randomIndex = getRandomIndex(addArray);
  const randomElement = addArray[randomIndex];

  useEffect(() => {
    setRandomIndex(getRandomIndex(addArray));
  }, []);

  return (
    <Advertisement
      className={className}
      width={730}
      height={90}
      src={randomElement.src}
      url={randomElement.url}
    />
  );
};

export default AdvertisementPageTop;
