import React,{useState,useEffect} from 'react'
import { Table, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

function Drivers() {
  const downloadPdf = () => {
    const doc = new jsPDF()
    doc.text("Drivers", 20, 10)
    doc.autoTable({
      html: '#dritable'
    })
    doc.save('drivers.pdf')
  }

  const [showModal, setShowModal] = useState(false);

  const [drivers, setDrivers] = React.useState([])

  const deletedriver = (id) => {
   
    fetch(`https://giverzenbackend.herokuapp.com/api/deldriver/${id}`, { method: 'DELETE' })
    .then(() => this.setState({ status: 'Delete successful' }));

    setDrivers(drivers.filter(item => item.id !== id))

    
}

const adddriver = () => {
   
  fetch("https://giverzenbackend.herokuapp.com/api/adddriver", { method: 'POST' })
  .then(() => this.setState({ status: 'Delete successful' }));

 // setDrivers(drivers.filter(item => item.id !== id))

  
}


  useEffect(() => {
    
    fetch("https://giverzenbackend.herokuapp.com/api/drivers").then(response => response.json())
      .then(json => setDrivers(json.results))

  }, [])

  useEffect(() => {
    console.log(drivers);
  }, [drivers])



  return (
    <div name='driver'>
       <div class="p-5 ml-64">
    <div class="font-bold mb-2 text-center text-4xl mt-28">Manage Drivers</div>
    <div class=" shadow-green-900 justify-center">
      
      <div class=" w-full lg:max-w-full lg:flex justify-center">
      
        <div class=" border-gray-400 lg:border-l lg:border-r lg:border-b lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div class="mb-8">
          <div class="gn">
          <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800" onClick={ () => downloadPdf()}>
  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
  Generate Report
  </span>
</button>
<button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800" onClick={ () => setShowModal(true)}>
  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
  Add Driver
  </span>
</button>

      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ease-in duration-300">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-center justify-center p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">Manage Driver</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right ml-8"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full" onSubmit={adddriver}>
                    <label className="block text-black text-sm font-bold mb-1">
                      Driver Name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                    
                    <label className="block text-black text-sm font-bold mb-1">
                      Vehicle
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1  text-black" />
                    <label className="block text-black text-sm font-bold mb-1">
                      Cost per km
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                    <label className="block text-black text-sm font-bold mb-1">
                      Status
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                    
                  </form>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                <div class="btn">
              
        <button class="w-36 h-10 rounded-full text-white 
         transform hover:translate-x-1 transition duration-200 ease-in-out" id="bt" type='submit'>
            Add
        </button></div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
       </div>
          <Table class="max-w-[1240px] mx-auto" id="dritable">
        
          
         
         <Tbody>
         <Tr>
             <Th>ID</Th>
             <Th>Driver name</Th>
             <Th>Vehicle</Th>
            
             
           </Tr>
           {drivers.map(item =>(
           <Tr>
             <Td>{item.id}</Td>
             <Td>{item.Name}</Td>
             <Td>{item.Vehicle}</Td>
             
             <Td><div class="btn">
              <button class="w-36 h-10 rounded-full text-white
        transform hover:translate-x-1 transition duration-200 ease-in-out" id="bt" onClick={ () => deletedriver(item.id)}>
            Delete
        </button></div></Td>
           </Tr>
           ))}
         </Tbody>
       </Table>
            
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Drivers