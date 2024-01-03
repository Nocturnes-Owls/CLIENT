import React from 'react'

const About = ({ title, text }) => {
  return (
    <div>
      <section>
        <h1>{title}</h1>
        <p>{text}</p>
      </section>
    </div>
  )
}

export default About