import axios from 'axios'

// this instance of axios will concat given urls to the end of baseURL
// DO NOT USE THIS, NEED TO REFACTOR TO CONSIDER BASEURL
// const http = axios.create({
//     baseURl: `https://opentdb.com/api.php`,
// })

export const getQuestions = (queryParams) => {
    // in a perfect world, it would be easier for the user to pass in category name
    // rather than category id (and have us figure out the id in this function)
    const { amount, category, difficulty, type } = queryParams
    
    return axios
        .get(
            `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`
        )
        .then(res => {
            // our component only cares about the data
            return res.data
        })
}