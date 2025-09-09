import { defineConfig } from 'polen/polen'

export default defineConfig({
  schema: {
    augmentations: [
      {
        on: 'Query',
        content: 'Custom content from **my portal app** 🌺!',
        placement: 'over',
      },
    ],
  },
})
