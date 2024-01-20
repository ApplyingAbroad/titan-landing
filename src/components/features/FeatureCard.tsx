import React from 'react'

const FeatureCard = () => {
  return (
    <a
      href="#"
      className="group relative bg-white p-4 transition duration-150 lg:p-6 dark:bg-gray-900"
    >
      <div className="absolute inset-0 scale-100 bg-white opacity-0 transition duration-100 group-hover:scale-105 group-hover:opacity-100 group-active:scale-100 group-active:opacity-0 dark:bg-gray-900" />
      <div className="relative text-center">
        <div className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
          3 Available
        </div>
        <div className="relative mx-auto mb-8 w-12 text-accent">
          <svg
            className="hi-outline hi-rectangle-stack relative inline-block size-12"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
            />
          </svg>
        </div>
        <h4 className="mb-1 text-xl font-bold lg:text-2xl dark:text-white">
          Templates
        </h4>
        <h5 className="text-sm font-medium leading-relaxed text-gray-600 dark:text-gray-400">
          Added on June 18
        </h5>
        <div className="mt-4 flex items-center justify-center space-x-1.5 border-t border-gray-100 pt-4 text-sm font-medium text-gray-500 group-hover:text-accent">
          <span>More Details</span>
          <svg
            className="hi-mini hi-arrow-right-circle inline-block size-5 text-accent transition group-hover:translate-x-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM6.75 9.25a.75.75 0 000 1.5h4.59l-2.1 1.95a.75.75 0 001.02 1.1l3.5-3.25a.75.75 0 000-1.1l-3.5-3.25a.75.75 0 10-1.02 1.1l2.1 1.95H6.75z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </a>
  )
}

export default FeatureCard
