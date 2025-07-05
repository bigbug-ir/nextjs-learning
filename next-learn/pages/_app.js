  export default function MyApp ({Component , pageProps}){
    return (
        <>
            <header>
                header
            </header>
            <Component {...pageProps}/>
            <footer>
                footer
            </footer>
        </>
    )
  }