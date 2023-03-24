import '../styles/Hero.css'
import cluster from '../../public/images/photo-cluster.png'

export const Hero = () => {
    return (
        <section className='hero-wrap'>
            <div className='hero-img-box'>
                <img src={cluster} />
            </div>
            <div className='hero-txt-box'>
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts - all without leaving home.</p>
            </div>
        </section>
    )
}