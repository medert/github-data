// Make sure to `console.log()` every answer!
let data = require('./data')

// 1. How many repositories does LaunchAcademy own?

console.log(`Launch Academy owns ${data.length} repositories.\n`);
console.log();

// 2. Which repository has the largest size?

let repSize = []
data.forEach((x) => {
  repSize.push(x.size)
})
let index = repSize.indexOf(Math.max(...repSize))
console.log(`${data[index].full_name} is the repository with the largest size of ${Math.max(...repSize)} bytes!`)
console.log()

// 3. What is the most recently created repository?

let repId = []
data.forEach((x) => {
  repId.push(x.id)
})
index = repId.indexOf(Math.max(...repId))

console.log(`${data[index].name} is the repository with the most recently created repo!`)
console.log()

// 4. How many repos have `0` stargazers?
let reposWithNoStargazers = 0
data.forEach((x) => {
  if (x.stargazers_count === 0){
    reposWithNoStargazers += 1
  }
})

console.log(`There are ${reposWithNoStargazers} repos that have 0 stargazers!`)
console.log()
// 5. Which repo has the largest number of stargazers?

let repoWithStargathers = []
data.forEach((x) => {
  repoWithStargathers.push(x.stargazers_count)
})
index = repoWithStargathers.indexOf(Math.max(...repoWithStargathers))
console.log(`${data[index].full_name} is the repo with largest number of stargathers`)
console.log()

// 6. Return the names of the repos that have a description that is not null.
let reposWithDescription = data.map((repo) => {
  if (repo.description !== null){
    return repo.full_name
  } else {
    return false
  }
});

reposWithDescription = reposWithDescription.filter((name) => {
  return name !== false
})
console.log('Below are the repos with written descriptions: ')
console.log(reposWithDescription);
console.log()

//8. Use the `.map` function to create an array of repository descriptions.
// The result of the `.map` function should be an array of strings that look like this:
reposWithDescription = data.map((repo) => {
  if (repo.description !== null){
    return repo.name
  } else {
    return false
  }
});

// 9. Use `.map` once again to create a summary of each repository's most important information.
// We want to know the name of the repository, who created it (the owner), and how many watchers
//there are. The resultant array should once again be an array of strings that look like this:

reposWithDescription = data.map((repo) => {
  return `Repo name is ${repo.name}, ${repo.watchers_count} watchers, owner is ${repo.owner}`
});

console.log(reposWithDescription);
console.log()

// Helper function that finds an object by name of the repo
function findObjectByName(name){
  let obj = data.find(function(element){
    return element.name === name;
  })
  return obj;
}
// 10. What 2 keys are inside `monkey_party`'s license object?

function whatAreTheKeys(name){
  let obj = findObjectByName(name);
  return Object.keys(obj.license);
}

console.log(`The keys for 'monkey_party' license are ${whatAreTheKeys('monkey_party')}`);
console.log()

// 11. What is `monkey_party`'s license url?

function repoLicenseUrl(name){
  let obj = findObjectByName(name);
  return obj.license.url;
};

console.log(`The url for 'monkey_party' license is ${repoLicenseUrl('monkey_party')}`);
console.log()
// 12. What's the current state of the booster repo's owner permissions object?

function repoCurrentStatePerm(name){
  let obj = findObjectByName(name);
  return obj.owner.permissions.admin;
}

console.log(`The current state of booster's repo's owner permissions object is ${repoCurrentStatePerm('booster')}`)
console.log()
