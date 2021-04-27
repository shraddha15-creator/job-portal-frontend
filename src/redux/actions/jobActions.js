import { SAVE_JOB, UNSAVE_JOB } from "../actionTypes"

export const saveJob = (job) => {
    return({
        type: SAVE_JOB,
        data: job
    })
}

export const unsaveJob = (job) => {
    return({
        type: UNSAVE_JOB,
        data: job
    })
}