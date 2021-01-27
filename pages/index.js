import Head from "next/head"
import Image from "next/image"
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



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
                <div class="main-bottom-title-box">
                    <div class="main-bottom-title">
                        <p class="text-big">MANTENHA SEU AMBIENTE LIMPO E PROTEGIDO</p>
                        <p class="text-mid">LAVAGEM E HIGIENIZAÇÃO DE CARROS E ESTOFADOS</p>
                    </div>
                </div>
                <div class="main-bottom-images-box"></div>
                <div class="main-bottom-social-box">
                    <div class="main-bottom-social-text">
                        <span class="text-mid">
                            ENTRE EM CONTATO CONOSCO E SOLICITE SEU ORÇAMENTO
                        </span>
                    </div>
                    <div class="main-bottom-social-icons">
                        <div class="icon-social">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </div>
                        <div class="icon-social">
                            <FontAwesomeIcon icon={faInstagram} />
                        </div>
                        <div class="icon-social">
                            <FontAwesomeIcon icon={faWhatsapp} />
                        </div>
                    </div>
                </div>
             </div>
        </div>
    )
}

export default Home