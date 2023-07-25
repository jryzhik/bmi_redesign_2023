import React from 'react'
import ImageNSearch from '../components/hero/imageNSearch'
import theme from '../styles/theme'

export default function Search() {
    return (
        <ImageNSearch
            color1="#8A9BAF"
            color2="#899BB1"
            imageUrl="/../public/img/hero_images/search.jpg"
            textParent='Search'
            headerText='Find what you’re looking for through search'
            subText='Type in or pre-select keywords to narrow down your search.'
            imageFocus={'center 45%'}
            textColor = {theme.colors.WHITE}
        />
    )
}
