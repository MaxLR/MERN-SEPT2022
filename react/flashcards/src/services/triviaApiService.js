import axios from 'axios'

// this instance of axios will concat given urls to the end of baseURL
const http = axios.create({
    baseURL: `https://opentdb.com/api.php`,
    //baseURl != baseURL, make sure you use autocomplete when available to avoid spelling mistakes!
})

export const getQuestions = (queryParams) => {
    // in a perfect world, it would be easier for the user to pass in category name
    // rather than category id (and have us figure out the id in this function)
    const { amount, category, difficulty, type } = queryParams
    
    return http
        .get(
            `?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`
        )
        .then(res => {
            // our component only cares about the data
            return res.data
        })
}