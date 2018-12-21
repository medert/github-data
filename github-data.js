// Make sure to `console.log()` every answer!
let data = require('./data')

// 1. How many repositories does LaunchAcademy own?

console.log(`Launch Academy owns ${data.length} repositories.`)

// 2. Which repository has the largest size?

let repSize = []
data.forEach((x) => {
  repSize.push(x.size)
})
let index = repSize.indexOf(Math.max(...repSize))
console.log(`${data[index].full_name} is the repository with the largest size of ${Math.max(...repSize)} bytes!`)
// 3. What is the most recently created repository?


// 4. How many repos have `0` stargazers?
let reposWithNoStargazers = 0
data.forEach((x) => {
  if (x.stargazers_count === 0){
    reposWithNoStargazers += 1
  }
})

console.log(`There are ${reposWithNoStargazers} repos that have 0 stargazers!`)

// 5. Which repo has the largest number of stargazers?

let repoWithStargathers = []
data.forEach((x) => {
  repoWithStargathers.push(x.stargazers_count)
})
index = repoWithStargathers.indexOf(Math.max(...repoWithStargathers))
console.log(`${data[index].full_name} is the repo with largest number of stargathers`)
