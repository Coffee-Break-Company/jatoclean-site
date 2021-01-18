import Head from "next/head"
import Image from "next/image"

function Home() {
    return (
        <div class="main">
            <Head>
                <title>JatoClean</title>
            </Head>
            <div class="main-top"> 
                <div class="logo">
                    <Image src="/jatoclean-logo.svg" layout="fill"/>
                </div>
            </div>
            <div class="main-bottom">
                <div class="main-content">

                </div>
            
            
             </div>
        </div>
    )
}

export default Home