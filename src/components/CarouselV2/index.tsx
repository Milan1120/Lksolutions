"use client"

import React, { useState, useEffect } from "react"
import styles from "./CustomHeroCarousel.module.css"

const slides = [
  { id: 1, title: "Welcome", content: "Discover our amazing products", color: "bg-red-500", imageUrl:"@/images/carousel/1.jpg" },
  { id: 2, title: "Features", content: "Explore our unique features", color: "bg-blue-500", imageUrl:"@/images/carousel/2.jpg" },
  { id: 3, title: "Testimonials", content: "See what our customers say", color: "bg-green-500", imageUrl:"@/images/carousel/3.jpg" },
  { id: 4, title: "Contact", content: "Get in touch with us", color: "bg-purple-500", imageUrl:"@/images/carousel/4.jpg" },
]

export default function CustomHeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    console.log("Initial Active Slide:", {
      index: currentSlide,
      id: slides[currentSlide].id,
      title: slides[currentSlide].title,
    })
  }, [])

  const nextSlide = () => {
    const next = (currentSlide + 1) % slides.length
    setCurrentSlide(next)
    logActiveSlide(next)
  }

  const prevSlide = () => {
    const prev = (currentSlide - 1 + slides.length) % slides.length
    setCurrentSlide(prev)
    logActiveSlide(prev)
  }

  const logActiveSlide = (index: number) => {
    console.log("Active Slide:", {
      index: index,
      id: slides[index].id,
      title: slides[index].title,
    })
  }

  return (
    <div className={`${styles.carouselContainer} ${slides[currentSlide].color}`}>
      <div className={styles.carousel}>
        {slides.map((slide, index) => (
          <div key={slide.id} className={`${styles.slide} ${index === currentSlide ? styles.active : ""} bg-[url(/images/carousel/1.jpg)]` }>
            <h2 className={styles.title}>{slide.title}</h2>
            <p className={styles.content}>{slide.content}</p>
          </div>
        ))}
      </div>
      <button className={`${styles.navButton} ${styles.prevButton}`} onClick={prevSlide}>
        &lt;
      </button>
      <button className={`${styles.navButton} ${styles.nextButton}`} onClick={nextSlide}>
        &gt;
      </button>
    </div>
  )
}

