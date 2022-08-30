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


// quick display of our new userNode
// const myNode = makeUserNode(mockUsers[0])

// const nodeToAddTo = document.getElementById("myDiv")
// nodeToAddTo.appendChild(myNode)


// test display of renderUsers function
const nodeToAddTo = document.getElementById("myDiv")
renderUsers(mockUsers, nodeToAddTo)