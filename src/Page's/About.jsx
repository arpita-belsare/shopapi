import React from 'react'
import '../CSS/About.css'
import img from '../Image/Fest.avif'
import img2 from '../Image/Primeo.jpg'
import img3 from '../Image/Two.jfif'

const About = () => {
  return (
<>
<div className='div'>    
  <h1>About Our Website </h1>
  <div className='scroll'>
  <img src={img} alt="imge1" className='sale1' />
  <img src={img2} alt="imge1" className='sale1' />
  <img src={img3} alt="imge1" className='sale1' />
  </div>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. At distinctio optio asperiores quae nulla. Possimus quaerat nobis soluta quod harum. Repellendus saepe asperiores, eligendi at, vero eaque voluptate voluptates, nesciunt architecto soluta iste facere molestias deleniti? Mollitia ipsa accusantium fugit molestias illum necessitatibus quis cupiditate itaque laborum repudiandae earum quod odio deleniti exercitationem, eaque laboriosam at et labore tenetur vel? Quidem corporis, dolorem sunt maiores inventore illum earum non molestias veniam! Facere quod repellendus animi inventore earum illum vitae, maxime voluptatem. Itaque velit eum esse obcaecati dolorem delectus corrupti dolorum ab dolor. Tenetur sed aliquid obcaecati facere repudiandae vero fuga.</p>
</div>
</>
  )
}

export default About;