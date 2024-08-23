/**
 * App.jsx
 * 
 * The entry point of the system, and showing the landing page 
 * 
 */

import { useState, useEffect } from 'react'

// Remarks
// Page should be generate from Template regarding for Atomic design.
// But landing page is a special page without only 1 page, we directly make the page here.

// Components Imports



import Hero from './components/Hero/Hero';
import Logo from './components/Logo/Logo';
import NavBurger from './components/NavBurger/NavBurger'
import NextRating from './components/NextRating/NextRating';
import Article from './components/Article/Article';
import InfoGraphs from './components/InfoGraphs/InfoGraphs';
import NextCard from './components/NextCard/NextCard';
import NextModal from './components/NextModal/NextModal';
import Loading from './components/Loading/Loading.jsx';


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
  // const [count, setCount] = useState(0)
  const [greyMode, setGreyMode] = useState(0);

  useEffect(() => {
    if (greyMode) {
      document.body.style.filter = "grayscale(1)";
    } else {
      document.body.style.filter = "grayscale(0)";
    }
  }, [greyMode]);

  return (
    <>
    <div className="library">
      <div className="l-head">Element</div>
      <div className="l-head">Description</div>
      <div  className="l-head">Code Example</div>
      <div  className="l-head">Example</div>

      <div> Loading Page</div>
      <div> Show loading with SVG Path animation</div>
      <div> &lt;Loading mDruation=[loadingtime] txt=[Display Text] &gt; </div>
      <div> <Loading className="library" txt="Loading..."/></div>

      <div>Dark Mode</div>
      <div> Toggle between Dark and Bright mode</div>
      <div>  &lt;button onClick=setGreyMode() &gt; </div>
      <div> 
        <button onClick={() => setGreyMode(!greyMode)} type="button">
          <span className="is-block">{greyMode ? "Bright Mode" : "Dark Mode"}</span>
        </button>
      </div>


      <div>Wrapper</div>
      <div>General Wrapper element control width</div>
      <div> &lt;Wrapper children=[Childred Object], wrapperCls=[Wrapper Class name] /&gt;</div>
      <div> -- Not available --</div>

      <div>Logo</div>
      <div>Atom Element for display Logo and Company Name</div>
      <div> &lt;Logo size=[Size of logo] showCropName=[Boolean, indicate to show Company name or not] /&gt;</div>
      <div><Logo size="40" /></div>

      <div>Hero</div>
      <div>Handle display of Hero banner and its wrapper with animation</div>
      <div> &lt; Hero imgs=[ImgObjectArray] index=[ImageObject index to be display] /&gt; </div>
      <div><Hero imgs={heros} index={0} /></div>

      <div>NavBurger</div>
      <div>Handle display of mobile or desktop Menu with drawer toogle</div>
      <div> &lt; NavBurger /&gt;</div>
      <div className="headerBg"><NavBurger /></div>

      <div>NextCard</div>
      <div>Make use of Mui element and some template configuration, make this module for easy reuse Card element. Card image with visual effects</div>
      <div> &lt;NextCard 
          className="Classname" 
          img='Image of the block' 
          imgtitle="Title"
          cardTitle="Title"
          cardBody="Card body content for describe this card."
          href="#" /&gt; </div>
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

      
      <div>NextModal</div>
      <div>Integrated MUI modal with acceping child content, also allow Parent inject the close control for user interaction</div>
      <div> &lt;NextModal title="Modal title"&gt;Inner content of the modal&lt;/NextModal&gt;</div>
      <div>
        <NextModal title="Modal title">Inner content of the modal</NextModal>
      </div>

      <div>Article</div>
      <div>Simple inner content of title and body, wrappered by Wrapper Element</div>
      <div> &lt;Article
          cls="wrapper-small"
          title="Article title" 
          body="Article body content for describe this card."
        /&gt;
      </div>
      <div className="">
        <Article
          cls="wrapper-small"
          title="Article title" 
          body="Article body content for describe this card."
        />
      </div>

      <div>NextRating</div>
      <div>Handle rating with title, and the stars with interaction with client</div>
      <div> &lt;NextRating title="Rating title"/&gt;</div>
      <div className="">
        <NextRating title="Rating title"/>
      </div>

      
      <div>InfoGraphs</div>
      <div>Handle graph display (pie chart) and its title</div>
      <div> &lt;InfoGraphs title="AI adoption statistic" stat=statObject/&gt;</div>
      <div className="">
        <InfoGraphs title="AI adoption statistic" stat={stat}/>
      </div>
     
      <div>App</div>
      <div>Template element for putting Header and Footer once, and accept different inner Body </div>
      <div> &lt;App /&gt;</div>
      <div>Current Page.</div>


      <div>Navigation</div>
      <div>Navigation of the site with logo and Burger Menu </div>
      <div> &lt;Navigation /&gt;</div>
      <div>Its show at top</div>

      <div>Footer</div>
      <div>Footer of the site </div>
      <div> &lt;Footer /&gt;</div>
      <div>Its show at bottom.</div>
    </div>
    </>
  )
}

export default Library
