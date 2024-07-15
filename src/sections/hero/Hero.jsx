import heroImg from '../../assets/hero-img.png'
import linkedInDark from '../../assets/linkedin-dark.svg'
import CV from '../../assets/cv.pdf'
import { useTheme } from '../../common/ThemeContext'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import { Button } from '@material-tailwind/react'

const Hero = () => {
  const { theme, toggleTheme } = useTheme()
  const themeIcon = theme === 'light' ? sun : moon
  return (
    <section id='hero' className='flex flex-col items-center justify-center gap-3'>
      <div className='relative'>
        <img src={heroImg} alt='Profile picture of Justin Lupica' className='' />
        <img
          src={themeIcon}
          alt='Theme Icon'
          onClick={toggleTheme}
          className='absolute -top-2 -right-2'
        />
      </div>
      <div className='flex flex-col items-center gap-4'>
        <h1 className=''>Justin Lupica</h1>
        <h2 className='text-2xl'>Frontend Developer</h2>
        <span>
          <a href='https://www.linkedin.com/in/justin-lupica/' target='_blank'>
            <img src={linkedInDark} alt='LinkedIn Icon' />
          </a>
        </span>
        <p>With a passion for developing modern web apps for commercial businesses.</p>
        <a href={CV} download>
          <button>Resume</button>
        </a>
      </div>
    </section>
  )
}

export default Hero
