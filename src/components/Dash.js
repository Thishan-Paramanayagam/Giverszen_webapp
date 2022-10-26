import React ,{useEffect}from 'react'

function Dash() {


    const [count1, setCount1] = React.useState('')
    const [count2, setCount2] = React.useState('')
    const [count3, setCount3] = React.useState('')
    const [count4, setCount4] = React.useState('')
    const [count5, setCount5] = React.useState('')


  useEffect(() => {
    
    fetch("https://giverzenbackend.herokuapp.com/api/count1").then(response => response.json())
      .then(json => setCount1(json.results[0].count1))

  }, [])

  useEffect(() => {
    console.log(count1);
  }, [count1])

  useEffect(() => {
    
    fetch("https://giverzenbackend.herokuapp.com/api/count2").then(response => response.json())
      .then(json => setCount2(json.results[0].count2))

  }, [])

  useEffect(() => {
    console.log(count2);
  }, [count2])

  useEffect(() => {
    
    fetch("https://giverzenbackend.herokuapp.com/api/count3").then(response => response.json())
      .then(json => setCount3(json.results[0].count3))

  }, [])

  useEffect(() => {
    console.log(count3);
  }, [count3])
  useEffect(() => {
    
    fetch("https://giverzenbackend.herokuapp.com/api/count4").then(response => response.json())
      .then(json => setCount4(json.results[0].count4))

  }, [])

  useEffect(() => {
    console.log(count4);
  }, [count4])
  useEffect(() => {
    
    fetch("https://giverzenbackend.herokuapp.com/api/count5").then(response => response.json())
      .then(json => setCount5(json.results[0].count5))

  }, [])

  useEffect(() => {
    console.log(count5);
  }, [count5])

  return (
    <div name='dash'>
        
    <div class="p-5 ml-64">
          
             
          
      
      
      <div class="font-bold mb-2 text-center text-4xl mt-28 ">Overview</div>
      <div class=" shadow-green-900">

              <div class=" w-full lg:max-w-full lg:flex bg-white justify-center text-black">


                  <div class="p-10">

                      <div class="max-w-sm rounded overflow-hidden shadow-2xl" id="cd">

                          <div class="px-10 py-4 bg-green-200 w-64 h-40">
                              <div class="font-bold text-3xl mb-2 text-center">Total Users</div>
                              <br/>
                              <h1 class="text-center font-bold text-2xl">{count1}</h1>
                          </div>

                      </div>
                  </div>
                  <div class="p-10">

                      <div class="max-w-sm rounded overflow-hidden shadow-2xl" id="cd">

                          <div class="px-10 py-4 bg-green-200 w-64 h-40" >
                              <div class="font-bold text-3xl mb-2 text-center">Total Complaints</div>
                              <h1 class="text-center font-bold text-2xl">{count2}</h1>
                          </div>

                      </div>
                  </div>
                  <div class="p-10">

                      <div class="max-w-sm rounded overflow-hidden shadow-2xl" id="cd">

                          <div class="px-10 py-4 bg-green-200 w-64 h-40">
                              <div class="font-bold text-3xl mb-2 text-center">Total Listings</div>
                              <h1 class="text-center font-bold text-2xl">{count3}</h1>
                          </div>

                      </div>
                  </div>
                 
                  </div>
              </div>
              <div class=" w-full lg:max-w-full lg:flex bg-white justify-center text-black">
              <div class="p-10">

<div class="max-w-sm rounded overflow-hidden shadow-2xl" id="cd">

    <div class="px-10 py-4 bg-green-200 w-64 h-40" >
        <div class="font-bold text-3xl mb-2 text-center">Total Drivers</div>
        <h1 class="text-center font-bold text-2xl">{count4}</h1>
    </div>

</div>
</div><div class="p-10">

<div class="max-w-sm rounded overflow-hidden shadow-2xl" id="cd">

    <div class="px-10 py-4 bg-green-200 w-64 h-40" >
        <div class="font-bold text-3xl mb-2 text-center">Total Wanted</div>
        <h1 class="text-center font-bold text-2xl">{count5}</h1>
    </div>

</div>
              </div>

          </div>
         
          </div>
          </div>

  );
}

export default Dash