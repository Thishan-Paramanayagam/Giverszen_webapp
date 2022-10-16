import React ,{useEffect}from 'react'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import {FaDownload } from 'react-icons/fa';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

function Listings() {
  const downloadPdf = () => {
    const doc = new jsPDF()
    doc.text("Listings", 20, 10)
    doc.autoTable({
      html: '#ltable'
    })
    doc.save('listings.pdf')
  }
  const [listings, setListings] = React.useState([])


  useEffect(() => {
    
    fetch("https://giverzenbackend.herokuapp.com/api/anlistings").then(response => response.json())
      .then(json => setListings(json.results))

  }, [])

  useEffect(() => {
    console.log(listings);
  }, [listings])
  return (
  
          
    <div name='list'>
    <div class="p-5 ml-64">
<div class="font-bold mb-2 text-center text-4xl mt-28">Listings</div>
 <div class=" shadow-green-900">
   
   <div class=" w-full lg:max-w-full lg:flex justify-center">
   
   <div class=" border-gray-400 lg:border-l lg:border-r lg:border-b lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
       <div class="mb-8">
        <div class="gn">
        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800" onClick={ () => downloadPdf()}>
  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
  Generate Report
  </span>
</button><button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
  Delete All
  </span>
</button>
       </div>
       <Table class="max-w-[1240px] mx-auto" id="ltable">
       
      
        
      
      <Tbody>
      <Tr>
          <Th>Listing name</Th>
          <Th>Username</Th>
          <Th>Description</Th>
          <Th>Quantity</Th>
          
        </Tr>
        {listings.map(item =>(
        
        <Tr>
          <Td>{item.name}</Td>
          <Td>{item.name}</Td>
          <Td>{item.description}</Td>
          <Td>{item.quantity}</Td>
        
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
        

  );
}

export default Listings