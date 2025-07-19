import { useGSAP } from "@gsap/react"
import { SplitText } from "gsap/all"
import gsap from "gsap"
import { useRef } from "react"
import { useMediaQuery } from "react-responsive"

const Hero = () => {

    const videoRef = useRef()

    const isMobile = useMediaQuery({maxWidth: 767})

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
            opacity: 0,
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

        const startValue = isMobile ? 'top 50%' :'center 60%'
        const endValue = isMobile ? '120% top' : 'bottom top'

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "video",
                start: startValue,
                end: endValue,
                scrub: true,
                pin: true,
            },
        });

        videoRef.current.onloadedmetadata = () => {
            tl.to(videoRef.current, {
                currentTime: videoRef.current.duration,
            });
        };
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

                        <div className="view-cocktails ">
                            <p className="subtitle">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia harum quae magni dicta commodi ipsam inventore laudantium, dolorem explicabo numquam?
                            </p>
                            <a href="#cocktails">Cocktails</a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="video absolute inset-0">
                <video src="/videos/output.mp4" ref={videoRef} muted playsInline preload="auto"></video>
            </div>
        </>
    )
}

export default Hero