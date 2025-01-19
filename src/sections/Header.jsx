import clsx from "clsx"
import { useEffect } from "react"
import { useState } from "react"
import { Link as LinkScroll } from "react-scroll"
import logo from "/images/xora.svg"
import bg1 from "/images/bg-outlines.svg"
import bg2 from "/images/bg-outlines-fill.png"



const Header = () => {
    const [hasScrolled,setHasScrolled] = useState(false);
    const [open,setOpen] = useState(false);
    const main ="https://nazib999.github.io/Xora/"

    useEffect(() => {
      const handleScroll =()=>{
        setHasScrolled(window.scrollY > 32)
      }
      window.addEventListener("scroll",handleScroll);
      return()=>{
        window.removeEventListener('scroll',handleScroll)
      }
    }, [])
    const NavLink = ({title}) =>(
        <LinkScroll onClick={()=>setOpen(false)} to={title} offset={-100} spy smooth activeClass="nav-active" className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5">
        {title}
        </LinkScroll>
      )
    
  return (
    <header className={clsx('fixed top-0 left-0 z-50 py-10 w-full transition-all duration-500 max-lg:py-4', hasScrolled && 'py-2 bg-black-100 backdrop-blur-[8px]')}>
        <div className='container max-lg:px-5 flex items-center h-14 '>
            <a href="" className='lg:hidden flex-1 cursor-pointer z-2'>
                <img src={logo} width={115} height={55} alt="logo" />
            </a>
            <div className={clsx("w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0",open?"max-lg:opacity-100":"max-lg:pointer-events-none")}>
            <div className='max-lg:relative  max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4'>
                <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
                    <ul className='flex max-lg:px-12 max-lg:block'>
                        <li className='nav-li'>
                            <NavLink title='features'/>
                            <div className="dot"/>
                            <NavLink title='pricing'/>
                        </li>
                        <li className='nav-logo'>
                          <LinkScroll to="hero" offset={-200} spy smooth className="max-lg:hidden cursor-pointer">
                          <img src={logo} width={160} height={55} alt="logo" />
                          </LinkScroll>
                        </li>
                        <li className='nav-li'>
                            <NavLink title='faq'/>
                            <div className="dot"/>
                            <NavLink title='download'/>
                        </li>
                    </ul>
                </nav>
                <div className="lg:hidden block absolute top-1/2 left-0 w-[960px] h-[380px] translate-x-[-290px] -translate-y-1/2 rotate-90">
                    <img src={bg1} width={960} height={380} className="relative z-2" alt="" />
                    <img src={bg2} width={960} height={380} className="absolute inset-0 mix-blend-soft-light opacity-5" alt="" />
                </div>
            </div>
            </div>
            <button onClick={()=>{setOpen((pre)=>!pre)}} className="lg:hidden z-2 size-10 border-2 border-s4/25 rounded-full flex justify-center items-center">
            <img src={`/Xora/images/${open? "close":"magic"}.svg`} alt="magic" className="size-1/2 object-contain" /></button>
        </div>
    </header>
  )
}

export default Header