// Packages
import React, { useState } from "react"

import {
    SlideshowContainer,
    Slideshow,
    SlideshowButton,
    SlideshowItem,
    SlideshowPaginationContainer,
    SlideshowPaginationButton,
} from "../Slideshow"

import Image from "../Image"

function DemoSlideshow() {
    const [active, setActive] = useState(1)

    const handleNext = () => setActive(active === 3 ? 1 : active + 1)
    const handlePrev = () =>
        setActive(active !== 1 ? active - 1 : 3)
    
    return (
        <SlideshowContainer>
            <Slideshow>
                <SlideshowButton type="prev" onClick={handlePrev} />

                <SlideshowItem
                    className={
                        active === 1
                            ? "active"
                            : active > 1
                            ? "previous"
                            : "next"
                    }
                >
                    <Image
                        src="https://images.unsplash.com/photo-1643186042811-63a2b94c7f98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8Q0R3dXdYSkFiRXd8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
                        alt="Image 1"
                    />
                </SlideshowItem>

                <SlideshowItem
                    className={
                        active === 2
                            ? "active"
                            : active > 2
                            ? "previous"
                            : "next"
                    }
                >
                    <Image
                        src="https://images.unsplash.com/photo-1643302067557-c88dc1549591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8Q0R3dXdYSkFiRXd8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
                        alt="Image 2"
                    />
                </SlideshowItem>

                <SlideshowItem
                    className={
                        active === 3
                            ? "active"
                            : active > 3
                            ? "previous"
                            : "next"
                    }
                >
                    <Image
                        src="https://images.unsplash.com/photo-1643285191290-23690402b6a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfENEd3V3WEpBYkV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                        alt="Image 3"
                    />
                </SlideshowItem>

                <SlideshowButton type="next" onClick={handleNext} />
            </Slideshow>

            <SlideshowPaginationContainer>
                <SlideshowPaginationButton
                    className={active === 1 && "active"}
                    onClick={() => setActive(1)}
                />

                <SlideshowPaginationButton
                    className={active === 2 && "active"}
                    onClick={() => setActive(2)}
                />

                <SlideshowPaginationButton
                    className={active === 3 && "active"}
                    onClick={() => setActive(3)}
                />
            </SlideshowPaginationContainer>
        </SlideshowContainer>
    )
}

export default DemoSlideshow
