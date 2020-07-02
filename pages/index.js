import Head from "next/head";

import { Box, Center } from "@chakra-ui/core";

export default function Home() {
  return (
    <Center flexDir='column' minH='100vh' py={2}>
      <Head>
        <title>Next JS & Chakra UI Starter Template</title>
        <meta name='title' content='Next JS & Chakra UI Starter Template' />
        <meta name='description' content='Get started with Next JS & Chakra UI using this starter template' />

        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://navinmoorthy.me/' />
        <meta property='og:title' content='Next JS & Chakra UI Starter Template' />
        <meta property='og:description' content='Get started with Next JS & Chakra UI using this starter template' />
        <meta
          property='og:image'
          content='https://og-image.now.sh/Starter%20Template.jpeg?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg&images=https%3A%2F%2Fgist.githubusercontent.com%2Fnavin-moorthy%2Fd4c5fe7f384a106ba8171eee77b45623%2Fraw%2F3e4d37340270a38367bfe94dd2f7daea2a0537a2%2Fchakra-ui-logo.svg&heights=200&heights=150'
        />

        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://navinmoorthy.me/' />
        <meta property='twitter:title' content='Next JS & Chakra UI Starter Template' />
        <meta
          property='twitter:description'
          content='Get started with Next JS & Chakra UI using this starter template'
        />
        <meta
          property='twitter:image'
          content='https://og-image.now.sh/Starter%20Template.jpeg?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg&images=https%3A%2F%2Fgist.githubusercontent.com%2Fnavin-moorthy%2Fd4c5fe7f384a106ba8171eee77b45623%2Fraw%2F3e4d37340270a38367bfe94dd2f7daea2a0537a2%2Fchakra-ui-logo.svg&heights=200&heights=150'
        />
      </Head>

      <Center as='main' flexDir='column' flex='1' paddingX='5rem'>
        <h1 className='title'>Next.js & Chakra UI</h1>
        <h2 className='title h2'>Starter Template</h2>

        <p className='description'>
          Get started by editing <code>pages/index.js</code>
        </p>

        <div className='grid'>
          <a href='https://nextjs.org/docs' className='card'>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href='https://nextjs.org/learn' className='card'>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a href='https://github.com/vercel/next.js/tree/master/examples' className='card'>
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href='https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            className='card'
          >
            <h3>Deploy &rarr;</h3>
            <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
          </a>
        </div>
      </Center>

      <style jsx>{`
        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
          margin-bottom: 16px;
        }

        .title.h2 {
          font-size: 2.5rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono,
            Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>
    </Center>
  );
}
