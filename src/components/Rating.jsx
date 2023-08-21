import React from 'react'
import Star from './Star'

export default function Rating({ rating }) {
    const range = [1, 2, 3, 4, 5]
    return (
        <div className="rating">
            {range.map((index, rangeElem) =>
                rating < rangeElem ? (
                    <Star key={index} color="neutral" />
                ) : (
                    <Star key={index} color="highlight" />
                )
            )}
        </div>
    )
}
