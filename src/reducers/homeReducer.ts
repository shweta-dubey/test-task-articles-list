import { LOAD_HOME_DATA } from "../actions/types";

type ACTIONTYPE = { type: string; payload: { title: string; upvotes: number; date: string; }[]; }

const INITIAL_STATE = {
    homeItems: [],
};

export default function (state = INITIAL_STATE, action: ACTIONTYPE) {
    switch (action.type) {
        case LOAD_HOME_DATA:
            return { ...state, homeItems: action.payload }
        default:
            return state;
    }
}