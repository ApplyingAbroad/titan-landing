import Image from 'next/image'


export default function FormHeader() {
    return (
        <>
            <div className="relative">
                <div className="absolute inset-0">
                    <Image
                        height={896}
                        width={1344}
                        className="h-full w-full object-cover"
                        src="/about/about-5.jpg"
                        alt="Two people working on a project"
                    />
                </div>
                <div className="absolute inset-0 bg-stone-900/90 from-stone-950 via-stone-950/75 to-transparent lg:bg-transparent lg:bg-gradient-to-r" />

                <div className="container mx-auto px-4 py-16 lg:px-8 lg:py-32">
                    <div className="relative overflow-hidden rounded-xl px-6 py-8 lg:px-12 lg:py-16">
                        <div className="relative py-5 text-center max-w-4xl lg:text-left">
                            {/* Heading */}
                            <div>
                                <h2 className="mb-2 text-5xl font-titillium font-bold text-white">
                                    Ask for best tool steel, high-speed steel, and carbide scrap pricing
                                </h2>
                                <p className="mt-4 text-lg text-stone-300">
                                    Connect with Titan Alloys Today for Top-Notch Metal Solutions
                                    and Maximize the Value of Your Materials.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
