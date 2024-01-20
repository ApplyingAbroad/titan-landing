import React from 'react'

const Hero = () => {
    return (
        <div
            className="bg-cover bg-bottom"
            style={{
                backgroundImage:
                    'url("https://cdn.tailkit.com/media/placeholders/photo-Nyvq2juw4_o-1280x400.jpg")',
            }}
        >
            <div className="relative">
                {/* Main Header */}
                <header
                    id="page-header"
                    className="relative flex flex-none items-center py-8"
                >
                    {/* Main Header Content */}
                    <div className="container mx-auto flex flex-col space-y-4 px-4 text-center md:flex-row md:items-center md:justify-between md:space-y-0 lg:px-8 xl:max-w-7xl">
                        <div>
                            <a
                                href="#"
                                className="group inline-flex items-center space-x-2 text-lg font-bold tracking-wide text-gray-900 hover:text-gray-600"
                            >
                                <svg
                                    className="hi-mini hi-cube-transparent inline-block size-5 text-amber-600 transition group-hover:scale-110"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M9.638 1.093a.75.75 0 01.724 0l2 1.104a.75.75 0 11-.724 1.313L10 2.607l-1.638.903a.75.75 0 11-.724-1.313l2-1.104zM5.403 4.287a.75.75 0 01-.295 1.019l-.805.444.805.444a.75.75 0 01-.724 1.314L3.5 7.02v.73a.75.75 0 01-1.5 0v-2a.75.75 0 01.388-.657l1.996-1.1a.75.75 0 011.019.294zm9.194 0a.75.75 0 011.02-.295l1.995 1.101A.75.75 0 0118 5.75v2a.75.75 0 01-1.5 0v-.73l-.884.488a.75.75 0 11-.724-1.314l.806-.444-.806-.444a.75.75 0 01-.295-1.02zM7.343 8.284a.75.75 0 011.02-.294L10 8.893l1.638-.903a.75.75 0 11.724 1.313l-1.612.89v1.557a.75.75 0 01-1.5 0v-1.557l-1.612-.89a.75.75 0 01-.295-1.019zM2.75 11.5a.75.75 0 01.75.75v1.557l1.608.887a.75.75 0 01-.724 1.314l-1.996-1.101A.75.75 0 012 14.25v-2a.75.75 0 01.75-.75zm14.5 0a.75.75 0 01.75.75v2a.75.75 0 01-.388.657l-1.996 1.1a.75.75 0 11-.724-1.313l1.608-.887V12.25a.75.75 0 01.75-.75zm-7.25 4a.75.75 0 01.75.75v.73l.888-.49a.75.75 0 01.724 1.313l-2 1.104a.75.75 0 01-.724 0l-2-1.104a.75.75 0 11.724-1.313l.888.49v-.73a.75.75 0 01.75-.75z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span>Company</span>
                            </a>
                        </div>
                        <div className="flex flex-col space-y-4 text-center md:flex-row md:items-center md:justify-between md:space-x-10 md:space-y-0">
                            <nav className="space-x-3 md:space-x-6">
                                <a
                                    href="#"
                                    className="text-sm font-semibold text-gray-900 hover:text-amber-600"
                                >
                                    <span>Features</span>
                                </a>
                                <a
                                    href="#"
                                    className="text-sm font-semibold text-gray-900 hover:text-amber-600"
                                >
                                    <span>Pricing</span>
                                </a>
                                <a
                                    href="#"
                                    className="text-sm font-semibold text-gray-900 hover:text-amber-600"
                                >
                                    <span>Support</span>
                                </a>
                            </nav>
                            <div className="flex items-center justify-center space-x-2">
                                <a
                                    href="#"
                                    className="inline-flex items-center justify-center space-x-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold leading-5 text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none"
                                >
                                    <span>Sign In</span>
                                    <svg
                                        className="hi-mini hi-arrow-right inline-block size-5 opacity-50"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* END Main Header Content */}
                </header>
                {/* END Main Header */}

                {/* Hero Content */}
                <div className="container relative mx-auto px-4 py-16 text-center lg:px-8 lg:py-32 xl:max-w-7xl">
                    <div className="mb-2 inline-flex rounded border border-gray-200 bg-gray-100 px-2 py-1 text-sm font-medium leading-4 text-gray-800 ">
                        v6.0 is now live!
                    </div>
                    <h1 className="mb-4 text-4xl font-black text-black ">
                        Automate &amp; scale your marketing
                    </h1>
                    <h2 className="mx-auto text-xl font-medium leading-relaxed text-gray-700 lg:w-2/3">
                        Save, schedule and generate social media posts for all the
                        networks you are part of. Inspiring results from first day.
                    </h2>
                    <div className="flex flex-col space-y-2 pb-16 pt-10 sm:flex-row sm:items-center sm:justify-center sm:space-x-2 sm:space-y-0">
                        <a
                            href="#"
                            className="inline-flex items-center justify-center space-x-2 rounded-lg border border-amber-700 bg-amber-700 px-7 py-3.5 font-semibold leading-6 text-white hover:border-amber-600 hover:bg-amber-600 hover:text-white focus:ring focus:ring-amber-400 focus:ring-opacity-50 active:border-amber-700 active:bg-amber-700"
                        >
                            <span>Get Started</span>
                            <svg
                                className="hi-mini hi-arrow-right inline-block size-5 opacity-50"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </a>
                        <a
                            href="#"
                            className="inline-flex items-center justify-center space-x-2 rounded-lg border border-gray-200 bg-white px-7 py-3.5 font-semibold leading-6 text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none"
                        >
                            <span>Learn More</span>
                        </a>
                    </div>
                </div>
                {/* END Hero Content */}
            </div>
        </div>
    )
}

export default Hero