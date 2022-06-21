import React from 'react'
import Container from '../components/Container'
import Layout from '../components/Layout'
import ProductCard from '../components/ProductCard'
import { Carousel } from 'react-responsive-carousel'
import { getProducts } from '../api/products'
import { Product } from '../types'
import {formatToCurrency} from '../utils/utils'


const slider = [
  { product_id: 1, name: "bere", image: "https://storage.googleapis.com/web_don/laraluxury/public/image/slider/Screenshot%202022-03-16%20at%2012.40.51%20PM.png" },
  { product_id: 2, name: "bere", image: "https://storage.googleapis.com/web_don/laraluxury/public/image/slider/Screenshot%202022-03-16%20at%2012.42.27%20PM.png" },
  { product_id: 3, name: "bere", image: "https://storage.googleapis.com/web_don/laraluxury/public/image/slider/Screenshot%202022-03-16%20at%2012.43.01%20PM.png" },
]

type HomeProps = {
  products: Product[]
}

const Home = ({ products }: HomeProps) => {
  
  return (
  <Layout page={false} title={'Home'}>
    <Container
      className="flex flex-col lg:flex-row lg:pt-10 lg:pb-6 "
      as="section"
    >
      <Carousel className='w-full ' showThumbs={false} showArrows={false} showStatus={false} preventMovementUntilSwipeScrollTolerance={false}>
        {slider.map((slid, i) => <a key={slid.product_id} href="/item">  <img className='rounded-lg shadow-lg h-44 lg:h-96 ' src={slid.image} /> </a>)}

      </Carousel>
    </Container>


    <div className="bg-white py-4 lg:py-8">
      <Container >

        <p className=" flex justify-center w-full text-center mt-6">
          <label className=" w-full lg:w-1/2 relative block">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <i className=" h-5 w-5 fas fa-search  fill-slate-300 "></i>
            </span>
            <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search" />
           
          </label>
        </p>
      </Container>
    </div>

    <div className=" pt-4 pb-8 lg:pb-24">
      <Container
        as="ul"
        className="flex flex-wrap justify-center items-start"
      >

        {/* product section  */}
        {products.map(({id, image, name, amount, description, meta}) => <ProductCard key={id} id={id} image={image} name={name}  amount={formatToCurrency(amount)} description={description} type={meta.type}/>)}

      </Container>

    </div>

  </Layout>
)}

Home.getInitialProps = async (): Promise<HomeProps> => {
  let products: Product[]
  try {
    let response = await getProducts()
    products = response.data.products
    
  } catch (e) {
    console.error(e)
    products = []
  }
  return {
    products: products,
  }
}

export default Home
