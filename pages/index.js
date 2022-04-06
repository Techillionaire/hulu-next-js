import Head from 'next/head'
import Feeds from '../components/Feeds'
import Header from '../components/Header'
import Nav from '../components/Nav'
import requests from '../utils/requests'

export default function Home({results}) {
  
  return (
    <div >
      <Head>
        <title>Hulu 2.0</title>
        <meta name="description" content="Movie streaming application developed using Next Js framework by Lee Ownikoko Techillionaire" />
        <meta name='theme-color' content="#06202A"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Nav */}
      <Nav />

      {/* Feeds */}
      <Feeds results={results}/>
    </div>
  )
}

export const getServerSideProps = async (context) => {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`
  )
  
  return {
        props: {
          results: request.results,
        }
      }
}


// export async function getServerSideProps(context) {
//   const genre = context.query.genre;

//   const request = await fetch(
//     `https://api.themoviedb.org/3${
//       requests[genre]?.url || requests.fetchTrending.url
//     }`
//   ).then((res) => res.json());
//   return {
//     props: {

//       results: request.results,
//     }
//   }
// }
