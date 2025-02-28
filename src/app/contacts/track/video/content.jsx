'use client'
import React from 'react';
import dynamic from "next/dynamic";


const ReactPlayer = dynamic(() => import('react-player/lazy'), {ssr: false});

import styles from "../../../../styles/track.module.css";
import stylesFontT from "../../../../styles/fonts/timesNewRoman.module.css";
import CenteredWrapper from "../../../../components/ui/wrapperPage/centeredWrapper";


const ContentTrackVideoPage = () => {
  const stepTrack = [
    {
      url: '/track/trackVideo1.mp4',
      controls: true
    },
    {
      url: '/track/trackVideo2.mp4',
      controls: true
    }
  ];

  return (
      <div className={`${stylesFontT.newRoman400} ${styles.wrapperPage}`}>
        <CenteredWrapper>
          <h1 className={`${stylesFontT.newRoman700} ${styles.title}`}>
            Видео путь на автомобиле/пешком до базы Бор&apos;О&apos;Дача
          </h1>
          <p className={styles.text} style={{marginTop: "2rem"}}>
            Бетта – хутор в Краснодарским крае, тупиковый уединенный поселок в 50 км от Геленджика.
            Путь на автомобиле до базы Бор&apos;О&apos;Дача – 5-7 минут в зависимости от скорости.
            Дорога пешком до базы займет 20 минут спокойным прогулочным шагом.
          </p>

          <div className={styles.containerVideo}>
            {stepTrack.map((step, i) => {
              return <div className={styles.video} key={i}>
                <ReactPlayer
                    url={step.url}
                    controls={step.controls}
                    width={"100%"}
                />
              </div>
            })}
          </div>
        </CenteredWrapper>
      </div>
  );
};

export default ContentTrackVideoPage;