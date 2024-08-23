/**
 * App.jsx
 * 
 * The entry point of the system, and showing the landing page 
 * 
 */

import { useState, useEffect } from 'react'
import * as React from 'react';

// Remarks
// Page should be generate from Template regarding for Atomic design.
// But landing page is a special page without only 1 page, we directly make the page here.

// Components Imports

// Template Components from Mui
import {Button, TextField} from '@mui/material';


import NextRating from './components/NextRating/NextRating';
import Hero from './components/Hero/Hero';
import Article from './components/Article/Article';
import InfoGraphs from './components/InfoGraphs/InfoGraphs';
import NextCard from './components/NextCard/NextCard';
import NextModal from './components/NextModal/NextModal';
import Wrapper from './components/Wrapper/Wrapper';



import './css/Ladning.css';

// CSS - Global
// import './css/App.css'

function Landing() {

  

  // const [count, setCount] = useState(0)
  const about = 'Next AI is at the forefront of artificial intelligence innovation. We develop advanced AI solutions that enhance efficiency and drive value across industries. Our expertise in machine learning and data analytics empowers businesses to unlock insights and automate processes. Committed to ethical AI, we aim to shape a smarter, more connected future.';

  const story = 'In an era of rapid AI advancement, a startup quickly rose to prominence with its innovative algorithms and customer-focused solutions. This success story highlights how technology transforms industries and paves the way for the future.';
  
  const heros = [
    {
      src:'/assets/hero/hero.jpg',
      title:'Hero'
    },
    {
      src:'/assets/hero/hero1.jpg',
      title:'Hero1'
    },
    {
      src:'/assets/hero/hero2.jpg',
      title:'Hero2'
    }
  ]
  const heroSize = 3;
  const [heroidx, setHero] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setHero((i) => (i + 1) % heroSize);
      // setStep((i) => i + 1);
    }, 7000);
    return () => {
      clearInterval(interval);
    };
  }, [heroSize]);

  const cards = [
    {
      key:0, 
      img:'/assets/story/inspection.jpg',
      imgtitle:'Smart Inspection',
      cardTitle:'Smart Inspection',
      cardBody:'Smart Inspection is an AI-driven quality control project aimed at revolutionizing the manufacturing industry through advanced inspection technologies.',
      href:'#',
      scale: 1.2

    },
    {
      key:1, 
      img:'/assets/story/maths.jpg',
      imgtitle:'Next mathematician',
      cardTitle:'Next mathematician',
      cardBody:'Next mathematician  aims to develop an AI-powered platform that personalizes math training for students, enhancing their learning experience and improving their skills.',
      href:'#',
      scale: 1.3
    },
    {
      key:2, 
      img:'/assets/story/travel.jpg',
      imgtitle:'My Travel planner',
      cardTitle:'My Travel planner',
      cardBody:'My Travel planner is an AI-driven app that creates personalized travel itineraries by analyzing user preferences and real-time data, simplifying travel planning and enhancing the overall experience.',
      href:'#',
      scale: 0.9
    }
  ]

  const modal = React.useRef()
  const stat = [
    {
    data: [
        { id: 0, value: 10, label: 'series A' },
        { id: 1, value: 15, label: 'series B' },
        { id: 2, value: 20, label: 'series C' },
    ],
    },
  ];

  return (
    <>
      <Hero imgs={heros} index={heroidx}/>
      <Article title="About Next AI" body={about} cls=""/>
      <Article title="Our Story" body={story} cls=""/>
      <Wrapper wrapperCls="wrapper-flex wrapper-medium wrapper-center">
      {cards.map((item) => (
        <NextCard key={item.key} className="landingFlex" img={item.img} imgtitle={item.title} cardTitle={item.cardTitle} cardBody={item.cardBody} href={item.href} mScale={item.scale}/>
      ))}
      </Wrapper>
      <Wrapper wrapperCls="wrapper-flex wrapper-medium wrapper-center">
      <Article title="Do you love AI?" body="" cls=""/>
        <NextRating title="How often you use AI"/>
        <NextRating title="Anything in your mind you wish AI to help you?"/>
        <NextRating title="Do you know how to verify AI result"/>
      </Wrapper>

      <Wrapper wrapperCls="wrapper-flex wrapper-medium wrapper-center">
        <InfoGraphs title="AI adoption statistic" stat={stat}/>

      </Wrapper>
      <Wrapper wrapperCls="wrapper-flex wrapper-medium wrapper-center mt-8">
      <NextModal title="Subscribe Us!" ref={modal}>
        <Wrapper wrapperCls="wrapper-flex wrapper-medium wrapper-x-10">
        Hey, subscript for our updates
        </Wrapper>
          <Wrapper wrapperCls="wrapper-flex wrapper-medium wrapper-x-10">
        <TextField variant="outlined"  name="email" placeholder="Email"/>
        </Wrapper>
        <Wrapper wrapperCls="wrapper-flex wrapper-medium wrapper-x-10">
          <Button variant="contained" onClick={()=>{modal.current.handleClose();}} > Subscribe</Button>
          <Button variant="outlined" onClick={()=>{modal.current.handleClose();}} className="ml-4"> Cancel</Button>
        </Wrapper>

      </NextModal>
      </Wrapper>
      </>
  )
}

export default Landing
