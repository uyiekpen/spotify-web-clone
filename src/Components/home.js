import React from 'react'
import AnotherBody from './AnotherBody/AnotherBody'
import BodyComp from './Body/BodyComp'
import Footer from './Footer/Footer'
import HeaderComp from './Header/HeaderComp'

const home = () => {
    return (
        <div>
            <HeaderComp/>
            <BodyComp/>
            <AnotherBody/>
            <Footer/> 
        </div>
    )
}

export default home
