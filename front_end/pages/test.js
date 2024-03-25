import React from 'react'
import SubscribeHero from '../components/events/subscribeHero'
import theme from '../styles/theme'
function test() {
    return (
        <SubscribeHero
            color={theme.colors.NAVY}
            primaryText='Subscribe to our weekly newsletter'
            secondaryText='Keep up to date with all that we’re doing!'
        />
    )
}

export default test