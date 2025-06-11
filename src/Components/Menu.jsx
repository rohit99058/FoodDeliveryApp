import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar'
import SubMenu from './SubMenu'
import Loader from './Loader'

const Menu = () => {
  const [menuData, setMenuData] = useState()
  const{id} = useParams()

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65200&lng=77.16630&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`)
      const data = await res.json()
      setMenuData(data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.slice(2,-2))
      // console.log(data.data.cards[4].groupedCard.cardGroupMap)
      // console.log(data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.slice(2,-2))
    }
    getData()
  }, [])

  return (
    <div>
      <Navbar/>
      {
        menuData ? (<div className='border w-8/12 mx-auto'>
          {menuData && menuData.map((item) => {
            console.log(item)
            return <SubMenu items ={item.card.card} title ={item.card.card.title}/>
          })}
        </div>) : <Loader/>
      }
      
    </div>
  )
}

export default Menu