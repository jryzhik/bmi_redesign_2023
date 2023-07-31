import React from 'react'
import ProgressDonate from '../components/donations/progressDonate';
import passedStyle from '../styles/Donate/ColorDonate.module.css';
import theme from '../styles/theme';
export default function care() {
    return (
        <ProgressDonate
            imageUrl="/../public/img/donation/progress/orphan.jpg"
            outlineColor={theme.colors.BLUE}
            percentFilled={88}
            primaryHeaderText="Orphan Adoption Program"
            secondaryText="We need $250,0kwnefnwenfknwkefnkwnekfnwkenfnwfnwkfnkwenfknwkfn wkefnnwefknkwenfknwef wkenfkwnefknewf wenfnwkefn wkenfkwnef 00 to support and maintain a Christian facility for orphans."
            passedStyle={passedStyle.dollarButtonBlue}
        />
    )
}
