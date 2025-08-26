# Introduction

- I am an open source developer working at The Guild
- We have been thinking and experimenting this year on GraphQL API documentation
- We noticed that the landscape doesn’t have tooling meeting these characteristics
  - Open Source
  - GraphQL Native
  - Actively Maintained
  - Featureful, e.g.:
    - Reference Generator
    - Playground
    - User/Project Context
- I’m here to share some thoughts about GraphQL documentation and a prototype we’re calling Polen

# Note: Personas

- "Authors": people building a developer portal
- "Developers": people using the API that the developer portal is about

# Characteristics Of Interest

## Documentation Kinds

Authors should be able to present with different kinds of documentation.

1. Guides:
   - Topic oriented (getting started, authorization, etc.)
   - Coarse grained
   - Typically manually written
   - ultimately free form
2. Examples:
   - Task oriented (how to do X with Y)
   - Medium grained (practical, link between guides and reference)
   - Typically manually written
3. Reference:
   - Interface oriented (inputs, outputs, etc.)
   - Fine grained
   - Typically generated in part or whole from a schema

## Relatable Content

Authors should be able to easily manage connections between content kinds.

- Reference-to-Guide: Reference docs for GraphQL fields sensitive to authorization include connections to a guide about authorization
- Guide-to-Example: An authorization guide includes connections to examples that implicate authorization
- etc.

## Developer Context

It is common for APIs to have large surface areas used in different ways by developers.

A developer should be able to filter, highlight, etc. content that is relevant to their projects.

A developer should be able to sign into the docs and select among their projects/environments to peruse the documentation in a way useful to them. For example:

In reference:

- Focus reference to types, fields, etc. used in actual requests
- See request metrics next to types, fields etc.
  In playground:
  - Automated token management
  - Save documents for later use and reference
    In examples:
  - Lead with client kind that is actually in use by the project
    In general:
- Pin content for fast access: reference paths, examples, saved playground documents, etc.

## Developer Collaboration

Building on top of context, developers should be able to share context across a team, e.g. saved documents or pins.

## Abstraction Levels

Authors should be able to adopt a tool at their desired abstraction level, each level building upon the former.

1. Libraries
   - Building blocks
   - Use cases: Brown field, incremental adoption, tangental goals
   - Benefits: Control, flexibility, radical customization
   - Blocks: Provided
   - Approach: Owned
   - Deployment: Owned
2. Framework
   - Opinionated library composition
   - Use cases: Green field, prototypes, MVPs, content focused teams
   - Benefit: Rapid development (use a cow path), easy upgrades (declarative means intent is decoupled from implementation)
   - Audience: Content focused teams
   - Blocks: Provided
   - Approach: Provided
   - Deployment: Author
3. SaaS
   - Turn key hosted solution
   - Use cases: Framework + zero ops
   - Benefit: Zero ops, focus on content, ultra rapid development, preview deployments, GitHub integration, etc.
   - Blocks: Provided
   - Approach: Provided
   - Deployment: Provided

## Architecture Kinds

Authors should be able to choose the architecture that best fits their needs. If they are using developer context features a portable server should easily available, but if they aren't using such features, they should be able to shed the server.

1. SSG
   - Static HTML pages
   - Deployment: static
   - Benefits: SEO, serverless
   - Use cases: Public documentation
2. SPA
   - Client Application
   - Deployment: static
   - Benefits: serverless, fast simple builds
   - Use cases: Prototypes, internal docuentation
3. SSR
   - Server+Client Application
   - Benefits: SEO, Developer context and collaboration features

## Reference Addressability

Reference should be deeply addressable e.g. a default value at argument at field at type at API version.

## Reference Views

Reference should be viewable in different ways playing to different strengths.

1. Graph
   - Feeling: Workbench, Macro, top of the mountain, surveying the landscape
   - Good for: Exploration, building schema-level mental model, discover relationships, themes, understand dense and sparse spots
2. Tree
   - Feeling: Workbench, Micro, Starting from a trailhead, walking along paths
   - Good for: Drilling, building type-level mental model
3. Page
   - Feeling: familiar, focused, stable
   - Good for: addressability, sharing, saving

## Reference Augmentations

Authors should be empowered to add/change descriptions on schema elements.

Motivations may include:

- arbitrary experimentation
- temporary hot fixes
- localization
- A/B testing
- interactive features

## API Versioning

Authors should be able to present different versions of their API.

Even if GraphQL reduces the need for API versioning, authors should not be cornered in on this topic.

## API Revisions

Authors should be able to show their developers a timeline of API changes. Motivation: help developers stay confident and informed about the API.

Revisions should be:

- Connected with reference, e.g.:
  - "Field foo added in revision bar"
  - If breaking changes within revisions, possibility of ghosted fields/types/etc. for posterity
- Categorized e.g.:
  - breaking
  - non-breaking

## Guides Boilerplate

Authors should have blocks to automate content with well established conventions e.g.:

- authentication
- introspection

## Guides GraphQL Documents

Authors should be able to write guides with a rich GraphQL document code block to give examples. Document block features might include e.g.:

- Select client type to render with (Native, GenQL, Graffle, cURL, etc.)
- Fields linked to reference, even across all client types
- Turn into an intant inline playground to run and edit

## Playgrounds

GraphiQL gives the community a foundation for playground experiences. Building on top of that, developers should be able to:

- Have automated tokens based on login and project/environment context
- Save and organize documents, share with team
- Navigate to reference like with guide GQL document blocks or open inline

# Prototype

We have been experimenting in the open with some of these ideas in a prototype JS framework called Polen.

You can already check it out at https://polen.js.org where you can see docs and demos.

## Features

It has basic support for some features like:

- Guides content
- Reference linked GraphQL document code blocks
- Schema versions and revisiions
- SSG and SSR builds
- Schema descriiption augmentations

## Technical Approach

The core of our prototype is Vite (with Rolldown), a tool that lowers the bar to creating domain specific frameworks. It strikes a balance between being a clean low level abstraction but also high level enough to avoid reinvdenting any major wheels.

Other major components include:

- Radix Themes
- React
- React Router
- Code Hike
- Tree Sitter
- Hono
- Effect
- Future: RSC (React Server Components), PandaCSS

## Learnings Along The Way

### Rehype, Remark, … Regraph?

Remark makes Markdown extensible while rehype does the same for HTML.

Conversely, we don’t seem to have a widespread project that allows building rich custom experiences over GraphQL document ASTs.

We built an interactive GraphQL document code block using the Tree Sitter and graphql packages. Maybe there's an opportunity to generalize this work towoard something like Remark and Rehype.

### Vite

- Great, we still think the right choice, but not a free lunch
- Building a framework is still a deep domain in a rapidly changing ecosystem, e.g.:
  - during our work the Vite community progressed toward an RSC plugin that would significantly simplify implementation aspects of framework's wishing to offer server features to their users like we want to do with Polen.
  - Another major ongoing effort to unify development and production bundling pipelines of which Rolldown (a Rust Rollup) is part of

# What’s next?

- No concrete plans for Polen yet
- Do try it out and give us feedback or even contribute on GitHub
- Most importantly let's continue to push the state of the art of docs forward, like GraphQL did almost 10 years ago when GraphiQL raised the bar on just how good baseline tooling in an API community could be.

# Thanks!
