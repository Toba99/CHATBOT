import classNames from 'classnames'
import NextLink from 'next/link'
import React, { useCallback, useState } from 'react'
import Icon from './Icon'
import { useResponsive } from '../helpers/hooks'
import Button from './Button'
import Container from './Container'
import Link from './Link'

type NavLink = { name: string; href?: string; options?: NavLink[] }

const navLinks: NavLink[] = [
  {
    name: 'Women',
    options: [
      {
        name: 'Dresses',
        href: '/items?search=dresses',
      },
      {
        name: 'Tops & Tees',
        href: '//items?search=tops-tees',
      },
      {
        name: 'Jeans',
        href: '//items?search=jeans',
      },
      {
        name: 'Trousers & Pants',
        href: '//items?search=trousers',
      },
      {
        name: 'Jackets & Coats',
        href: '//items?search=jacket-coats',
      },
      {
        name: 'Leggings',
        href: '//items?search=leggings',
      }
    ],
  },

  {
    name: 'Man',
    options: [
      {
        name: 'Basics',
        href: '//items?search=basics',
      },
      {
        name: 'Pants',
        href: '//items?search=pants',
      },
      {
        name: 'Shirts',
        href: '//items?search=shirts',
      }
    ],
  },
  {
    name: 'accessories',
    options: [
      {
        name: 'Handbags',
        href: '//items?search=handbags',
      },
      {
        name: 'Jewelry',
        href: '//items?search=jewelry',
      },
      {
        name: 'Belts',
        href: '//items?search=belts',
      }
    ],
  },

  {
    name: 'About Us',
    href: `/about`,
  },

]

interface DropdownProps {
  name: string
  options: NavLink[]
}
const Dropdown = ({ name, options }: DropdownProps) => {
  const [showDropdown, setShowDropdown] = useState(false)

  return (
    <>
      <Button
        kind="link"
        className="font-body py-2 lg:my-0 flex hover:text-blue-500 items-center"
        size="sm"
        onClick={() => {
          setShowDropdown((prev) => !prev)
        }}
        onBlur={() => {
          setTimeout(() => {
            setShowDropdown(false)
          }, 250)
        }}
      >
        <span className="text-xs">{name}</span>
        <Icon name={'chevron-down ml-2'} size={12} />
      </Button>
      {showDropdown && (
        <ul
          className={'absolute bg-white shadow-lg z-20'}
          style={{
            top: '3.5rem',
          }}
        >
          {options.map(
            ({ name, href }) =>
              href && (
                <Link
                  key={href}
                  kind="link"
                  href={href}
                  className="font-body my-2 lg:my-0"
                  size="lg"
                >
                  <span className="text-xs">{name}</span>
                </Link>
              ),
          )}
        </ul>
      )}
    </>
  )
}

const Header = ({ page }: { page: boolean }) => {
  const [showNav, setShowNav] = useState(false)
  // const [showFindJob, setshowFindJob] = useState(false)

  // if (page === 'rewritecv' || page === 'jobdetails' || page === 'jobform') {
  //   setshowFindJob(true)
  // }

  const handleNavToggleClick = useCallback(() => {
    setShowNav((prevShowNav) => !prevShowNav)
  }, [])
  const { md } = useResponsive()

  return (
    <div className="py-4">
      <Container
        className="flex flex-col lg:flex-row lg:items-center"
        as="header"
      >
        <div className="flex justify-between w-full">
          <NextLink href={'/'}>
            <a href={'/'}>
            <img
                className="h-16 w-40 md:w-56 object-contain"
                src="https://www.packit.eu/wp-content/uploads/2019/08/julia-logo-pms-5255-c.png"
                alt="Julia"
              />
            </a>
          </NextLink>

          <div className='flex justify-end'>
            <NextLink href={'/register'}>
              <a href={'/register'}>
                <div className="bg-blue-500 text-white my-1 mx-1 px-4 py-1 lg:ml-6 hover:bg-blue-400 h-9 flex rounded-lg justify-center mx-2 text-xl">Register</div>
              </a>
            </NextLink>
          </div>



        </div>

        <div
          className={classNames(
            showNav ? 'flex' : 'hidden',
            'lg:flex flex-col lg:flex-row items-end lg:flex-1',
          )}
        >


        </div>
      </Container>
    </div>
  )
}

export default Header
