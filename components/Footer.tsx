import React, { useMemo } from 'react'
import classNames from 'classnames'
import Container from './Container'
import { css } from '@emotion/css'
import Icon from './Icon'
import Text from './Text'

const Footer = () => {
  const currentYear = useMemo(() => new Date().getFullYear(), [])
  return (
    <footer>
      <div className="bg-white">
        <Container className="flex flex-col lg:flex-row py-4 lg:py-8 text-center">
          <div className='flex-1'>
            <div className='lg:flex-col w-full text-left mb-6 lg:mb-0'>
              <div className="mb-8">
                <Text className="text-sm md:text-base lg:text-lg text-gray-500 font-semibold font-display mb-1">
                  Products
                </Text>
              </div>
              <Text className="flex text-sm md:text-base lg:text-sm text-gray-500 whitespace-no-wrap font-semibold font-display">
                <a href="/recruitment">Bla Bla Bla</a>
              </Text>
              <Text className="flex text-sm md:text-base lg:text-sm text-gray-500 whitespace-no-wrap font-semibold font-display">
                <a href="/rewrite-cv">Bla Bla Bla</a>
              </Text>
              <Text className="flex text-sm md:text-base lg:text-sm text-gray-500 whitespace-no-wrap font-semibold font-display">
                <a href="/find-jobs">Bla Bla Bla</a>
              </Text>
            </div>
          </div>
          <div className='flex-1'>
            <div className='lg:flex-col w-full text-left mb-6 lg:mb-0'>
              <div className="mb-8">
                <Text className="text-sm md:text-base lg:text-lg text-gray-500 font-semibold font-display mb-1">
                  Company
                </Text>
              </div>
              <Text className="flex text-sm md:text-base lg:text-sm text-gray-500 whitespace-no-wrap font-semibold font-display">
                <a href="/about">About Us</a>
              </Text>
              <Text className="flex text-sm md:text-base lg:text-sm text-gray-500 whitespace-no-wrap font-semibold font-display">
                <a href="/rewrite-cv">FAQ</a>
              </Text>
              <Text className="flex text-sm md:text-base lg:text-sm text-gray-500 whitespace-no-wrap font-semibold font-display">
                <a href="/find-jobs">Blog</a>
              </Text>
            </div>
          </div>
          <div className='flex-1'>
            <div className='lg:flex-col w-full text-left lg:mb-0'>
              <div className="mb-8">
                <Text className="text-sm md:text-base lg:text-lg text-gray-500 font-semibold font-display">
                  Legal
                </Text>
              </div>
              <Text className="flex text-sm md:text-base lg:text-sm text-gray-500 whitespace-no-wrap font-semibold font-display">
                <a href="/recruitment">Terms </a>
              </Text>
              <Text className="flex text-sm md:text-base lg:text-sm text-gray-500 whitespace-no-wrap font-semibold font-display">
                <a href="/rewrite-cv">Privacy</a>
              </Text>

            </div>
          </div>
          <div className={'lg:flex-col mb-6 text-right'}>
            <a href={'/'} className="flex justify-end mb-1">
              <img
                className="w-40 md:w-56 object-contain"
                src="https://storage.googleapis.com/web_don/laraluxury/public/image/lara_logo.jpeg"
                alt="Lara Luxury Logo"
              />
            </a>

            <Text className="flex text-sm md:text-base  text-gray-500 font-semibold font-display">
              26, B I Street, Shagari Estate, Ipaja road, Ipaja, Lagos, Nigeria
              <Icon name="map-marker" className="mr-2 my-2" size={12} />
            </Text>
            <Text className="flex justify-end text-sm md:text-base text-gray-500 font-semibold font-display">
              +2348141116173
              <Icon name="phone" className="mr-2 my-1" size={12} />
            </Text>
            <Text className="flex justify-end text-sm md:text-base text-gray-500 font-semibold font-display">
              contact@thelaraluxury.com
              <Icon name="envelope" className="mr-2 my-1" size={12} />
            </Text>
            <Text className="flex justify-end text-sm md:text-base text-gray-500 font-semibold font-display">
              Mon-Fri: 9:00AM - 4:00PM
              <Icon name="clock" className="mr-2 my-1" size={12} />
            </Text>

          </div>

        </Container>
      </div>
      <div className={classNames(
        ``,
        css`
                  background: rgba(164, 179, 203, 0.08);
                `,
      )}>
        <Container className="flex justify-center py-4">
          <Text className="text-sm md:text-base text-gray-500">
            © Copyright {currentYear} LARA LUXURY LTD.
          </Text>
          <Text className="text-sm md:text-base text-gray-500">
            All Rights Reserved.
          </Text>
        </Container>
      </div>
    </footer>
  )
}

export default Footer
