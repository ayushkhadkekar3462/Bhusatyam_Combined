import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../index.css';
import "../../styles/Landsearchstyles/CardSlider2.css"; // Optional: Add your custom styles

const CardSlider2 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1253,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const cards = [
    { id: 1, title: "Card 1", content: "Cabins for sale",img:"https://cdn.pixabay.com/photo/2018/11/06/22/29/land-3799279_1280.jpg",price:"Rs100K", area:"1 acre", location:"Banglore" },
    { id: 2, title: "Card 2", content: "Farm Land for Sale",img:"https://cdn.pixabay.com/photo/2018/11/06/22/29/land-3799279_1280.jpg",price:"Rs100K", area:"1 acre", location:"Banglore" },
    { id: 3, title: "Card 3", content: "Ranches for Sale",img:"https://cdn.pixabay.com/photo/2018/11/06/22/29/land-3799279_1280.jpg",price:"Rs100K", area:"1 acre", location:"Banglore" },
    { id: 4, title: "Card 4", content: "Waterfront land for Sale",img:"https://cdn.pixabay.com/photo/2018/11/06/22/29/land-3799279_1280.jpg",price:"Rs100K", area:"1 acre", location:"Banglore" },
    { id: 5, title: "Card 5", content: "Tiny Homes for Sale",img:"https://cdn.pixabay.com/photo/2018/11/06/22/29/land-3799279_1280.jpg",price:"Rs100K", area:"1 acre", location:"Banglore" },
    { id: 6, title: "Card 6", content: "Hunting Lands for Sale",img:"https://cdn.pixabay.com/photo/2018/11/06/22/29/land-3799279_1280.jpg",price:"Rs100K", area:"1 acre", location:"Banglore"},
  ];

  return (
    <div className="card-slider py-4" style={{width:"70%"}}>
      <Slider {...settings}>
        {cards.map((card) => (
            <><div className="card" style={{ backgroundImage: `url(${card.img})`,display:"flex",justifyConten:"center" }}>
                <div className="cardbottom" style={{position:"absolute",bottom:"0px",left:"0px",right:"0px"}}><div className='text'>Price: {card.price}</div>
                <div className='text'>Area: {card.area}</div>
                <div className='text'>Location: {card.location}</div></div>
                </div>
          </>
          
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider2;
