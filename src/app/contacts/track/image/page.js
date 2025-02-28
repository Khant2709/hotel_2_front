import React from "react";
import Image from "next/image";


import HeaderLineBackground from "../../../../components/ui/headerLineBackgrund/headerLineBackground";
import {stepTrack} from "./stepTrack";

import {jsonLDTrackImagePage} from "../../../../data/seoData";
import {metaDataTrackImagePage} from "../../../../data/metaData";


import styles from "../../../../styles/track.module.css";
import stylesFontT from "../../../../styles/fonts/timesNewRoman.module.css";
import CenteredWrapper from "../../../../components/ui/wrapperPage/centeredWrapper";


export const metadata = metaDataTrackImagePage;

const PageTrackImage = () => {
  return (
      <section>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLDTrackImagePage)}}
        />
        <HeaderLineBackground display={true}/>
        <div className={`${stylesFontT.newRoman400} ${styles.wrapperPage}`}>
          <CenteredWrapper>
            <h1 className={`${stylesFontT.newRoman700} ${styles.title}`}>Путь на автомобиле/пешком до базы
              Бор&apos;О&apos;Дача</h1>
            <p className={styles.text} style={{marginTop: '2rem'}}>Бетта – хутор в Краснодарским крае,
              тупиковый уединенный поселок в 50 км от Геленджика. Путь на автомобиле до базы Бор&apos;О&apos;Дача
              – 5-7 минут в зависимости от скорости.
              Дорога пешком до базы займет 20 минут спокойным прогулочным шагом.
            </p>
            <h2 className={`${stylesFontT.newRoman700} ${styles.subTitle}`}>
              Путь до хутор Бетта на общественном транспорте:
            </h2>
            <section className={styles.section}>
              <p className={styles.text}>
                Из Геленджика в Бетту ходит прямой автобус № 109.
              </p>
              <ul className={styles.list}>
                <li>Геленджик – Бетта: 5-20; 6-50; 9-30; 11-10; 15-00; 18-00; 20-10.</li>
                <li>Центр.остановка по ул.Кирова – Бетта: 9-35; 11-15; 15-05; 18-05.</li>
                <li>Пшада – Бетта: 6-10; 7-45; 10-25; 12-10; 15-55; 18-50; 21-00.</li>
                <li>Бетта – Геленджик: 6-05; 7-05; 8-40; 11-00; 12-55; 16-35; 19-20.</li>
              </ul>
              <p className={styles.text}>
                Лучше уточнять актуальное расписание автобусов.
              </p>
              <p className={styles.text}>
                Из Краснодара в Бетту и обратно – прямая маршрутка, заказ места по телефону:
                <a href={`tel:79181188775`}>+7(918)118-87-75</a>
              </p>
            </section>
            <h2 className={`${stylesFontT.newRoman700} ${styles.subTitle}`}>
              Пошаговый путь до базы Бор&apos;О&apos;Дача:
            </h2>
            {stepTrack.map(step => {
              return <section className={styles.section} key={step.id}>
                <p className={styles.text}>{step.text}</p>
                {step.image.map(image => {
                  return <Image
                      key={image.alt}
                      alt={image.alt}
                      src={image.src}
                      className={styles.horizontalImg}
                  />
                })}
              </section>
            })}
          </CenteredWrapper>
        </div>

      </section>
  );
};

export default PageTrackImage;
