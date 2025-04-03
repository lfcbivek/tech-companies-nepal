'use client'

import DataTable from './utils/DataTable';

import { useState, useEffect } from 'react';
import { supabase } from './utils/supabase';

import { raleway } from './utils/fonts';
import { Company } from './utils/types';


export default function Home() {
  const [companies, setCompanies] = useState<Company[]>([]);

  useEffect(() => {
    async function getCompanies() {
      const { data: companies, error } = await supabase.from('companies').select()
      if(error) {
        console.log("error")
        console.log(error);
      }
      if (companies && companies.length > 1) {
        setCompanies(companies)
      }
    }

    getCompanies();
  }, [])
  return (
    <div className={`${raleway.className} main-container`}>
      <h1> List of Tech Companies operating in Nepal</h1>
      <h3>Companies: {companies.length}</h3>
      <DataTable 
        companies={companies}
      />
    </div>
  );
}
