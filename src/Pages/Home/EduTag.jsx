import img1 from '../../assets/images/libraryImg/1.jpg'
import img2 from '../../assets/images/libraryImg/2.jpg'
import img3 from '../../assets/images/libraryImg/3.jpg'
import img4 from '../../assets/images/libraryImg/4.jpg'
import img5 from '../../assets/images/libraryImg/5.jpg'
import img6 from '../../assets/images/libraryImg/6.jpg'

const EduTag = () => {
    return (
        <div className='grid md:grid-cols-2 gap-7 text-center my-20'>
            <div className=''>
                <h2 className='text-5xl font-bold font-mono my-10 underline'>EduLibrary</h2>
                    <h1 className='text-5xl font-bold font-mono text-teal-600'>Empowering Teachers, Inspiring Students.</h1>
            </div>

            <div className='text-center '>
                <div className='grid grid-cols-3 w-6/7 mx-auto my-5'>
                     
                        <img src={img1} alt="" />
                        <img src={img2} alt="" />
                        <img src={img3} alt="" />
                        <img src={img4} alt="" />
                        <img src={img5} alt="" />
                        <img src={img6} alt="" />
                     
                </div>
                <div>
                    <h1 className='text-3xl font-bold font-mono text-teal-600'>Unlocking the Potential of Education</h1>
                </div>
            </div>
        </div>
    );
};

export default EduTag;