import { LOAD_HOME_DATA } from "./types";
import { HomeData } from "../constData/homeDetails";

export const loadHomeData = () => async (dispatch: (arg0: { type: string; payload: { title: string; upvotes: number; date: string; }[]; }) => void) => {
    dispatch({
        type: LOAD_HOME_DATA,
        payload: HomeData
    });
}