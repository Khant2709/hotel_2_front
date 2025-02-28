'use client'
import React, {useState} from "react";

import Title from "../../../components/ui/title/title";
import ContentDesktop from "./contentDesktop/contentDesktop";
import ContentMobile from "./contentMobile/contentMobile";

import {useWindowWidth} from "../../../hooks/UseWidth";


const TerritoryContainer = ({territory, images}) => {
  const width = useWindowWidth();
  const [imgHover, setImgHover] = useState({firstRow: null, secondRow: null});
  const [text1, text2] = territory.split('&&');

  const toggleImage = (state, row, img) => {
    if (row === 'first') setImgHover({...imgHover, firstRow: state === 'show' ? img : null});
    if (row === 'second') setImgHover({...imgHover, secondRow: state === 'show' ? img : null});
  }

  if (!width) return null;

  return (
      <>
        <Title Tag={"h2"} text={"Територия"}/>
        {
          width > 768
              ? <ContentDesktop
                  textFirst={text1}
                  imageFirst={images.slice(0, 4)}
                  textSecond={text2}
                  imageSecond={images.slice(2, 6)}
                  toggleImage={toggleImage}
                  imgHover={imgHover}
              />
              : <ContentMobile images={images} textFirst={text1} textSecond={text2}/>
        }
      </>
  );
};

export default TerritoryContainer;
