import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
import gsap from 'gsap'

const About = () => {
    useGSAP(() => {
        const titleSplit = SplitText.create('#about h2', {type: 'words'})

        const scrollTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#about',
                start: 'top center'
            }
        })

        scrollTimeline
            .from(titleSplit.words, {opacity: 0, duration: 1, yPercent: 100, ease: 'expo.out', stagger: .02})
            .from('.top-grid div, .bottom-grid div', { opacity: 0, duration: 1, ease: 'power1.inOut', stagger: .04 }, '-=.5')
    }, [])


    return (
        <div id='about'>
            <div className="mb-16 px-5 md:px-0">
                <div className="content">
                    <div className="md:col-span-8">
                        <p className="badge">Best Cocktails</p>
                        <h2>Where Every detail matters <span className="text-white">-</span> from muddle to granish</h2>
                    </div>

                    <div className="sub-content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt illum sint fuga aliquid, inventore commodi a exercitationem expedita, fugit, tempore quod ad ipsum optio culpa.</p>

                        <div>
                            <p className='md:text-3xl text-xl font-bold'>
                                <span>4.5</span>/5
                            </p>
                            <p className="text-sm text-white">More than +1200 customers</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="top-grid">
                <div className="md:col-span-3">
                    <div className="noisy" />
                    <img src="/images/abt1.png" alt="grid-img-1" />
                </div>

                <div className="md:col-span-6">
                    <div className="noisy" />
                    <img src="/images/abt2.png" alt="grid-img-2" />
                </div>

                <div className="md:col-span-3">
                    <div className="noisy" />
                    <img src="/images/abt5.png" alt="grid-img-5" />
                </div>
            </div>

            <div className="bottom-grid">
                <div className="md:col-span-8">
                    <div className="noisy" />
                    <img src="/images/abt3.png" alt="grid-img-3" />
                </div>

                <div className="md:col-span-4">
                    <div className="noisy" />
                    <img src="/images/abt4.png" alt="grid-img-4" />
                </div>
            </div>
        </div>
    )
}

export default About