import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'

//dummy data
const Home = () => {


  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }

  return (
    <div className='about'>
        <body className='about__who'>
          <h1 className='about__who--title title'>Who Is The Creator of This Blog?</h1>
          <h2 className='about__who--subtitle title'>Hi! I'm <strong>Nate</strong>!!!</h2>
          <p> 
              I'm a 2nd year student at the University of Virginia. I am studying to double major
              in <strong>Classics</strong> and <strong>Computer Science</strong>, hence the creation
              of my very own website.
              I Love ALL things ancient history and latin related. I have had an obsession with
              the classical period since I was that one kid who would read all the mythology books in the 
              back of the library in elementary school. However, I love many other things as well
              such as: Video Games, Hiking, Fencing, and Computers!!!
              I will talk about all of these periodically on this blog site, so I hope you enjoy!
          </p>
      </body>
      <body className='about__why'>
        <h1 className='about__why--title title'>Why Create This Website?</h1>
        <p>
            This website was first and foremost created with passion! Passion for two things: Classics and Software Development.
            I wanted a place to share all of the random tid-bits filling up my head. But, I also wanted to push the limits
            of my education and start my own journey into Web Development, something that as a 2nd year in college I have yet to do.
            Most of my education up til now has been primarily focused on the fundamentals of programming and how to actually utilize
            programming languages such as the implementation of various Data Structures (e.g. HashMaps, Arrays, Stacks, etc.) and 
            Algorithms (e.g. Breadth-First, Depth-First, Divide-and-Conquer, etc.). Studying these topics has been a lot of fun
            and immensley satisfying in it's own right, however I felt a desire to broaden my knowledge. So, I decided to dive into 
            the deep end and create my very own full-stack website in order to absorb as much knowledge as possible. A real trial by fire.
            You can find my portfolio here: </p>
            <div className='button_about'>
            <button>PORTFOLIO SITE</button>
            </div>
        <p>
            This website was created primarily in Java Script using the React Library with html and scss to help flesh it out. The back end
            was created in mySQL in order to keep track of posts, user authentification, and comments. This allows for easy post creation 
            in a custom built page for writing new posts, as well as easy user tracking and the ability to send update emails to users that register. 
        </p>
        <div className='button_about'>
        <a href='https://github.com/BuzJr/classics_blog' target="_blank">
        <button>SOURCE CODE</button>
        </a>
        </div>
      </body>
    </div>
  )
}

export default Home