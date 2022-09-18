const Modal = ({ setModalOn, setChoice }) => {

    const handleOKClick = () => {
        setChoice(true)
        setModalOn(false)
    }
    const handleCancelClick = () => {
        setChoice(false)
        setModalOn(false)
    }
 

    // const [adminnameReg, setAdminnameReg] = useState('')
    // const [passwordReg, setPasswordReg] = useState('')

    // const register = () => {
    //     Axios.post('hhtps://localhost3001/register', {
    //         adminname:adminnameReg,
    //         password:passwordReg,
    //     }).then(response)
    // }

    return (

        <div className="   bg-green-200 opacity-80 fixed inset-0 z-50   ">

            <div className="flex h-screen justify-center items-center ">

                <div className="flex-col justify-center  bg-white py-12 px-24 border-4 border-green-500 rounded-xl ">

                <form action="/" method="post">
            <div class="flex flex-col mb-4">
                <label class="mb-2 font-bold text-lg text-gray-900" for="admin_name">Admin Name</label>
                <input class="border py-2 px-3 text-grey-800 bg-green-100" type="text"
                //  onChange={(e)=> {
                //     setAdminnameReg(e.target.value);
                //  }} 
                 name="admin_name" id="admin_name"/>
            </div>
            
            <div class="flex flex-col mb-4">
                <label class="mb-2 font-bold text-lg text-gray-900" for="newpassword">Password</label>
                <input class="border py-2 px-3 text-grey-800 bg-green-100" type="text" 
                //  onChange={(e)=> {
                //     setPasswordReg(e.target.value);
                //  }} 
                name="newpassword" id="newpassword"/>
            </div>
            {/* <div class="flex flex-col mb-4">
                <label class="mb-2 font-bold text-lg text-gray-900" for="pconpassword">Confirm Password</label>
                <input class="border py-2 px-3 text-grey-800 bg-green-100" type="password" name="conpassword" id="conpassword"/>
            </div> */}
            <button class="w-36 h-10 rounded-full text-white
        transform hover:translate-x-1 transition duration-200 ease-in-out" id="bt" onClick={handleOKClick}>
            Sign up
        </button>
        <button class="w-36 h-10 rounded-full text-white ml-4
         transform hover:translate-x-1 transition duration-200 ease-in-out" id="bt" onClick={handleCancelClick}>
            Close
        </button>

            
        </form>
                   

                </div>
            </div>
        </div>

    );
}

export default Modal