import React, { useEffect } from 'react'
import classNames from 'classnames'
import { css } from '@emotion/css'
import Text, { headline4 } from '../components/Text'
import Container from '../components/Container'
import Layout from '../components/Layout'
import ProductSize from '../components/ProductSize'
import ProductColor from '../components/ProductColor'
import { selecteItem, selectQuantity, addTocart, getItem } from '../store/reducers/cart'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { getProductsDetails, getProducts } from '../api/products'
import { ParsedUrlQuery } from 'querystring'
import { formatToCurrency } from '../utils/utils'
import { Product } from '../types'
import ProductCard from '../components/ProductCard'
import NextLink from 'next/link'

type DetailsProps = {
  products: Product
  adsProducts: Product[]
}

const ItemDetails = (props: DetailsProps) => {


  const items = useAppSelector(getItem)

  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(selecteItem({
      id: props.products.id,
      name: props.products.name,
      image: props.products.image,
      amount: `${props.products.amount}`,
      quantity: '0',
      size: '',
      color: '',
    }))
  }, [props.products])

  if (!items) {
    return <></>
  }
  return (
    <Layout page={false} title={'Product-details'}>

      <div className=" pt-4 pb-8 lg:pb-24">


        <Container
          as="ul"
          className="lg:flex lg:flex-wrap justify-center items-start"
        >
          <div className='w-full lg:w-1/2 mx-2'>
            <img
              src={props.products.image}
              alt=""
              className={classNames(
                ' rounded-lg w-full object-cover shadow-lg',
                css`
             
            `,
              )}
            />
          </div>
          <div className='w-full lg:w-1/3 mx-2 my-4'>
            <div>
              <Text
                as="h3"
                className="text-4xl font-display font-semibold text-gray-800 capitalize"
              >
                {props.products.name}
              </Text>
              <Text
                as="h3"
                className="text-3xl font-display font-semibold text-gray-500 capitalize"
              >
                {formatToCurrency(props.products.amount)}
              </Text>
              <p className="mb-3 w-full text-gray-400">
                {props.products.description}
              </p>
              <Text
                as="h3"
                className=" font-display font-semibold text-gray-600 capitalize"
              >
                Type: {props.products.type}
              </Text>
              <div className='flex my-4 '>
                <Text
                  as="h3"
                  className=" font-display font-semibold text-gray-600 capitalize"
                >
                  Size:
                </Text>
                {props.products.meta.size.map((siz, i) => <ProductSize key={i + 'size'} siz={siz} selected={siz === items.size ? '#6dcb1f' : '#aab4c4'} />)}

              </div>

              <div className='flex my-4'>
                <Text
                  as="h3"
                  className=" font-display font-semibold text-gray-600 capitalize"
                >
                  Color:
                </Text>

                {props.products.meta.color.map((col, i) => <ProductColor key={i + 'col'} col={col} selected={col === items.color ? '#6dcb1f' : '#aab4c4'} />)}


              </div>
              <div>
                <label className="block">
                  <span className="block text-sm font-medium text-slate-700">Quuntity</span>
                  <input onChange={(e) => dispatch(selectQuantity(e.target.value))} value={items.quantity} className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Emter the quntity" type="number" name="qty" />
                </label>
              </div>


            </div>

            <div className='flex mt-16 justify-between'>
              <button onClick={() => dispatch(addTocart())} className={classNames(
                'mx-1 py-2 px-4 text-white flex lg:ml-6  hover:bg-gray-300 rounded-tl-lg rounded-bl-lg justify-center',
                css` background: #d4d032;  `,
              )}>
                Add to cart
              </button>
              <NextLink href={'/carts'}>
                <a href={'/carts'}>
                  <button onClick={() => dispatch(addTocart())} className={classNames(
                    'mx-1 py-2 px-4 text-white flex lg:ml-6 hover:bg-green-100 rounded-tr-lg rounded-br-lg justify-center',
                    css` background: #339957;  `,
                  )}>
                    Check Out
                  </button>
                </a>
              </NextLink>
            </div>
          </div>
        </Container>
        <Container className="flex flex-col mt-6">
          <Text
            as="h2"
            theme={headline4}
            className={classNames(
              'self-center',
              css`
                 @media only screen and (max-width: 600px){
                  font-size: 40px;
                  }
                  font-family: Jost;
                  font-style: normal;
                  font-weight: 600;
                  font-size: 35px;
                  line-height: 103.3%;
                  /* or 57px */

                  text-align: center;
                  letter-spacing: -0.025em;

                  color: #80868f;

                `,
            )}
          >
            Similar Products
          </Text>
        </Container>
        <Container
          as="ul"
          className="flex flex-wrap justify-center items-start"
        >

          {/* product section  */}
          {props.adsProducts.map(({ id, image, name, amount, description }) => <ProductCard key={id} id={id} image={image} name={name} amount={formatToCurrency(amount)} description={description} />)}

        </Container>

      </div>

    </Layout>
  )
}

interface productDetailsUrlQuery extends ParsedUrlQuery {
  id: string
}

ItemDetails.getInitialProps = async (ctx): Promise<DetailsProps> => {
  let products
  let adsProducts
  try {
    const query = ctx.query as productDetailsUrlQuery

    let response = await getProductsDetails(query.id)
    const { data } = response
    products = data.products;

    let adsResponse = await getProducts()
    adsProducts = adsResponse.data.products

  } catch (e) {
    console.error(e)
  }
  return { products, adsProducts }
}
export default ItemDetails


