import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const WhatsappBecon = () => {
  return (
    <>
      <Link
        href="https://api.whatsapp.com/send?phone=+919872893443&text=Hi%20there!"
        target="_blank"
        className="fixed bottom-0 right-0 group z-50 m-4"
      >
        {/* Make a tooltip here appreas on hover and make it say Say hi 👋 */}
        <div className="opacity-0 w-28 bg-black text-white text-center whitespace-nowrap rounded-lg py-2 absolute z-10 transition-all group-hover:opacity-100 right-full top-1/2 -translate-y-1/2 mr-2 px-3 pointer-events-none">
          Say Hi! 👋
        </div>

        <Image
          height={100}
          width={100}
          src="/icons/whatsapp.svg"
          alt="Whatsapp Icon"
          className="w-16 h-16 group-hover:shadow-2xl rounded-full transition-all shadow-green-500"
        />
      </Link>
    </>
  )
}

export default WhatsappBecon
