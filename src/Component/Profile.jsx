import './DashBoard.css'

import profileImg from '../assets/profile.webp';
import cameraImg from '../assets/camera.webp';

export default function Profile(){

    return (
        <div className="main-page h-[80%] w-[20rem] bg-[#f7f8f9]">
            <div className='h-[10%] bg-white w-full flex items-center text-xl font-semibold'>
                <h2 className='ml-2 text-lg p-4'>Account settings</h2>
            </div>
            <div className='bg-[#f7f8f9] h-[85%] w-full border-b-[#CBCBCB] border-b-2 border-dashed'>
            <div className="main flex flex-col justify-between p-6 gap-3 h-auto w-full border-b-[#CBCBCB] border-b-2 border-dashed">
               <div className="profile h-auto w-full flex mb-4">
                   <div className="imgconatiner h-full w-[30%]">
                    <img className='h-[100%] w-[70%]  rounded-full' src={profileImg}></img>
                 <img className=' small-img rounded-full relative bottom-5 left-10' height={23} width={21}  src={cameraImg}></img>
                   </div>
                    <div className="content h-full w-[70%] flex flex-col mb-2 items-start">
                        <h2 className='font-bold mb-2'>Marry Doe</h2>
                        <p className='text-sm'>Marry@Gmail.com</p>
                    </div>
               </div>
               <p className='font-medium'>I began my web development journey by learning HTML, CSS, and JavaScript, building simple UIs.
Curiosity led me to explore React.js, where I created dynamic components and handled states effectively.
Gradually, I integrated Node.js and Express for backend development and connected it to MongoDB.</p>
            </div>
            </div>
        </div>
    )
}