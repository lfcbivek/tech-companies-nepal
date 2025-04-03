export interface Company {
    id: number;
    company_name: string;
    employee_size: string;
    website: string;
    flexibility: string;
    address_street: string;
    address_district: string;
    company_logo: string;
    headquarter_country: string;
    industry: string;
    linkedin_url: string;
  }

  export interface DataTableProps {
    companies: Company[];
  }