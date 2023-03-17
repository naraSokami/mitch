import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styles from './Sections.module.sass';

gsap.registerPlugin(ScrollTrigger);

const Section = (props) => {
  return (
    <div className={styles.section}>
      <div style={{ margin: 'auto' }}>{props.title}</div>
    </div>
  )
}

export default Section;