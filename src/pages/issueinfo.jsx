import React from 'react'
import { Button } from '../components/Button'
import { Link } from 'react-router-dom'

export const IssueInfo=()=> {
  return (
    <div className='issue__info'>
        <Link to="/user">
        <Button name="Go Back"/>  
        
        </Link>
        <h1>Issue Description</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus fugiat, ab modi commodi aspernatur in dolorum dolorem cupiditate assumenda illo veniam. Odit aliquam saepe placeat tempore asperiores labore cum? Ut. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque ipsam fuga incidunt cupiditate! Nam cumque inventore alias, voluptatibus quaerat non velit, libero illum at asperiores optio molestiae totam soluta quasi cupiditate sint est et labore odio blanditiis vero. Nihil ad nostrum quaerat quae amet, accusamus temporibus eos molestiae consectetur soluta!</p>
      <h1>Highlights</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur officiis in ut architecto accusantium nulla odit maxime dolore, cum eius recusandae amet nostrum quaerat error doloremque eum et voluptas iure asperiores ab quas animi adipisci? Consequuntur, voluptas veniam nobis nam a facilis enim, non perspiciatis odit eum rerum nihil fugiat.</p>
      <h1>Must Read</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate excepturi nisi debitis officiis, ullam possimus voluptatem, non at alias hic deserunt maxime inventore dignissimos maiores! Ipsam eos, quas recusandae laborum corporis asperiores labore sed magnam minus. Corporis laudantium enim quam est aliquam tempore esse repudiandae vero beatae? Aspernatur vitae, enim tempora vero officiis temporibus consequatur consectetur saepe dolor mollitia, reiciendis maxime consequuntur ex. Culpa ipsum qui cupiditate neque. Eos, debitis?</p>
    </div>
  )
}
