import React from 'react'
import classNames from 'classnames'
import { css } from '@emotion/css'
import Text from '../components/Text'
import Container from '../components/Container'
import Layout from '../components/Layout'

// "text-gray-700 font-bold mb-2 lg:mb-4 text-center lg:text-left"


const About = () => (
  <Layout page={false} title={'About'}>

    <div className=" pt-4 pb-8 lg:pb-24">


      <Container
        as="ul"
        className="flex flex-wrap justify-center items-start"
      >
        <div className={classNames(
          'flex justify-between  py-5 pb-2 pt-6 px-6',
          css`

                  background: #166DFC;
                  border-radius: 50px;
                `,
        )}>
          <div className="">
            <Text className={classNames(
              'px-4 mt-4',
              css`

                font-family: Jost;
                font-style: normal;
                font-weight: 600;
                font-size: 40px;
                line-height: 128.9%;
                /* or 64px */

                letter-spacing: -0.06em;

                color: #FFFFFF;
                `,
            )}>

              About
            </Text>
            <p className={classNames(
              ' mb-6 mt-6 pl-6',
              css`

                font-family: Circular Std;
                /* or 37px */

                color: #FFFFFF;
                `,
            )}>
              “ Lara Luxury is a women’s wear and Men’s wear contemporary brand, <br />
              dedicated to producing timeless fashionable and trendy pieces. <br />
              Lara Luxury is known for producing the hottest, <br /> 
              and most current fashion trends at a great value to consumers. <br />
              We take our time to source for beautiful, quality fabrics, <br />
              create exquisite styles with perfect finishing. <br />
              This model operates by keeping the store exciting with new merchandise brought in daily. <br />
               Founded in 2017, Lara luxury operates in Lagos, Nigeria.”
            </p>

          </div>
          <img
            src='https://storage.cloud.google.com/web_don/laraluxury/public/image/products/Screenshot%202022-03-16%20at%201.11.16%20PM.png'
            alt=""
            className={classNames(
              'rounded mx-12 h-60 my-12 hidden lg:block object-cover',
              css`
                   
                  `,
            )}
          />
        </div>
      </Container>

    </div>

  </Layout>
)


export default About
