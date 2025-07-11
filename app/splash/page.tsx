'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SplashScreen() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const router = useRouter()
  const [played, setPlayed] = useState<boolean>(false)
  useEffect(() => {
    const alreadyPlayed = sessionStorage.getItem('videoPlayed')
    if (alreadyPlayed) {
      router.replace("/home")
    } else {
      const video = videoRef.current
      if (video) {
        video.playbackRate = 2.0
        video.play()
        video.onended = () => {
          sessionStorage.setItem('videoPlayed', 'true')
          setPlayed(true)
          router.replace("/home")
        }
      }
    }
  }, [])


  return (
    <div className="h-screen w-screen bg-black text-white ">
      {played ? <div>Loading</div> : <video
        ref={videoRef}
        className="h-full w-full"
        src="https://res.cloudinary.com/do43v07fz/video/upload/v1751738439/logo_ltg41p.mp4" // Put your video in `public/intro.mp4`
        muted
        autoPlay
      />}
    </div>
  )
}
