// 'use client'

// import React, { useState, useEffect } from 'react'
// import { useRouter } from 'next/navigation'

// countdown timer

// const Countdown: React.FC = () => {
//   const [count, setCount] = useState(5)
//   const router = useRouter()

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCount((prevCount) => {
//         if (prevCount === 1) {
//           clearInterval(timer)
//           router.push('/')
//         }
//         return prevCount - 1
//       })
//     }, 1000)

//     return () => clearInterval(timer)
//   }, [router])

//   return (
//     <p className="mt-4 text-[12px] text-gray-400">
//       Redirecting to home page in {count} second{count !== 1 ? 's' : ''}...
//     </p>
//   )
// }

export default function NotFound() {
  return (
    <html>
      <head>
        <title>404 - Not found</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
          <h1 className="mb-10 text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Page Not Found</h1>

          <div className="flex items-center">
            <span className="text-[22px] mr-5">404</span>
            <span className="w-[1px] h-7 bg-white mr-5"></span>
            <span className="text-[14px]">This page could not be found.</span>
          </div>
          {/* <Countdown /> */}
        </div>
      </body>
    </html>
  )
}

// uncomment the above code to see the countdown timer