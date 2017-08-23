# smartive.ch
The yet-again-all-new smartive.ch website is built with [Gatsby](https://www.gatsbyjs.org) - a «Blazing-fast static site generator for React».

## Structure
If you look at it at this stage, I'm terribly sorry. At one point it shall be refactored into beautiful components, but now it's kind of a mess from
writing the code in pug-templates with wintersmith, somehow migrating them to Next.js and finally to Gatsby. Also the content lies in static `data.js`
files and should at one point be moved to Gatsby's GraphQL approach.

## Setup

```
yarn
```

;-)

## Development

```
yarn develop
```

This runs gatsby in dev mode on `localhost:8000` with HMR, etc.

## Deployment
A CI pipeline has been setup on GitLab. `develop` is automatically deployed to beta.smartive.ch and `master` to smartive.ch.
