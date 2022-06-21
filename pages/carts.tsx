import React, { useEffect } from 'react'
import classNames from 'classnames'
import { css } from '@emotion/css'
import Text, { headline1 } from '../components/Text'
import Container from '../components/Container'
import Layout from '../components/Layout'
import { selecteItem, deleteFromCart, getCart } from '../store/reducers/cart'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'

// "text-gray-700 font-bold mb-2 lg:mb-4 text-center lg:text-left"
const product = {
  id: `${Math.random()}`,
  name: "Lara 1",
  image: 'https://storage.googleapis.com/web_don/laraluxury/public/image/products/Screenshot%202022-03-16%20at%201.11.16%20PM.png',
  amount: '₦ 38,200.00',
  description: 'How to get random text from lorem Ipsum in PHP? 475 · How to open Visual Studio Code from the command line on OSX? 1157 · How can I customize  answer Top answer Your concern is valid and luckily theres a solution, that can be found',
  type: 'Urban Wears',
  size: [15, 6, 7, 8, 9],
  color: ['white', 'blue', 'black', 'red']
}

const Carts = () => {

  const carts = useAppSelector(getCart)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(selecteItem({
      id: product.id,
      name: product.name,
      image: product.image,
      amount: product.amount,
      quantity: '0',
      size: null,
      color: null,
    }))
  }, [product])
  return (
    <Layout page={false} title={'Cart'}>

      <div className="lg:mt-2 pt-4 pb-8 lg:pb-24">
        <Container className="flex flex-col">
          <Text as="h2" theme={headline1} className="self-center text-gray-700">
            CHECKOUT
          </Text>
        </Container>

        <Container
          as="ul"
          className=" mt-4 lg:flex lg:flex-wrap justify-center items-start"
        >
          {carts.length === 0 ? <div className='flex justify-center'><Text as="h2" className="self-center text-gray-400">
            you have no items in your cart 😭 🙏
          </Text> </div> : ''}
          {carts.map((item) => <div key={item.id} className='w-full lg:mx-2 my-2 shadow-lg border-solid border-4 border-light-gray-500 rounded-lg'>
            <div className="flex ">

              <img
                src={item.image}
                alt=""
                className={classNames(
                  'w-20 lg:w-60 lg:h-44 rounded-tl-lg rounded-br-lg object-cover',
                  css``,
                )}
              />
              <div className='lg:w-2/3 mt-4 mx-2'>

                <Text
                  as="h3"
                  className="text-xl font-display font-semibold text-gray-800 capitalize"
                >
                  {item.name}
                </Text>
                <Text
                  as="h3"
                  className=" font-display font-semibold text-gray-500 capitalize"
                >
                  {item.amount}
                </Text>

                <div className=' '>
                  <div className='flex my-2'>
                    <Text
                      as="h3"
                      className=" font-display font-semibold text-gray-500 capitalize"
                    >
                      Qty:
                    </Text>
                    <span className='mx-2'>{item.quantity}</span>

                  </div>

                  <div className='flex my-2'>
                    <Text
                      as="h3"
                      className=" font-display font-semibold text-gray-500 capitalize"
                    >
                      Size:
                    </Text>
                    <span className='mx-2'>{item.size}</span>
                  </div>

                  <div className='flex my-2'>
                    <Text
                      as="h3"
                      className=" font-display font-semibold text-gray-500 capitalize"
                    >
                      Color:
                    </Text>
                    <span className='mx-2'>{item.color}</span>
                  </div>

                </div>

              </div>


            </div>

            <div className='w-full flex my-2 px-2 justify-between'>
              <button onClick={() => dispatch(deleteFromCart())} className={classNames(
                'w-1/2 mx-1 py-2 text-white flex lg:ml-6  hover:bg-gray-300 rounded-tl-lg rounded-bl-lg justify-center',
                css` background: #d43232;  `,
              )}>
                Remove
              </button>
              <button className={classNames(
                'w-1/2  mx-1 py-2 text-white flex lg:ml-6 hover:bg-green-100 rounded-tr-lg rounded-br-lg justify-center',
                css` background: #d4d032;  `,
              )}>
                Move to Favourites
              </button>
            </div>

          </div>)}

          <div className='w-full grid justify-items-end my-2 m-3'>
            <div className='flex my-1'>
              <Text
                as="h3"
                className=" font-display font-semibold text-gray-500 capitalize"
              >
                Color:
              </Text>
              <span className='mx-2'>500</span>
            </div>
            <div className='flex my-1'>
              <Text
                as="h3"
                className=" font-display font-semibold text-gray-500 capitalize"
              >
                Color:
              </Text>
              <span className='mx-2'>500</span>
            </div>
            <div className='flex my-1'>
              <Text
                as="h3"
                className=" font-display font-semibold text-gray-500 capitalize"
              >
                Color:
              </Text>
              <span className='mx-2'>500</span>
            </div>
            <Text className={classNames(
              'rounded-lg text-lg shadow-xl  hover:bg-blue-400  bg-blue-500 my-2 px-4 py-1 text-white',
              css``,
            )}> Buy Now </Text>

          </div>

        </Container>

      </div >

    </Layout >
  )
}


export default Carts
