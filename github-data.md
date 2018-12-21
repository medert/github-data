You'll work to answer questions about repositories from [LaunchAcademy's GitHub account](https://api.github.com/orgs/LaunchAcademy/repos).

## Getting Started

```no-highlight
et get github-data
cd github-data
```

### Instructions

We have provided the data needed in the `data.js` file. While this is a lot of data, it's no different than what you've worked with in prior assignments. `data` is an array of objects, and each object contains a number of `key:value` pairs.

Notice how the data is "imported" at the top of the `github-data.js` file:

```javascript
let data = require('./data');
```

The `data` variable in `github-data.js` will contain the array defined in the `data.js` file.

### Meets Expectations Criteria
**Read the complete instructions BEFORE starting**

Write code in `github-data.js` using the `data` array to answer the following questions.

### Make sure to `console.log()` every answer!

1. How many repositories does LaunchAcademy own?
2. Which repository has the largest size?
3. What is the most recently created repository?
4. How many repos have `0` stargazers?
5. Which repo has the largest number of stargazers?
6. Return the names of the repos that have a description that is not null.
7. Repeat #6 using a different approach (i.e., a different function).
8. Use the `.map` function to create an array of repository descriptions. The result of the `.map` function should be an array of strings that look like this:

```javascript
[
  'MailChimp functionality for those who like tests and HTTParty',
  'Rails Template',
  'Environment specific robots.txt for your Rails Apps',
  'No Description Provided',
  ...
]
```

9. Use `.map` once again to create a summary of each repository's most important information. We want to know the name of the repository, who created it (the owner), and how many watchers there are. The resultant array should once again be an array of strings that look like this:

```javascript
[
  'Repo name is monkey_party, 4 watchers, owner is LaunchAcademy',
  'Repo name is booster, 44 watchers, owner is LaunchAcademy',
  'Repo name is roboto, 72 watchers, owner is LaunchAcademy',
  ...
]
```

10. What 2 keys are inside `monkey_party`'s license object?
11. What is `monkey_party`'s license url?
12. What's the current state of the booster repo's owner permissions object?

## Make sure to `console.log()` every answer!
