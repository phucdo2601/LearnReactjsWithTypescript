import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Header from '../components/Header';

const About = () => {

  const [message, setMessage] = useState<string>("");

  const { number } = useParams();

  useEffect(() => {
    if (number) {
      setMessage(`The number is `+number);
    } else {
      setMessage(`No number was provided`);
    }
  }, [])

  return (
    <>
    <Header /> 
      <div>
        <p>This is the about page</p>
        <p>
          {message}
        </p>

      </div>
    </>
  )
}

export default About