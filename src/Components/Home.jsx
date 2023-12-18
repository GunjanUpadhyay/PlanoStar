import React from 'react'
import vg from "../assets/img1.jpg"
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"
const Home = () => {
  return (
   <>
    <div className='home' id='home'>
        <main>
            <h1>PlanoStar</h1>
            <p>The View of galaxy & universe</p>
        </main>
    </div>
    <div className="home2">
        <img src={vg} alt="graphics" />
        <div>
            <p>The galaxy, an immense cosmic expanse, harbors billions of stars, planets, and nebulae, bound by the gravitational dance of celestial bodies. A vast tapestry of cosmic wonders, it whispers the secrets of the universe across its swirling arms. Within its depths, mysteries unfold, inviting exploration and igniting the human quest for understanding.</p>
        </div>
    </div>

    <div className="home3" id='about'>
        <div>
            <h1>Who we are?</h1>
            <p>
            Planostar, a pioneering company at the forefront of space exploration, navigates the cosmos with innovation and expertise. From cutting-edge satellite technology to interstellar research, Planostar propels humanity's reach into the vast unknown. With a commitment to unlocking the mysteries of the universe, Planostar charts new frontiers, inspiring a future where the stars are within our grasp.
            </p>
        </div>
    </div>

    <div className="home4" id='brands'>
        <div>
            <h1>Brands</h1>
            <article>
                <div style={{
                    animationDelay:"0.3s",
                }}>
                    <AiFillGoogleCircle/>
                    <p>Google</p>
                </div>
                <div style={{
                    animationDelay:"0.5s",
                }}>
                    <AiFillAmazonCircle/>
                    <p>Amazon</p>
                </div>
                <div style={{
                    animationDelay:"0.7s",
                }}>
                    <AiFillInstagram/>
                    <p>Instagram</p>
                </div>
                <div style={{
                    animationDelay:"0.1s",
                }}>
                    <AiFillYoutube/>
                    <p>Youtube</p>
                </div>
            </article>
        </div>
    </div>
    </>
  )
}

export default Home