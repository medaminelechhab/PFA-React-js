import React from 'react';
import HomePhoto from '../icons/artisantest.jpg';

const HomePage = () => {
    return (
        <div className="  relative h-screen">
            <img src={HomePhoto} alt="Illustration" className="absolute inset-0 object-cover rounded-3xl"
                 style={{width: "1000px", left: "450px", top: "150px", height: "400px", objectFit: "cover"}}/>
            <div className="w-1/2  absolute inset-0 flex justify-center items-center" style={{top: "-170px"}}>
                <div className="max-w-xl w-full z-15 text-black bg-white p-4 rounded-3xl">
                    <h1 className="text-5xl lg:text-7xl font-bold mb-6 font-serif">How work should work</h1>
                    <br/>
                    <p className="text-lg lg:text-2xl mb-8 font-serif">Forget the old rules. You can have the best
                        people. Right now. Right here.</p>
                </div>
            </div>
            <button className="relative top-96  left-60"  >Get Started</button>

        </div>


    )
        ;
};

export default HomePage;
