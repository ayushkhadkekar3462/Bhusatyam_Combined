import React from 'react'
import Header from '../../components/Landcomp/header'
import Searchbar from '../../components/Landcomp/Searchbar'
import CardSlider from '../../components/Landcomp/CardSlider'
import BesideSlider from '../../components/Landcomp/BesideSlider'
import "../../styles/Landsearchstyles/Home.css"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Textslider from '../../components/Landcomp/textsilder'
import CategoryList from '../../components/Landcomp/categorylist'
import MarketplaceInfo from '../../components/Landcomp/info'
import Footer from '../../components/Landcomp/footer'
import CardSlider2 from '../../components/Landcomp/CardSlider2'
import '../../index.css';
import ResponsiveComponent from '../../components/Landcomp/ResponsiveComponent'

function Home() {
  return (
    <>
    <Header />
    <Searchbar/>
    <div className="h-[20vh] flex justify-center ">
      <div className='w-[70%] pt-16'>
         <Textslider />
         </div>
       
    </div>
    <center><div className='sliderencloser w-[90vw] '><div className='wholeslider '>
      <BesideSlider/>
    <CardSlider/></div></div></center>
    
    
    <div className="h-auto flex justify-center">
      <div className="w-[75%] p-2">
        <CategoryList />
      </div>
    </div>
    <div className='slider2headingencloser'><div className="slider2heading">Nearby land for sale</div>
    <CardSlider2/></div>
    
    <div className="App">
      <header className="App-header">
        <MarketplaceInfo />
      </header>
    </div>
    <Footer />
    {/* <ResponsiveComponent/> */}
    </>

  )
}

export default Home
