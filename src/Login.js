import React from "react";

function Login(){
    return(
        <div className="grid justify-center">

        <div className="grid justify-center w-100 items-center">

            <span className="font-bold text-2xl">Login To platform</span>
            <span className="text-md mt-6">Email Address *</span>

            
            <input type="text" placeholder="name@domain.com" className="main__email h-12 rounded-md border-2 " />

            <span className="text-md mt-6">Password *</span>
            <input type="password" placeholder="Strong Password" className="main__pass h-12 rounded-md border-2 " />

            <a href="#" className="text-center py-4 text-slate-400">
                <span className="italic">Forgot Password ?</span>
            </a>
            
            <div className="h-12 w-96 rounded-2xl flex justify-center items-center main__button text-white">
                <a href="#">Login</a>
            </div>

            <span className="text-center py-4 text-slate-400">Or connect With social Account</span>

                <div className="flex space-x-2 text-center">

                    <div className="rounded-2xl h-12 border-2 cursor-pointer w-1/2 flex justify-center items-center bg-white">
                        <img src={require('./images/Union.png')} className="px-2"/>Google
                    </div>

                    <div className="rounded-2xl h-12 border-2 cursor-pointer w-1/2 flex justify-center items-center bg-white">
                        <img src={require('./images/Union2.png')} className="px-2"/>Facebook
                    </div>

                </div>

        </div>

    </div>
    );
}
export default Login;