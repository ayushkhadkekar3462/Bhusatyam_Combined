import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

const categories = [
  'Campsites',
  'Barndominiums',
  'Unrestricted land',
  'Mobile homes',
  'Off-grid land',
  'Cheap land',
  'Homesteads',
  'Owner financed land',
  'RV lots',
  'Mountain land',
  'Chicken farms',
  'Islands',
  'Wooded land',
  'River property',
  'Industrial land',
  'Vineyards',
  'Undeveloped land',
];

const Textslider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="container mx-auto my-4">
      <Slider {...settings}>
        {categories.map((category, index) => (
          <Link to="/Component"><div key={index} className="p-2">
          <div className="border border-black rounded-lg p-2 text-center bg-transparent font-bold hover:cursor-pointer ">
            {category}
          </div>
        </div></Link>
          
        ))}
      </Slider>
    </div>
  );
};

export default Textslider;
