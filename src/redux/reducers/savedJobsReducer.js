import { SAVE_JOB, UNSAVE_JOB } from "../actionTypes"

export const SavedJobsReducer = (state=[], action) => {

    switch(action.type) {
        case SAVE_JOB:
            const newState = [...state, action.data];
            return newState
        
        case UNSAVE_JOB:
            const remaining = state.filter(job => job.id !== action.data.id)
            return [...remaining]
        default:
           return state
    }
}