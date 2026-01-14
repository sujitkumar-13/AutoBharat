export function Blog() {
    const otherPosts = [
        {
            imageUrl: "https://readdy.ai/api/search-image?query=indian%20automotive%20market%20trends%20luxury%20cars%20in%20india%20showroom%20scene%20with%20premium%20vehicles%20professional%20automotive%20photography&width=400&height=200&seq=blog002&orientation=landscape",
            title: "Indian Luxury Car Market Boom",
            description: "Sales surge 45% as premium brands expand..."
        },
        {
            imageUrl: "https://readdy.ai/api/search-image?query=formula%20one%20racing%20technology%20advanced%20automotive%20engineering%20f1%20car%20technical%20details%20professional%20motorsport%20photography&width=400&height=200&seq=blog003&orientation=landscape",
            title: "F1 Tech in Road Cars",
            description: "How Formula 1 innovations reach your garage...",
            variant: "mt-6"
        },
        {
            imageUrl: "https://readdy.ai/api/search-image?query=automotive%20maintenance%20tips%20car%20service%20garage%20scene%20professional%20mechanic%20working%20on%20luxury%20car%20automotive%20care%20photography&width=400&height=200&seq=blog004&orientation=landscape",
            title: "Supercar Maintenance 101",
            description: "Essential tips for keeping your dream car pristine...",
            variant: "mt-6"
        }
    ];

    return (
        <section className="bg-gray-900 box-border caret-transparent py-20 text-white">
            <div className="box-border caret-transparent max-w-screen-xl mx-auto px-6">
                {/* Inlined SectionHeader */}
                <div className="box-border caret-transparent text-center mb-16">
                    <h2 className="text-5xl font-black box-border caret-transparent leading-[48px] mb-4">
                        Automotive Blog
                    </h2>
                </div>

                <div className="box-border caret-transparent gap-x-8 grid grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-8 md:grid-cols-[repeat(3,minmax(0px,1fr))]">
                    {/* Inlined FeaturedBlogCard */}
                    <div className="bg-black shadow-[rgba(37,99,235,0.3)_0px_0px_20px_0px] box-border caret-transparent col-end-auto col-start-auto border-blue-600 overflow-hidden rounded-2xl border-2 border-solid md:col-end-[span_2] md:col-start-[span_2] text-white">
                        <img
                            src="https://readdy.ai/api/search-image?query=electric%20supercars%20future%20of%20automotive%20industry%20tesla%20roadster%20and%20other%20electric%20hypercars%20futuristic%20automotive%20scene%20professional%20photography&width=600&height=300&seq=blog001&orientation=landscape"
                            alt="Featured Blog"
                            className="box-border caret-transparent h-64 max-w-full object-cover object-[50%,0%] w-full"
                        />
                        <div className="box-border caret-transparent p-8">
                            <span className="text-blue-600 text-sm font-semibold box-border caret-transparent leading-5">
                                FEATURED
                            </span>
                            <h3 className="text-3xl font-bold box-border caret-transparent leading-9 mb-4">
                                The Future of Electric Supercars: What&apos;s Coming in 2025
                            </h3>
                            <p className="text-gray-400 box-border caret-transparent mb-6">
                                From Tesla&apos;s next-gen Roadster to Rimac&apos;s latest hypercar,
                                explore the cutting-edge technology shaping tomorrow&apos;s automotive
                                landscape...
                            </p>
                            <a href="#" className="text-sm font-semibold bg-red-600 box-border caret-transparent inline-block leading-5 text-nowrap px-8 py-3 rounded-lg hover:bg-red-700">
                                Read More
                            </a>
                        </div>
                    </div>

                    <div className="box-border caret-transparent">
                        {otherPosts.map((post, index) => (
                            <div key={index} className={`bg-black box-border caret-transparent overflow-hidden rounded-2xl text-white ${post.variant || ""}`}>
                                <img
                                    src={post.imageUrl}
                                    alt="Blog Post"
                                    className="box-border caret-transparent h-32 max-w-full object-cover object-[50%,0%] w-full"
                                />
                                <div className="box-border caret-transparent p-4">
                                    <h4 className="text-lg font-bold box-border caret-transparent leading-7 mb-2">
                                        {post.title}
                                    </h4>
                                    <p className="text-gray-400 text-sm box-border caret-transparent leading-5 mb-3">
                                        {post.description}
                                    </p>
                                    <button className="text-red-600 font-semibold bg-transparent caret-transparent text-center p-0 hover:underline">
                                        Read More
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
