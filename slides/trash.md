# Learnings Along The Way

---

# Rehype, Remark, … Regraph?

Remark makes Markdown extensible while rehype does the same for HTML.

Conversely, we don’t seem to have a widespread project that allows building rich custom experiences over GraphQL document ASTs.

We built an interactive GraphQL document code block using the Tree Sitter and graphql packages. Maybe there's an opportunity to generalize this work towoard something like Remark and Rehype.

---

# Vite

- Great, we still think the right choice, but not a free lunch
- Building a framework is still a deep domain in a rapidly changing ecosystem, e.g.:
  - during our work the Vite community progressed toward an RSC plugin that would significantly simplify implementation aspects of framework's wishing to offer server features to their users like we want to do with Polen.
  - Another major ongoing effort to unify development and production bundling pipelines of which Rolldown (a Rust Rollup) is part of

---

# Reference Addressability

Reference should be deeply addressable e.g. a default value at argument at field at type at API version.

---

# Guides Boilerplate

Authors should have blocks to automate content with well established conventions e.g.:

- authentication
- introspection

---

# Guides: Integrated GraphQL Documents

Authors should be able to write guides with a rich GraphQL document code block to give examples. Document block features might include e.g.:

- Select client type to render with (Native, GenQL, Graffle, cURL, etc.)
- Fields linked to reference, even across all client types
- Turn into an intant inline playground to run and edit

# Work In Progress

::left::

**Pillars**

- Home Page
- Arbitrary Pages
- Examples
- Reference
- Changelog
- Build (SSG and SSR)
- Dev

::right::

**Beams**

- Versions & Revisions
- Cross References
- Interactive Documents
- Schema Description Augmentations
- Custom Component Code

---
