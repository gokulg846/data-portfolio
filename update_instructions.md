# Updating the Data and ML portfolio

The project list and every case-study page are generated from `content/projects.ts`.

## Add a project

1. Copy one existing `DataProject` record in `content/projects.ts`.
2. Give it a unique `slug` and `index`.
3. Fill in the data, method, system, evaluation, stack, limitations, and repository fields.
4. Set `visibility` to `public` when it is ready.

The homepage card and `/projects/<slug>/` case study will be generated automatically.

## Hide a project

Change its `visibility` from `public` to `hidden`. This removes the card and route from the static build.

## Reorder projects

Move project records into the desired order and update their `index` values.

## Update a result

Only add a metric after a reproducible run or professional source supports it. Put experimental detail in the `evaluation` field and keep dataset or deployment boundaries in `limitations`.

## Publish

Pull requests merged into `main` trigger the GitHub Pages workflow. The deployment uses the static output produced by `npm run build:pages`.

Search indexing is disabled during development in `app/layout.tsx`. Set `robots.index` and `robots.follow` to `true` when the portfolio is ready for public discovery.
