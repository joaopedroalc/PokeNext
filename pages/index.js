import Image from 'next/image';
import CardPokemon from '../components/CardPokemon';
import styles from '../styles/Home.module.css'

export async function getStaticProps() {
  const maxPokemons = 251;
  const api = 'https://pokeapi.co/api/v2/pokemon/'

  const res = await fetch(`${api}/?limit=${maxPokemons}`)
  const data = await res.json()

  //add pokemon index
  data.results.forEach((item, index) => {
    item.id = index + 1;
  })

  return {
    props: {
      pokemons: data.results,
    },
  }

}

export default function Home({ pokemons }) {
  return (
    <div className={styles.containerHome}>
      <div className={styles.title_container}>
        <h1 className={styles.title}>Poke<span>Next</span></h1>
        <Image src="/assets/pokeball.png" width="50" height="50" alt="pokeball"></Image>
      </div>

      <div className={styles.pokemon_container}>
        {pokemons.map((pokemon) => (
          <CardPokemon key={pokemon.id} pokemon={pokemon}></CardPokemon>
        ))}
      </div>
    </div>
  )
}
