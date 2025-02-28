"use client";

import React from "react";
import Image from "next/image";

import Title from "../../../components/ui/title/title";

import {DEFAULT_CONTACTS} from "../../../config/envData";

import {getFullPathImage} from "../../../utils/getFullPathImage";


import styles from "./description.module.css";
import stylesFontsT from "../../../styles/fonts/timesNewRoman.module.css";
import {useWindowWidth} from "../../../hooks/UseWidth";
import ButtonSecondary from "../../../components/ui/buttons/buttonSecondory/buttonSecondory";


const DescriptionView = ({description, phone, image}) => {
  const width = useWindowWidth();
  const pathToImage = new URL(getFullPathImage(image.image_path, image.image_name)).toString();

  if (!width) return null;

  return (
      <>
        <Title Tag={"h2"} text={"О нас"}/>
        <div className={styles.wrapperMain}>
          <div className={styles.containerDescription}>
            <p className={stylesFontsT.newRoman400}>{description}</p>
            {width > 900 && <ContactButton phone={phone}/>}
          </div>
          <Image alt={'img'} src={pathToImage} className={styles.img} priority={true} width={500} height={450}/>
          {width <= 900 && <ContactButton phone={phone}/>}
        </div>
      </>
  );
};

export default DescriptionView;

const ContactButton = ({phone}) => (
    <a href={`tel:${phone || DEFAULT_CONTACTS.phone}`}>
      <ButtonSecondary text={'Связаться с нами'} hotel={'hotel_2'}/>
    </a>
);