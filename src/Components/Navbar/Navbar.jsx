import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {useState, useEffect} from 'react';



function classNames(...classes) {

  
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {

  
  const [current, setCurrent] = useState(null)

  const [scrolled, setScrolled] = useState(false);

  const handleClick = (id) => {
    setCurrent(id);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
      
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navClasses1 = `fixed z-30 w-full backdrop-filter backdrop-filter backdrop-blur-sm transition-all sm:backdrop-filter-none duration-300 shadow-xl ${scrolled ? '' : ''}`;
  

  const navigation = [
    {id:1, name: <span>Inicio</span>, href: '/', current: current === 1  },
    {id:2, name: <span>Seguros</span>, href: '#seguros', current: current === 2 },
    {id:3, name: <span>Sobre Nosotros</span>, href: '#nosotros', current: current === 3 },
    {id:4, name: <span>Contacto</span>, href: '#contact', current: current === 4 },
  ]


  return (
    <Disclosure as="nav" className={navClasses1}>
      {({ open }) => (
        <>
          <div className="mx-auto z-30 back">
            <div className="relative flex  items-center justify-between">
              
              <div className='w-full'>
                <div className="flex justify-between items-center bg-[#0830A6] py-3 px-10">
                  <a href='/' className=" sm:flex z-30 duration-300 cursor-pointer hover:animate-jiggle  font-bold"><img src="https://res.cloudinary.com/dfschbyq2/image/upload/v1711661519/Dise%C3%B1o_sin_t%C3%ADtulo__34_-removebg-preview_upscayl_4x_realesrgan-x4plus_ppihnw.png" alt="" className='w-48'/></a>
                  <div className='hidden lg:flex lg:justify-center lg:items-center gap-10  rounded-md z-50 py-4'>
                      {navigation.map((item) => (
                        <a
                          key={item.id}
                          href={item.href}
                          onClick={() => handleClick(item.id)}
                          className={classNames(
                            item.current ? 'transform hover:scale-110 duration-500 text-[#F29494]' : 'text-white hover:text-[#F29494] transform hover:scale-105 duration-200',
                            'rounded-md text-[15px] font-bold 2xl:text-base'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                  </div>
                  
                  <div className="inset-y-0 right-0 flex items-center lg:hidden">
                    {/* Mobile menu button*/}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-white focus:outline-none ">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className='block h-10 w-10 text-[#0830A6] py-1 px-2 bg-white rounded-full shadow-xl z-30' aria-hidden="true" />
                      ) : (
                        <Bars3Icon className='block h-10 w-10 text-[#0830A6] py-1 px-2 bg-white rounded-full shadow-xl z-30' aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
            <Disclosure.Panel className="lg:hidden h-screen z-10">
              <div className="space-y-4 px-6 pb-3 pt-2 flex flex-col justify-center items-center">
                {navigation.map((item) => (
                  <Disclosure.Button
                  key={item.id}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'text-[#0830A6]' : 'text-[#0830A6] hover:text-[#242c4296] transform hover:scale-105 duration-500',
                    'block rounded-full text-[#0830A6] font-bold shadow-md px-3 py-2 text-base text-center bg-white w-[10rem]'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                    >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Navbar