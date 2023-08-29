import React, { useState } from 'react'
import leftArrow from '../../assets/images/left_arrow.svg'
import rightArrow from '../../assets/images/right_arrow.svg'

export default function SliderBtn({ direction, showSlide }) {
    //---state
    const [isDisabled, setIsDisabled] = useState(false)

    //--- comportments
    //handleShowSlide prevent spam click on button by adding 400ms delay
    const handleShowSlide = () => {
        showSlide()
        setIsDisabled(true)
        setTimeout(() => setIsDisabled(false), 400)
    }
    //---Display
    return (
        <button
            disabled={isDisabled}
            onClick={handleShowSlide}
            className={
                direction === 'next'
                    ? 'btn-slide btn-slide__next'
                    : 'btn-slide btn-slide__prev'
            }
        >
            <img
                src={direction === 'next' ? rightArrow : leftArrow}
                alt="icone flêche"
            />
        </button>
    )
}
