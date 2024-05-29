import React, { useState } from 'react'
import './home.css'
import Header from '../../components/header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownloads/AppDownload'

export default function Home() {

  const [category, setCategory] = useState('All')
  return (
    <div >
        <Header />
        <ExploreMenu category={category} setCategory={setCategory} />
        <FoodDisplay category={category} />
        <AppDownload />
    </div>
  )
}
