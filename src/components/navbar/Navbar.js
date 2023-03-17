import { gsap } from 'gsap/dist/gsap';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styles from './Navbar.module.sass';

const Navbar = () => {
  const links = [
    {
      name: "Mitch",
      path: "/"
    },
    {
      name: "Gallery",
      path: "/gallery"
    },
    {
      name: "Who I Am",
      path: "/about-us"
    },
    {
      name: "Get In Touch",
      path: "/contact"
    }
  ]

  const {asPath} = useRouter();

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo('.navbar', {
      y: '-100%',
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: .5
    })
  }, [])

  return (
    <nav className={`${styles.navbar} navbar`}>
      <ul>
        {links.map((link, i) => (
            <li className={asPath.split('/')[1] === link.path.slice(1) ? styles.active : ''} key={i}>
              <Link href={link.path}>{link.name}</Link>
            </li>
          )
        )}
      </ul>
    </nav>
  )
}

export default Navbar;