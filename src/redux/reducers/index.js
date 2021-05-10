import { combineReducers } from "redux";
import { AllJobsReducer } from "./allJobsReducer";
import { SavedJobsReducer } from "./savedJobsReducer";

export const rootReducer = combineReducers({
    savedJobs: SavedJobsReducer,
    allJobs: AllJobsReducer
})