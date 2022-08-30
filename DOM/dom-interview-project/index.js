const mockUsers = [
    {
        id: 1,
        name: "first user",
        address: {
            street: "Kulas Light",
            suite: "apt. 556",
            city: "gwenborough",
            zipcode: "92348-3241"
        }
    },
    {
        id: 2,
        name: "second user",
        address: {
            street: "Victor Plains",
            suite: "suite 879",
            city: "wisokyburgh",
            zipcode: "90741-4321"
        }
    }
]

function makeUserNode(user) {
    //destructuring user into address, id, and name
    const { address, id, name } = user
    //destructuring address into smaller segments
    const { street, suite, city, zipcode } = address

    const userDiv = document.createElement("div")
    userDiv.id = `user-id-${id}`
    userDiv.classList.add("user-card")

    const nameHeading = document.createElement("h2")
    nameHeading.classList.add("mb-sm")
    nameHeading.innerText = name

    const addressParagraph = document.createElement("p")

    //can simplify this line w/ destructuring
    addressParagraph.innerText = `${street} ${suite} ${city} ${zipcode}`

    userDiv.appendChild(nameHeading)
    userDiv.appendChild(addressParagraph)

    return userDiv
}

// creating a function that renders multiple user cards & attaches them to a parent node
function renderUsers(users = [], parentNode) {
    const usersRow = document.createElement("div")
    usersRow.classList.add("row")

    //loop through users, create user node, append onto users row
    for (const user of users) {
        const userNode = makeUserNode(user)
        usersRow.appendChild(userNode)
    }

    parentNode.appendChild(usersRow)
}

// a baseUrl helps to avoid repeating the beginning part of the url for
// multiple endpoints
// endpoint: the final pieces of the url that direct you to a resource
const apiBaseUrl = 'https://jsonplaceholder.typicode.com'

async function fetchUser(userId) {
    const url = `${apiBaseUrl}/users/${userId}`

    try {
        const response = await fetch(url)
        const user = await response.json()
        return user
    } catch (error) {
        console.log(error)
    }
}

async function fetchUsers(userIds = []) {
    // this variable contains promises that have not been awaited, we can't access
    // the data until we await or use the .then
    const userFetchPromises = userIds.map((id) => fetchUser(id))

    const settledUserPromises = await Promise.allSettled(userFetchPromises)
    console.log(settledUserPromises)
    
    return settledUserPromises
}


// testing our fetchUser async function
async function main() {


    //testing our fetch users function
    const settledUsers = await fetchUsers([2, 4, 6])
    const usersFormatted = settledUsers
        //filtering out any responses that were rejected
        .filter(res => res.status === "fulfilled")
        //extract just the user data
        .map(res => res.value)
    renderUsers(usersFormatted, document.getElementById("myDiv"))

    // const testUser = await fetchUser(2)
    // renderUsers([testUser], document.getElementById("myDiv"))
}

main()

// we'll be rendering users 2, 4, & 6

// quick display of our new userNode
// const myNode = makeUserNode(mockUsers[0])

// const nodeToAddTo = document.getElementById("myDiv")
// nodeToAddTo.appendChild(myNode)


// test display of renderUsers function
const nodeToAddTo = document.getElementById("myDiv")
renderUsers(mockUsers, nodeToAddTo)