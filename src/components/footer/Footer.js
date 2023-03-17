import gsap from 'gsap/dist/gsap';
import { useEffect } from 'react';
import styles from './Footer.module.sass';

const Footer = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo('.footer', {
      y: '100%',
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: .5
    })
  }, [])

  return (
    <div className={`${styles.footer} footer`}>
      <p>Michel Dalton</p>
      <p>all rights reserved</p>
      <p>2023 &copy;</p>  
    </div>
  )
}

export default Footer;