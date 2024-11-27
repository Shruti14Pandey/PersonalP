import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                About
            </p>
        </div>

        <p className="text-xl mt-20">
        I am a passionate and results-driven Information Technology undergraduate with hands-on experience in Java, JavaScript, and modern web technologies like React.js, Node.js, TailwindCss, MongoDb and Express.js, I have a proven ability to create dynamic and scalable web applications.
        </p>

        <br />

        <p className="text-xl">
        My strong foundation in both frontend and backend development, paired with my problem-solving skills and leadership experience, drives me to continually enhance my abilities. I am eager to contribute my expertise and drive innovation in a challenging software engineering role.
        </p>
     </div>


    </div>
  )
}

export default About
