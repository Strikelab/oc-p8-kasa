import React, { useState } from 'react'
import SliderBtn from './SliderBtn'

export default function Slider({ pictures }) {
    //---state
    const [slideIndex, setSlideIndex] = useState(1)

    //---comportments
    // do manipulations on a state copy
    let slideIndexCopy = slideIndex
    // slide forward and loop
    const nextSlide = () => {
        if (slideIndexCopy !== pictures.length) {
            slideIndexCopy += 1
            setSlideIndex(slideIndexCopy)
        } else {
            slideIndexCopy = 1
            setSlideIndex(slideIndexCopy)
        }
    }
    // slide backward and loop
    const previousSlide = () => {
        if (slideIndexCopy !== 1) {
            slideIndexCopy -= 1
            setSlideIndex(slideIndexCopy)
        } else {
            slideIndexCopy = pictures.length
            setSlideIndex(slideIndexCopy)
        }
    }

    //---display
    return (
        <div className="container-slider">
            {pictures.map((picture, index) => {
                return (
                    <div
                        className={
                            slideIndex === index + 1
                                ? 'slide active-anim'
                                : 'slide'
                        }
                        key={index}
                    >
                        <img
                            src={picture}
                            key={index}
                            alt="aperçu de l'intérieur du logement"
                        />
                    </div>
                )
            })}
            {/* Do not display buttons if there's only 1 picture */}
            {pictures.length > 1 && (
                <SliderBtn moveSlide={nextSlide} direction={'next'} />
            )}
            {pictures.length > 1 && (
                <SliderBtn moveSlide={previousSlide} direction={'previous'} />
            )}
        </div>
    )
}
