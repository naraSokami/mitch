import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect, useRef } from 'react';
import Section from './Section';
import styles from './Sections.module.sass';

gsap.registerPlugin(ScrollTrigger);

const Sections = () => {
  const sectionsRef = useRef(null);

  useEffect(() => {
    if (sectionsRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.section-container',
          markers: true,
          pin: true,
          start: "top top",
          end: "+=500vh",
          endTrigger: '.section-container',
          scrub: 1,
        }
      });

      for (let i = 0; i < sectionsRef.current.children.length; i++) {
        const section = sectionsRef.current.children[i];
        const animProperty = i % 2 == 0 ? 'xPercent' : 'yPercent';

        tl.fromTo(section, {
          [animProperty]: -100,
          duration: 1,
        },
        {
          [animProperty]: 0,
          duration: 1
        })
      }
    }
  }, [sectionsRef])

  return (
    <div ref={sectionsRef} className={`section-container ${styles.sections}`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Section key={index + 1} title={`${index + 1}`} animProperty={index % 2 == 0 ? 'xPercent' : 'yPercent'} />
      ))}
    </div>
  )
}

export default Sections