import React from 'react'
import Container from '../components/Container'
import Layout from '../components/Layout'
import ProductCard from '../components/ProductCard'
import { Carousel } from 'react-responsive-carousel';

// "text-gray-700 font-bold mb-2 lg:mb-4 text-center lg:text-left"
let product = Array.from({ length: 12 })

const Home = () => (
  <Layout page={false} title={'Items'}>
  


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
        {product.map((produ, id) => <ProductCard key={id} />)}




      </Container>

    </div>

  </Layout>
)


export default Home
