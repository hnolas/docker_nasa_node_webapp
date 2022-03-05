import ImagePlaceholder from "../Assets/image/imgPlace.png"
import React from "react"
export const normalizeData = (data) => {
    let formattedData = {}

    Object.values(data).map((apod) => {
        const { copyright,
            date,
            explanation,
            hdurl,
            media_type,
            service_version,
            title,
            url } = apod
        return (
            formattedData[apod.date] = {
                copyright,
                date,
                explanation,
                hdurl,
                media_type,
                service_version,
                title,
                url,
                liked: false
            }
        )

    })


    return formattedData
}



export const saveLike = (isLiked, id) => {
    let data = JSON.parse(localStorage.getItem("storedApods"))

    data = {
        ...data,
        [id]: {
            ...data[id],
            liked: isLiked
        }

    }

    localStorage.setItem("storedApods", JSON.stringify(data))
}


export const useProgressiveImg = (highQualitySrc) => {
    const [src, setSrc] = React.useState(ImagePlaceholder);
    React.useEffect(() => {
        setSrc(ImagePlaceholder);
        const img = new Image();
        img.src = highQualitySrc;
        img.onload = () => {
            setSrc(highQualitySrc);
        };
    }, [highQualitySrc]);
    return [src, { blur: src === ImagePlaceholder }];
};