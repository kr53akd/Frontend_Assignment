export function RightGradientLine(){
    return<div className="relative">
    <div className="absolute h-20 flex items-start top-0 right-0">
        <div className="w-0.5 h-full bg-linear-to-b via-pink-500 from-purple-600 to-orange-500"></div>
        <div className="w-1 md:w-1.5 ml-0.75 mr-[2.5px] bg-gray-700 h-full relative">
        <div className="w-full h-full bg-linear-to-b via-pink-500 from-purple-600 to-orange-500"></div>
        </div>
        <div className="w-[2.5px] h-full bg-linear-to-b  via-pink-500 from-purple-600 to-orange-500"></div>
      </div>
      
    <div className="flex pt-20">

    <div className="mt-24.25 w-1/2 h-28 border-l-3 border-t-3 border-orange-500 rounded-tl-[100px] relative pl-0.5 pt-0.5">
    <div className="w-full h-full border-l-7 border-t-7 border-orange-500 rounded-tl-[97px] relative pl-0.5 pt-0.5">
    <div className="w-full h-full border-l-3 border-t-3 border-orange-500 rounded-tl-[90px] relative">
    </div>
    </div>
    </div>

     <div className="w-1/2 h-28 border-r-3 border-b-3 border-orange-500 rounded-br-[100px] relative pr-0.5 pb-0.5">
    <div className="w-full h-full border-r-7 border-b-7 border-orange-500 rounded-br-[97px] relative pr-0.75 pb-0.5">
    <div className="w-full h-full border-r-3 border-b-3 border-orange-500 rounded-br-[90px] relative">
    </div>
    </div>
    </div>
    
    </div>
    </div>
}