import { defineConfig } from 'polen/polen'

export default defineConfig({
  schema: {
    augmentations: [
      {
        type: 'description',
        content: 'Custom content from **my portal app** 🌺!',
        on: {
          type: 'TargetType',
          name: 'Query',
        },
        placement: 'over',
      },
    ],
  },
})
