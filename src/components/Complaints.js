import React from 'react'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import {FaDownload } from 'react-icons/fa';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

function Complaints() {

  const downloadPdf = () => {
    const doc = new jsPDF()
    doc.text("Complaints", 20, 10)
    doc.autoTable({
      html: '#ctable'
    })
    doc.save('complaints.pdf')
  }


  return (
  
          
    <div name='comp'>
    <div class="p-5 ml-64">
<div class="font-bold mb-2 text-center text-4xl mt-28">Complaints</div>
 <div class=" shadow-green-900">
   
   <div class=" w-full lg:max-w-full lg:flex justify-center">
   
   <div class=" border-gray-400 lg:border-l lg:border-r lg:border-b lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
       <div class="mb-8">
        <div class="gn">
        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800" onClick={ () => downloadPdf()}>
  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
  Generate Report
  </span>
</button>
<button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
  Delete All
  </span>
</button>
       </div>
       <Table class="max-w-[1240px] mx-auto" id="ctable">
       
      
     
      
      <Tbody>
      <Tr>
          <Th>Complaint Detail</Th>
          <Th>Username</Th>
          <Th>Date</Th>
          <Th>Reported to</Th>
          
        </Tr>
        <Tr>
          <Td>Food Quality is poor</Td>
          <Td>Thishan</Td>
          <Td>22.08.2022</Td>
          <Td>Waniya</Td>
        </Tr>
        <Tr>
        <Td>Not Pickup</Td>
          <Td>Thuve</Td>
          <Td>23.082022</Td>
          <Td>Rashmika</Td>
        </Tr>
        <Tr>
        <Td>Food packets are not enough as mentioned</Td>
          <Td>Sandun</Td>
          <Td>23.08.2022</Td>
          <Td>Joseph</Td>
        </Tr>
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

export default Complaints