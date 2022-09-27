import React from 'react'

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Favorites', href: '/favorites' },
  ]

const Header = () => {
  return (
    <div className='header'>
        <ul>
            { navigation.map( (nav) => {
                return (
                    <li><a href={nav.href}>{nav.name}</a></li>
                )
            })}
        </ul>
    </div>
  )
}

export default Header