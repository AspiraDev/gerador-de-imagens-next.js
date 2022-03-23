import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from "next/router";
import Link from "next/link";

const aleatorio = Math.floor(Math.random() * 500 + 1000)



export default function IndexPage() {

        return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Ajude a Encontrar Um Desaparecido
        </h1>

        <div style={{borderRadius: '15px', overflow: 'hidden'}}>

        
        <Image
     
      src={"https://desaparecidos.policiacivil.mg.gov.br/arquivo/downloadArquivo/ver_" + aleatorio}
      alt="Picture of the author"
      width={500}
      height={500}
    />


      </div>

        <div className="grid">
          <a href="http://localhost:3000/desaparecidos"  className="card">
            <h3>Gerar</h3>
            
          </a></div>

 
      </main>

  

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .macaco{
            border-radius: 80px;
        }

        main {
          
          flex: 1;
          padding-top: 0px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }


        a {
          color: inherit;
          text-decoration: none;
        }


        .title {
          margin-top: 1%;
          
          font-size: 4rem;
        }





        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
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
          
          flex-basis: 45%;
          padding: 0.2rem;
          text-align: center;
          color: inherit;
          width: 250px;
          height: 50px;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          border-color: #0070f3;
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

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
