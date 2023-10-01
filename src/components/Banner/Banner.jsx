


const Banner = () => {
    return (
        <div className="flex items-center justify-center h-[400px] bg-[#FFFFFFF2]">
            <div className="flex flex-col items-center">
                <h1 className="md:text-4xl font-bold">I Grow By Helping People In Need</h1>
                <div className="flex gap-2 mt-6">
                    <input type="text" className="border-2 p-2" placeholder="Search here.." />
                    <button className="border-2 px-2 bg-[#FF444A] text-white rounded-r-xl">Search</button>
                </div>
            </div>
        </div>

    );
};

export default Banner;