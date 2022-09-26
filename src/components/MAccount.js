import React from 'react'

function MAccount() {
  return (
  
          
    <div name='comp'>
    <div class="p-5 ml-64">
<div class="font-bold mb-2 text-center text-4xl mt-28">Manage Account</div>
 <div class=" shadow-green-900">
   
   <div class=" w-full lg:max-w-full lg:flex justify-center">
   
   <div class=" border-gray-400 lg:border-l lg:border-r lg:border-b lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
       <div class="mb-8">
       
    <div class=" bg-white rounded shadow-2xl p-4 m-2 w-96">
        <h1 class="block w-full text-center text-gray-800 text-2xl font-bold mb-6">Change Password</h1>
        <form action="/" method="post">
            <div class="flex flex-col mb-4">
                <label class="mb-2 font-bold text-lg text-gray-900" for="admin_name">Name</label>
                <input class="border py-2 px-3 text-grey-800 bg-green-100" type="text" name="admin_name" id="admin_name"/>
            </div>
            <div class="flex flex-col mb-4">
                <label class="mb-2 font-bold text-lg text-gray-900" for="curpassword">Current Password</label>
                <input class="border py-2 px-3 text-grey-800 bg-green-100" type="text" name="curpassword" id="curpassword"/>
            </div>
            <div class="flex flex-col mb-4">
                <label class="mb-2 font-bold text-lg text-gray-900" for="newpassword">New Password</label>
                <input class="border py-2 px-3 text-grey-800 bg-green-100" type="email" name="newpassword" id="newpassword"/>
            </div>
            <div class="flex flex-col mb-4">
                <label class="mb-2 font-bold text-lg text-gray-900" for="pconpassword">Confirm New Password</label>
                <input class="border py-2 px-3 text-grey-800 bg-green-100" type="password" name="conpassword" id="conpassword"/>
            </div>
            <button class="w-36 h-10 rounded-full text-white ml-24
        transform hover:translate-x-1 transition duration-200 ease-in-out" id="bt"type="submit">
            Update
        </button>
            
        </form>
        
    </div>

         
       </div>
     </div>
   </div>
 </div>
 </div>
          
      
     
          </div>
        

  );
}

export default MAccount