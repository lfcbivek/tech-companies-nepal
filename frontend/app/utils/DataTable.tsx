'use client';

import React from 'react';
import { useState } from 'react';

import Flag from 'react-world-flags';
import { DataTableProps } from './types';
import Image from '@/node_modules/next/image';
// Define a type for the data structure



const DataTable:React.FC<DataTableProps> = ({companies}) => {
  const [curPage, setCurPage] = useState(1);
  const recordsPerPage = 30;

  const lastRecordIdx = curPage * recordsPerPage;
  const firstRecordIdx = lastRecordIdx - recordsPerPage;

  const curRecords = companies.slice(firstRecordIdx, lastRecordIdx);
  const totalPages = Math.ceil(companies.length / recordsPerPage);

  // Function to go to the next page
  const nextPage = () => {
    if (curPage < totalPages) {
        setCurPage(curPage + 1);
    }
  };

  // Function to go to the previous page
  const prevPage = () => {
    if (curPage > 1) {
        setCurPage(curPage - 1);
    }
  };

  return (
    <div>
      <div className="overflow-x-auto table-container-shadow">
        <table className="min-w-full table-auto border-collapse bg-white border-gray-300 shadow-md" id="data-table">
          <thead className='pt-20 pb-20 pl-20 pr-20'>
            <tr className="border-b border-gray-300">
              <th className="py-2 px-4 text-left text-lg font-semibold text-gray-700"></th>
              <th className="py-2 px-4 text-left text-lg font-semibold text-gray-700">Company</th>
              <th className="py-2 px-4 text-left text-lg font-semibold text-gray-700">Size</th>
              <th className="py-2 px-4 text-left text-lg font-semibold text-gray-700">Headquarters</th>
              <th className="py-2 px-4 text-left text-lg font-semibold text-gray-700">Flexibility</th>
              <th className="py-2 px-4 text-left text-lg font-semibold text-gray-700">Industry</th>
              <th className="py-2 px-4 text-left text-lg font-semibold text-gray-700">Address</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {curRecords.map((company, index) => (
              <tr key={index} className="border-b border-gray-300">
                  <td className="pl-4 pr-4 py-8 px-4 text-2xl">
                    {firstRecordIdx+index+1}
                  </td>
                  <td className="pl-4 pr-4 py-8 px-4 text-2xl">
                    <div className='company-name'>
                      <img src={company.company_logo} width={80} height={60} />
                      <a href={company.website} target="_blank">{company.company_name}</a>
                    </div>
                  </td>
                  <td className="pl-4 pr-4 py-8 px-4 text-2xl">
                    <div>
                      {company.employee_size}  
                    </div>
                  </td>
                  <td className="pl-4 pr-4 py-8 px-4 text-2xl">
                      <div className='headquarters'>
                          <Flag code={company.headquarter_country} style={{ width: '30px', height: '30px' }} />
                      </div>
                  </td>
                  <td className="py-8 px-4 text-2xl">{company.flexibility}</td>
                  <td className="py-8 px-4 text-2xl">{company.industry}</td>
                  <td className="py-8 px-4 text-2xl">{company.address_street ? `${company.address_street}, ${company.address_district}` : `No Address Available`} </td>
                  <td className="py-8 px-4 text-2xl">
                      <a href={company.linkedin_url} target='_blank'>
                        <Image
                          src="/linkedin.png"
                          alt="LinkedIn"
                          width={30}
                          height={30}
                        />
                      </a>
                  </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pagination">
        {curPage !== firstRecordIdx+1 &&
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={prevPage} disabled={curPage === 1}>
            Previous {recordsPerPage}
          </button>
        }
        {curPage !== totalPages &&
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={nextPage} disabled={curPage === totalPages}>
            Next {recordsPerPage}
          </button>
        }
      </div>
    </div>
    
  );
};

export default DataTable;