## Introduction

- I am an open source developer working at The Guild
- We have been thinking and experimenting this year on GraphQL API documentation
- We looked at the landscape and didn’t find anything checking all these boxes
  - Open Source
  - GraphQL Native
  - Actively Maintained
  - Featureful, e.g.:
    - Reference Generator
    - Playgrounds
    - User/Project Context
- I’m here to share some of our thinking and a prototype called Polen

## Ideas

- Architecture Of a Tool
  - We want something that spans turn key to DIY
  - Turn key: Framework (composed libraries)
  - DYI: Libraries
  - Framework supports declarative style, prototypes, content focused teams, automatic improvements (e.g. interface stays same, internals optimize)
  - Libraries support an ejectability target for framework, encourages sustainable architecture (e.g. forcing function to consider separation of concerns), allows piecemeal adoption meeting developers where they are, contributes reusable blocks back to the community rising tide for all boats
- Versioning
  - Can happen even with GraphQL (cite few real world examples)
  - Changelog versus versions
- Changelog
  - We want to keep users informed and engaged, build their confidence, show off your efforts
  - Changes in the schema are not 1:1 with versions of the API
  - Categorize changes e.g. breaking vs non-breaking, deprecations, etc.
  - Support notification subscriptions on schema paths
- Reference Documentation
  - Lean into the graph nature
  - Schema paths should be deeply addressable
  - Rich markdown descriptions
  - Highlight deprecations
- Last Mile Schema Augmentations
  - Flexibility, decoupled, asynchronous
  - Try things out, hot fixes
- Content
  - We need guides to help our users navigate our platforms and concepts and show examples
  - We need marketing to help communicate our vision and story
  - Boiler plate topics automated
    - Authentication
    - Introspection
  - GraphQL Document Code Blocks
    - Seamless Multiple client support, start native syntax but don’t stop there
    - Bake in the popular ones and make it extensible
    - Seamless reference links across all client types
    - Versioning support; authors write code block variants in native syntax, app shows contextually relevant one;
- Playgrounds
  - …
- User & Project Context
  - Support user context, and their projects
  - Support sign in, project selection, environment selection, token automation for playgrounds, traffic metrics, relate traffic to schema parts, filter reference by only what’s used by your selected project, etc.
  - Its easy to imagine collaboration next, shared persisted playground documents, etc.
  - A lot of this is not new, but we haven’t seen it all come together in one modern modular open source tool kit for GraphQL (or any API technology for that matter)
- Themes
  - Avoid Silos/Corners/Isolation between Guides Playground Reference Project
    - Our current tools make it easier for us to create these things in isolation than integrated
    - But that doesn’t match the ideal user experience
    - Seamless navigation between them, go even further and allow co-location
    - Think about it like a work bench, not a book

## Practical

- Polen
  - Our prototype
  - Framework
    - CLI
    - API
  - Stack
    - Vite Plugin, Rolldown, Radix Themes, React, React Router, Code Hike, Tree Sitter, Hono
    - Future: RSC (React Server Components), PandaCSS, Effect
  - Multiple build architectures: SSG, SSR
- Learnings
  - Rehype, Remark, … Regraph?
    - We don’t seem to have a widespread project that allows building rich custom experiences over GraphQL document ASTs
  - Vite is a deep powerful engine with a lively community
    - Notable happenings include active on an official RSC plugin and imminent Rolldown with follow up goal of Vite bundling symmetry between dev and build
    - Personally discovered a steep learning curve, integration of many elements, landscape changes measured by the month, varying code execution points and life cycles (app client, app server, dev time, build time, CLI time, imports resolution, virtual modules, cache, HMR, tree shaking, …), etc.
    - Build on top of existing framework? Different tradeoffs, often not designed to be “wrapped”, likely going to have to learn building blocks sooner or later and they can still deliver a good abstraction levels e.g. recent Vite RSC plugin with new and related React Router RSC work look to be great framework building blocks

## Conclusion

- What’s next
  - Begin identifying valuable libraries for the community?
  - No roadmap!
  - Try it out, give us feedback
  - Join us on GitHub discussions on the Polen repo
  - Looking for sponsors to continue active development
