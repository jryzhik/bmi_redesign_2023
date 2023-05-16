import React from 'react'
import Default_nav_bar from './navigation/default_nav_bar'
import Footer from './footer/footer'
export default function Layout({ children }) {
    return (
        <>
            <Default_nav_bar />
            <main>{children}</main>
            <Footer/>

        </>
    )
}
