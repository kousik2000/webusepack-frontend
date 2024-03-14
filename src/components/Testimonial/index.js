import React, { Component } from "react";
import Slider from "react-slick";
import './index.css'
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
    {
      id:1,
      imgUrl:'',
      name:'Srujit',
      designation:'Web Developer',
      description:'WebUsePack has been an invaluable resource in my journey as a full-stack developer. Highly recommended!',
      rating:'4.5'
    },
    {
      id:2,
      imgUrl:'',
      name:'Kousik',
      designation:'UIUX Developer',
      description:'The code snippets and simplifiers have saved me hours of work. Fantastic platform!',
      rating:'5'
    },
    {
      id:3,
      imgUrl:'',
      name:'Koundinya',
      designation:'Web Developers',
      description:'WebUsePack has been an invaluable resource in my journey as a full-stack developer.',
      rating:'4.5'
    },
]

export default class Testimonial extends Component {
  render() {
    var settings = {
        infinite: true,
        slidesToShow: 2.5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 5000,
        cssEase: "linear",
        arrows:false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
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
        <Slider {...settings}> 
        {testimonials.map((eachItem)=>(
          <div className='testimonial-card'>
            <div className='piece-1'></div>
            <div className='testimonail-head-container'>
              <div className='piece-2'></div>
              <div className='piece-3'></div>
            </div>
          </div>
        ))}
      </Slider> 
    );
  }
}