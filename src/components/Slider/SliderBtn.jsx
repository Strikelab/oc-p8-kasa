import React from 'react'
import leftArrow from '../../assets/images/left_arrow.svg'
import rightArrow from '../../assets/images/right_arrow.svg'

export default function SliderBtn({ direction, moveSlide }) {
    return (
        <button
            onClick={moveSlide}
            className={
                direction === 'next' ? 'btn-slide next' : 'btn-slide prev'
            }
            type="submit"
        >
            <img
                src={direction === 'next' ? rightArrow : leftArrow}
                alt="icone flêche"
            />
        </button>
    )
}
