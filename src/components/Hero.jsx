import { useGSAP } from "@gsap/react"
import { SplitText } from "gsap/all"
import gsap from "gsap"

const Hero = () => {

    useGSAP(() => {
        //animate by line
        const paragraphSplit = new SplitText('.subtitle', {
            type: 'lines'
        })
        gsap.from(paragraphSplit.lines, {
            opacity: 0,
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: .06,
            delay: 1
        })

        //animate by letter
        const heroSplit = new SplitText('.title', {
            type: 'chars, words'
        })
        heroSplit.chars.forEach(char => char.classList.add('text-gradient'))
        gsap.from(heroSplit.chars, {
            yPercent: 100,
            duration: 1,
            ease: 'expo.out',
            stagger: .06
        })

        //animate leaves
        gsap.timeline({
            scrollTrigger: {
                trigger: '#hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        })
            .to('.right-leaf', { y: 200 }, 0)
            .to('.left-leaf', { y: -200 }, 0)
    }, [])


    return (
        <>
            <section id="hero" className='noisy'>
                <h1 className="title">Mojito</h1>

                <img src="/images/hero-left-leaf.png" alt="left-leaf" className="left-leaf" />
                <img src="/images/hero-right-leaf.png" alt="right-leaf" className="right-leaf" />

                <div className="body">
                    <div className="content">
                        <div className="space-y-5 hidden md:block">
                            <p>Cool . Crisp . Classic .</p>
                            <p className="subtitle">
                                Sip the Spirt <br /> of Summer
                            </p>
                        </div>

                        <div className="view-cocktails">
                            <p className="subtitle">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia harum quae magni dicta commodi ipsam inventore laudantium, dolorem explicabo numquam?
                            </p>
                            <a href="#cocktails">Cocktails</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero