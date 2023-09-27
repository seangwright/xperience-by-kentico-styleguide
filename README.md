# Xperience by Kentico Styleguide

Xperience by Kentico styleguide covering everything from project architecture to deployment automation, SQL scripts to CSS.

Build with [Astro](https://docs.astro.build/en/getting-started/) [Starlight](https://starlight.astro.build) docs theme.

<https://xperience-by-kentico-styleguide.netlify.app/>

## Develop

### Requirements

- Node.js >= v18.16.0

### Steps

1. Install npm dependencies

    - Use the VS Code `npm: install` task
    - (alternative) Run `npm i` at the command line

2. Run the Astro dev server

    - Use the VS Code `npm: start` task
    - (alternative) Run `npm start` at the command line

3. Open a browser to <http://localhost:4321/>

### Structure

All examples and guides can be found in `~/src/content/docs` and they are authored as `.md` or `.mdx` files.

To add a new guide to the navigation, update the `~/astro.config.mjs` Starlight sidebar items array.

## Build

1. Install npm dependencies

    - Use the VS Code `npm: install` task
    - (alternative) Run `npm i` at the command line

2. Run the Astro dev server

    - Use the VS Code `npm: build` task
    - (alternative) Run `npm build` at the command line

Any changes are run through the [Astro Build](https://github.com/seangwright/xperience-by-kentico-styleguide/actions/workflows/build.yml) GitHub Action when pushed to the `main` branch.

Any updates to the `main` branch are auto deployed to Netlify and are accessible at <https://xperience-by-kentico-styleguide.netlify.app/>.

## Contribute

Open an [Issue](https://github.com/seangwright/xperience-by-kentico-styleguide/issues/new)
or a [Pull Request](https://github.com/seangwright/xperience-by-kentico-styleguide/compare)
