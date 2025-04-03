import DataTable from './utils/DataTable';

import { supabase } from './utils/supabase';

import { raleway } from './utils/fonts';

export default async function Home() {
  // Fetch the companies directly on the server
  const { data: companies, error } = await supabase.from('companies').select();

  if (error) {
    console.error('Error fetching companies:', error);
    return (
      <div>
        <h1>Error fetching companies</h1>
      </div>
    );
  }
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