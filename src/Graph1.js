import React from "react";

function Graph1(){
    return(
    <>
          <div class="border-2 bg-white w-80 rounded-2xl p-2">

<div class="flex justify-between">
    <span class="text-slate-500">Active Revenue</span>
    <img src={require('./images/more-horizontal.png')} alt="" />
</div>

<div class="font-bold text-2xl mt-1">
    <span>$28291</span>
</div>

<div class=" flex space-x-6 mt-16 items-end">
    <div class="h-16 w-8 chart__color animation__1 rounded-2xl"></div>
    <div class="h-20 w-8 chart__color animation__3 rounded-2xl"></div>
    <div class="h-28 w-8 chart__color  rounded-2xl"></div>
    <div class="h-16 w-8 chart__color animation__2 rounded-2xl"></div>
    <div class="h-28 w-8 chart__color animation__3 rounded-2xl"></div>
    <div class="h-16 w-8 chart__color animation__1 rounded-2xl"></div>
    <div class="h-24 w-8 chart__color animation__2 rounded-2xl"></div>

</div>

<div class="flex space-x-8 mt-2">
    <span>15</span>
    <span>16</span>
    <span>17</span>
    <span>18</span>
    <span>19</span>
    <span>20</span>
    <span>21</span>
</div>

</div>
    </>
    );
}
export default Graph1;