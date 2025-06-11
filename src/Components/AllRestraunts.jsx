import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import ImageCarousel from './Carousel'
import { API } from '../Utils/Constants'
import TopRestraunts from './TopRestraunts'
import Footer from './Footer'
import ResinCity from './ResinCity'
import ShimmerUI from './ShimmerUI'
import CorsError from './CorsError'

const AllRestraunts = () => {
  const [apiData, setApiData] = useState(null)
  const [corsError, setCorsError] = useState(false)

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(API)
        if (!res.ok) {
          throw new Error('CORS error or failed request')
        }
        const data = await res.json()
        setApiData(data)
      } catch (error) {
        console.error('CORS error detected:', error)
        setCorsError(true)
      }
    }

    getData()
  }, [])

  if (corsError) return <CorsError />

  return (
    <div>
      {apiData ? (
        <>
          <Navbar />
          <ImageCarousel data={apiData.data.cards[0].card.card.imageGridCards.info || []} />
          <hr className="w-[80vw] mx-auto mt-5 mb-10" />
          <TopRestraunts data={apiData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants || []} />
          <hr className="w-[80vw] mx-auto mt-5 mb-10" />
          <ResinCity data={apiData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants || []} />
          <hr className="w-[80vw] mx-auto mt-5 mb-10" />
          <Footer />
        </>
      ) : (
        <ShimmerUI />
      )}
    </div>
  )
}

export default AllRestraunts
