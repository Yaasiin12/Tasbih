import { useState } from "react"


function ImageSlider(){

    const [index, setIndex] = useState(0)


    const handleNext = ()=>{
        if(index < images.length  -1){
            setIndex(index + 1)
        }

        
    }
    const handPrev = ()=>{
        if (index > 0){
            setIndex(index -1)
        }
        
    }

    const images =[
        "https://img.freepik.com/free-photo/manhattan-downtown-architecture-night-view_649448-220.jpg?t=st=1709551992~exp=1709555592~hmac=f82638665351b44acfb3c83fa281098bc071abb121a8a7b154e916ce33e8eec8&w=740",
        "https://img.freepik.com/free-photo/vertical-shot-monorail-bridge-street-captured-sunny-day-chicago_181624-36898.jpg?w=360&t=st=1709553083~exp=1709553683~hmac=e15fcf0a6cda8faa66862bd0167966594d82f0746d34df01fa551fe7506c75bc",
        "https://img.freepik.com/free-photo/sunrise-mesa-arch-canyonlands-national-park-near-moab-utah-usa_268835-1016.jpg?t=st=1709553161~exp=1709556761~hmac=a0533367cbd2f674706aa7658554b31ce35aafafdc3d800db6661724eead32a1&w=996",
        "https://img.freepik.com/free-photo/breathtaking-shot-beautiful-stones-turquoise-water-lake-hills-background_181624-12847.jpg?t=st=1709553248~exp=1709556848~hmac=1fb777d4fcba2205e384208f1d76717259e5d4220f87a71ca3c1c0a8377c7973&w=996"
    ]




    return <div className="text-center mt-10  mb-8">
        <img className="w-[800px] h-[400px] rounded ml-[365px]" src={images[index]}/>
        
        <button onClick={handPrev} className="bg-orange-500 text-3xl m-4 text-white  rounded p-4 font-bold">Prev</button>
        <button onClick={handleNext} className="bg-orange-500 text-3xl m-4 text-white rounded  p-4 font-bold">Next</button>
    </div>
}


export default ImageSlider