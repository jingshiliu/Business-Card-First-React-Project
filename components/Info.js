import React from 'react'

export default function Info(){
    return (
        <section id='infoSection'>
            <img src='images/myPhoto.jpg' />
            <h1>Jingshi Liu</h1>
            <p>Frontend Developer</p>
            <a href='jingshi-liu.com'>jingshi-liu.com</a>
            
            <div className='contactMethod'>
                <a href=''>Email</a>
                <a href=''>Linkedin</a>
            </div>
        </section>
    )
}