import React, { useState } from 'react'
import SliderBtn from './SliderBtn'

export default function Slider({ pictures }) {
    //---state
    const [slideAnim, setSlideAnim] = useState({
        index: 1,
    })

    //---comportments
    // slide forward and loop
    const nextSlide = () => {
        if (slideAnim.index !== pictures.length) {
            setSlideAnim({ index: slideAnim.index + 1 })
        } else {
            setSlideAnim({ index: 1 })
        }
    }
    // slide backward and loop
    const previousSlide = () => {
        if (slideAnim.index !== 1) {
            setSlideAnim({ index: slideAnim.index - 1 })
        } else {
            setSlideAnim({ index: pictures.length })
        }
    }

    //---display
    return (
        <div className="slider">
            {pictures.map((picture, index) => {
                return (
                    <div
                        className={
                            slideAnim.index === index + 1
                                ? 'slider__slide slider__slide-active'
                                : 'slider__slide'
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
            {/* Do not display if there's only 1 picture */}
            {pictures.length > 1 && (
                <div className="slider__counter">
                    {`${slideAnim.index}\\${pictures.length}`}
                </div>
            )}

            {pictures.length > 1 && (
                <SliderBtn showSlide={nextSlide} direction={'next'} />
            )}
            {pictures.length > 1 && (
                <SliderBtn showSlide={previousSlide} direction={'previous'} />
            )}
        </div>
    )
}
