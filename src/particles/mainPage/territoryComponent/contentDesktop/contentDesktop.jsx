''

import React from "react";
import styles from "./contentDesktop.module.css";
import stylesFontT from "../../../../styles/fonts/timesNewRoman.module.css";
import {getFullPathImage} from "../../../../utils/getFullPathImage";


const ContentDesktop = ({
                          textFirst,
                          imageFirst,
                          textSecond,
                          imageSecond,
                          toggleImage,
                          imgHover,
                        }) => {
  return (
      <article className={`${stylesFontT.newRoman400} ${styles.wrapperContent}`}>
        {[1, 2].map((_, index) => {
          const isFirstRow = index === 0;
          const typeRow = isFirstRow ? "first" : "second";
          const images = isFirstRow ? imageFirst : imageSecond;
          const imageHover = isFirstRow ? imgHover?.firstRow : imgHover?.secondRow;
          const text = isFirstRow ? textFirst : textSecond;
          const styleContainer = `${styles.containerRowContent} ${isFirstRow ? styles.row_1 : styles.row_2}`;

          const handleMouseOut = () => toggleImage("hidden", typeRow);
          const handleShowImage = (pathToImage) => toggleImage("show", typeRow, pathToImage);

          return (
              <section className={styleContainer} key={`row_${typeRow}`}>
                <p className={styles.containerText}>{text}</p>
                <div
                    className={`${styles.containerImgs} ${imageHover ? styles.showImage : ""}`}
                    onMouseOut={handleMouseOut}
                >
                  {imageHover
                      ? <figure style={{backgroundImage: `url(${imageHover})`}} className={styles.img}/>
                      : <ContainerImages images={images} showImage={handleShowImage}/>
                  }
                </div>
              </section>
          );
        })}
      </article>
  );
};

export default React.memo(ContentDesktop);

ContentDesktop.displayName = 'ContentDesktop';


const ContainerImages = ({images, showImage}) => (
    <>
      {images.map((img) => {
        const pathToImage = getFullPathImage(img.image_path, img.image_name);
        return (
            <figure
                key={img.image_name || img.image_path}
                style={{backgroundImage: `url(${pathToImage})`}}
                className={styles.img}
                onMouseEnter={() => showImage(pathToImage)}
            />
        );
      })}
    </>
);