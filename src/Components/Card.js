
import { useState } from "react"
import { useDispatch } from "react-redux"
import { clickLikeButton } from "../duck/action"
import "./Card.css"
import { LikeIcon } from "./Icons"
import ProgressiveImg from "./ProgressiveImg"

const DisplayMedia = ({ data }) => {
    if (data?.media_type === "image") {
        return (
            <ProgressiveImg image={data?.hdurl} className="media" alt={data?.title} />
        )
    } else {
        return (
            <iframe className="media" title={data.title} src={data.url}>
            </iframe>
        )
    }
}

const Card = ({ data }) => {
    const dt = new Date(data?.date)
    const [isLiked, setLike] = useState(data?.liked)
    const dispatch = useDispatch()

    const handleLike = (e) => {
        const value = e.target.value
        setLike(!isLiked)
        dispatch(clickLikeButton(!isLiked, value))
    }
    return (
        <article className="card">
            <div className="img-container">
                <DisplayMedia data={data} />
            </div>
            <div>
                <h2>{data?.title}</h2>
                <time dateTime={data?.date}>{dt?.toDateString()}</time>
                <p className="desc">
                    {data?.explanation}
                </p>
            </div>
            <button onClick={handleLike} value={data?.date} className={`btn ${isLiked ? "shade" : ""}`}>
                <LikeIcon width="1.2em" height="1.2em" fill={isLiked ? "currentColor" : "none"} />
                like
            </button>
        </article>
    )
}

export default Card