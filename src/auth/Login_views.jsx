
import LoginField_comp from './login/LoginField_comp'
import back from '../assets/images/background.svg'


function Login_views() {
    return (
        <div className='w-[90%] h-screen bg-[#FFF1E7] mx-auto'>
            <div className=' flex items-center justify-center h-full gap-4 p-4'>
                <div className='lg:w-[40%]'>
                    <img src={back} alt="" className='rounded-xl' />
                </div>
                <div className='bg-white lg:w-[60%] rounded-xl flex flex-col items-center h-full'>
                    <LoginField_comp />
                </div>


            </div>
        </div>
    )
}

export default Login_views
