import { Polen } from 'polen'

export default Polen.defineConfig({
  schema: {
    augmentations: [
      // Unversioned - applies to all versions
      {
        on: 'Query',
        content: '⚡ **PokéAPI GraphQL** - Query Pokémon data from across all regions',
        placement: 'before',
      },
      // Versioned with different content per version
      {
        on: 'Pokemon',
        placement: 'after',
        content: 'A Pokémon species with basic information',
        versions: {
          1: {
            content:
              '**Generation I** - Original 151 Pokémon from the Kanto region. These are the classic Pokémon that started it all, from Bulbasaur (#001) to Mew (#151).',
          },
          2: {
            content:
              '**All Generations** - Complete Pokédex featuring Pokémon from all regions including Kanto, Johto, Hoenn, Sinnoh, Unova, Kalos, Alola, Galar, and Paldea. Includes mega evolutions, regional forms, and Gigantamax forms.',
          },
        },
      },
      // Version-specific only (v2 has more features) - Testing invalid path diagnostic
      {
        versions: {
          2: {
            on: 'TypeEffectiveness',
            content:
              '**Battle System** - Type matchup effectiveness chart showing damage multipliers. Super effective (2x), not very effective (0.5x), and no effect (0x) relationships.',
            placement: 'before',
          },
        },
      },
    ],
  },
  home: {
    hero: {
      layout: 'cinematic',
    },
    examples: {
      only: ['get-pokemon', 'list-pokemons', 'search-pokemon'],
    },
  },
})
