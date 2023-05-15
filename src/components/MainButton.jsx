import React from 'react'
import '../styles/mainButton.css'
import { Link } from 'gatsby'

export default function MainButton(props) {
    return (
        <Link className='main-button' to='/'>
            <i class="bi bi-arrow-right-short"></i>
            <p>{props.buttonText}</p>
        </Link>
    )
}
