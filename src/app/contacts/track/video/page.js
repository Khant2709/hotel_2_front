import React from "react";

import ContentTrackVideoPage from "./content";
import HeaderLineBackground from "../../../../components/ui/headerLineBackgrund/headerLineBackground";

import {jsonLDTrackVideoPage} from "../../../../data/seoData";
import {metaDataTrackVideoPage} from "../../../../data/metaData";

export const metadata = metaDataTrackVideoPage;

const PageTrackVideo = () => {

    return (
        <>
            <script type="application/ld+json"
                    dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLDTrackVideoPage)}}/>
            <HeaderLineBackground display={true}/>
            <ContentTrackVideoPage/>
        </>
    );
};

export default PageTrackVideo;
