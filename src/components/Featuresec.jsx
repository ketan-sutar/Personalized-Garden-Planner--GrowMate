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
      <h1>feature section</h1>

      <section className='flex justify-around'>
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
