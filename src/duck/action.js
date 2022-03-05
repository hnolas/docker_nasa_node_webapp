import axios from "axios";
import { normalizeData, saveLike } from "../utils/helper";

export const GET_DATA_REQUEST = "GET_DATA_REQUEST"
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS"
export const GET_DATA_ERROR = "GET_DATA_ERROR"
export const CLICK_LIKE = "CLICK_LIKE"



const REACT_APP_NASA_API = 'https://api.nasa.gov/planetary/apod'
const REACT_APP_NASA_API_KEY = 'NjD3kvdQkd1RUejruWy7Qh4prbZ27efDbJeccT9Y'



export const getData = () => {
    return async (dispatch) => {
        dispatch({
            type: GET_DATA_REQUEST,
        });

        //Ends  today
        const date = new Date()
        const end_date = date.toISOString().slice(0, 10).toString()

        //starts 7 days from today
        date.setDate(date.getDate() - 7)
        const start_date = date.toISOString().slice(0, 10).toString()

        try {
            let { data } = await axios.get(
                `${REACT_APP_NASA_API}?api_key=${REACT_APP_NASA_API_KEY}&start_date=${start_date}&end_date=${end_date}`,
            );

            data = normalizeData(data)

            dispatch({
                type: GET_DATA_SUCCESS,
                data
            });

            localStorage.setItem("storedApods", JSON.stringify(data))

        } catch (error) {
            if (!error.response) {
                dispatch({
                    type: GET_DATA_ERROR,
                    error: "Action failed Check your internet and try again"
                });

            } else {
                dispatch({
                    type: GET_DATA_ERROR,
                    error: error?.message
                });
            }
        }
    };
}

export const clickLikeButton = (isLiked, id) => {

    return (dispatch) => {
        try {
            saveLike(isLiked, id)

            dispatch({
                type: CLICK_LIKE,
                isLiked,
                id
            })
        } catch (error) {
            dispatch({
                type: GET_DATA_ERROR,
                error: "Couldn't save like"
            });
        }
    }

}