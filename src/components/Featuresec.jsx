import React from 'react'
import Featurecard from './Featurecard'
import vegimg from '../assets/vegeimg.jpg'
import fruitimg from '../assets/fruitimg.jpg'
import berriesimg from '../assets/berriesimg.jpg'
import herbimg from '../assets/herbimg.jpg'

const Featuresec = () => {

  const cardData = [
    {
      title: "Vegetables",
      image: vegimg, // Replace with your image
      paragraph: "Explore a wide range of vegetables ideal for your garden.",
    },
    {
      title: "Fruits",
      image: fruitimg, // Replace with your image
      paragraph: "Discover fruit varieties perfect for growing at home.",
    },
    {
      title: "Berries",
      image: berriesimg, // Replace with your image
      paragraph: "Learn about diverse berry plants suitable for your garden.",
    },
    {
      title: "Herbs",
      image: herbimg, // Replace with your image
      paragraph: "Find out which herbs can enhance your culinary delights.",
    },
  ];
  return (
    <div id='feature-sec'>
      <div id="title" className='flex justify-center p-5 m-4'>
      <h1 className='text-[2vw] font-semibold '>Feature Plants</h1>

      </div>
      

      <section className='flex gap-12 justify-center'>
      {cardData.map((data,index)=>(
        <Featurecard
        key={index}
        title={data.title}
        image={data.image}
        paragraph={data.paragraph}
        />
      ))}

      </section>
      
    </div>
  )
}

export default Featuresec
