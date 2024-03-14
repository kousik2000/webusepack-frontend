import React,{useState} from 'react'
import { Dialog, DialogActions } from '@material-ui/core';
import { IoIosCloseCircleOutline } from "react-icons/io";
import FeedbackForm from '../FeedbackForm';
import Navbar from '../Navbar'
import './index.css'
import search from '../../assets/search.svg'
import Testimonial from '../Testimonial'

const Home = () => {

  const fullStackLanguages = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Angular",
    "Node.js"
  ];

  // const testimonials = [
  //   {
  //     id:1,
  //     imgUrl:'',
  //     name:'Srujit',
  //     designation:'Web Developer',
  //     description:'WebUsePack has been an invaluable resource in my journey as a full-stack developer. Highly recommended!',
  //     rating:'4.5'
  //   },
  //   {
  //     id:2,
  //     imgUrl:'',
  //     name:'Kousik',
  //     designation:'UIUX Developer',
  //     description:'The code snippets and simplifiers have saved me hours of work. Fantastic platform!',
  //     rating:'5'
  //   },
  //   {
  //     id:3,
  //     imgUrl:'',
  //     name:'Koundinya',
  //     designation:'Web Developers',
  //     description:'WebUsePack has been an invaluable resource in my journey as a full-stack developer.',
  //     rating:'4.5'
  //   },
  // ]

  const insideWebsite = [' Comprehensive Learning Pathways',' Rich Coding Resources','Dynamic Job Portal',' Interactive Community Hub','Personalized Learning Tracks',' Responsive Web Design','UIUX']
  
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <div className='bg-container'>
      <Navbar />

      <section className='section section1' id='section1'>
        <h1 className='heading'>Empowering Full-stack Developers and Learners</h1>
        <p className='quote'>Empowering Developers with Simplified code, Comprehensive Resources, and Lucrative opportunities</p>
        <form className='search-container'>
          <input type='search' className='main-search'placeholder='What can I help with you today ?'/>
          <img src={search} alt='search-icon' class='search-icon' type='button'/>
        </form>

        <div className='tags-container'>
          {fullStackLanguages.map((eachItem)=>(
            <button className='tag'># {eachItem}</button>
          ))}
        </div>

        <div className='explore-button-container'>
          <button className='button'>Explore Now</button>
          <button className='button'>Discover Jobs</button>
        </div>
      </section>
     
      <section className='section section2' id='section2'>
        <h1 className='heading'>What's Inside This Website</h1>
        <div className='web-cards-container'>
          {insideWebsite.map((eachItem)=>(
            <p className='webCard'>{eachItem}</p>
          ))}
        </div>
      </section>

      <section className='section section3' id="section3">
      <h1 className='heading'>Testimonials</h1>
        <div className='testimonial-container'>
          <Testimonial />
        </div>
      </section>

      <section className='section4'>
      <h1 className='heading'>About WebUsePack</h1>
      <p className='paragraph'>WebUsePack is dedicated to providing comprehensive resources support for both seasoned full-stack developers and aspiring learners. 
Our goal is to simplify coding concepts, foster learning, and facilitate 
career growth in the dynamic field of full-stack development.</p>
      </section>

      <section className='section5'>
        <h1 className='heading'>Your Input Matters</h1>
        <p className='paragraph'>Your feedback, suggestions, and questions are invaluable to us. 
            We strive to improve your experience on WebUsePack continually. 
            Please share your thoughts with us using any of the methods below.</p>
        {/* <div >
          <button>Explore Now</button>
        </div> */}
        <div className='explore-button-container'>
          <button className='button' onClick={handleOpen}>Your Feedback</button>
          <Dialog open={open} onClose={handleClose} className='feedback-form'>
            <FeedbackForm/>
            <DialogActions>
              <IoIosCloseCircleOutline className='close-icon' onClick={handleClose} color="primary"/>
            </DialogActions>
          </Dialog>
        </div>
      </section>
    </div>
  )
}

export default Home