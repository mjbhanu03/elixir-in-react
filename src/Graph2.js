import React, { useImperativeHandle } from "react";

function Graph2(){
    return(
        <>
        <div class="p-2 border-2 h-32 rounded-2xl bg-white m-5">

        <div class=" justify-around flex space-x-12">

            <span class="text-slate-500">Total Revenue</span>

            <div class="bg-green-100 flex space-x-2 text-green-600">
                <img src={require('./images/trending-up.png')} alt="" />
                <span>12.6%</span>
            </div>
            
        </div>

        <div class="grid pt-3">
            <span class="text-2xl font-bold">$2313</span>
            <span class="pt-2">23 orders</span>
        </div>
        
    </div>
        </>
    );
}
export default Graph2;