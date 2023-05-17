import React from 'react'
import Image from 'next/image'
export default function Social() {
    return (
        <div className='social_buttons'>
            <div className='social_box'>
                <a href='https://www.youtube.com/channel/UCaQUQh7A-fEgAxgG31X-8Ww'>
                    <Image src="img/icons/youtube_icon.svg" alt='youtube' width={20} height={19} />
                </a>
            </div>
            <div className='social_box'>
                <a href='mailto:info@byelorussianmission.org'>
                    <Image src="img/icons/email_icon.svg" alt='email' width={20} height={19} />
                </a>
            </div>
            <div className='social_box'>
                <a href='https://www.facebook.com/people/Byelorussian-Mission-Inc/100081091373877/'>
                    <Image src="img/icons/facebook_icon.svg" alt='facebook' width={12} height={19} />
                </a>
            </div>
            <div className='social_box'>
                <a href='https://www.ecfa.org/MemberProfile.aspx?ID=48735#ScrollTo'>
                    <Image src="img/icons/ecfa_logo.svg" alt='ecfa' width={20} height={19} />
                </a>
            </div>
        </div>
    )
}
