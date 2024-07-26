/**
 * App.jsx
 * 
 * The entry point of the system, and showing the landing page 
 * 
 */

import { useState } from 'react'


// Remarks
// Page should be generate from Template regarding for Atomic design.
// But landing page is a special page without only 1 page, we directly make the page here.

// Components Imports

import hero from './assets/hero.jpg'


import Hero from './components/Hero/Hero';
import Logo from './components/Logo/Logo';
import NavBurger from './components/NavBurger/NavBurger'
import NextRating from './components/NextRating/NextRating';
import Article from './components/Article/Article';
import InfoGraphs from './components/InfoGraphs/InfoGraphs';
import NextCard from './components/NextCard/NextCard';
import NextModal from './components/NextModal/NextModal';



// CSS - Global
import './css/library.css'

function Library() {
  const stat = [
    {
    data: [
        { id: 0, value: 10, label: 'series A' },
        { id: 1, value: 15, label: 'series B' },
        { id: 2, value: 20, label: 'series C' },
    ],
    },
  ];
  // const [count, setCount] = useState(0)
  return (
    <>
    <div className="library">
      <div className="l-head">Element</div>
      <div className="l-head">Description</div>
      <div  className="l-head">Example</div>

 
      <div>Wrapper</div>
      <div>General Wrapper element control width</div>
      <div> -- Not available --</div>

      <div>Logo</div>
      <div>Atom Element for display Logo and Company Name</div>
      <div><Logo size="40" /></div>

      <div>Hero</div>
      <div>Handle display of Hero banner and its wrapper</div>
      <div><Hero img={hero} /></div>

      <div>NavBurger</div>
      <div>Handle display of mobile or desktop Menu</div>
      <div className="headerBg"><NavBurger /></div>

      <div>NextCard</div>
      <div>Make use of Mui element and some template configuration, make this module for easy reuse Card element</div>
      <div className="">
        <NextCard 
          className="landingFlex" 
          img='/assets/story/maths.jpg' 
          imgtitle="Title"
          cardTitle="Title"
          cardBody="Card body content for describe this card."
          href="#"
        />
      </div>

      <div>Article</div>
      <div>Simple inner content of title and body, wrappered by Wrapper Element</div>
      <div className="">
        <Article
          cls="wrapper-small"
          title="Article title" 
          body="Article body content for describe this card."
        />
      </div>

      <div>NextRating</div>
      <div>Handle rating with title</div>
      <div className="">
        <NextRating title="Rating title"/>
      </div>

      <div>NextModal</div>
      <div>Integrated MUI modal with acceping child content, also allow Parent inject the close control</div>
      <div>
        <NextModal title="Modal title">Inner content of the modal</NextModal>
      </div>
      
      <div>InfoGraphs</div>
      <div>Handle graph display (pie chart) and its title</div>
      <div className="">
        <InfoGraphs title="AI adoption statistic" stat={stat}/>
      </div>
     
      <div>App</div>
      <div>Template element for putting Header and Footer once, and accept different inner Body </div>
      <div>Current Page.</div>


      <div>Navigation</div>
      <div>Navigation of the site with logo and Burger Menu </div>
      <div>Its show at top</div>

      <div>Footer</div>
      <div>Footer of the site </div>
      <div>Its show at bottom.</div>
    </div>
    </>
  )
}

export default Library
