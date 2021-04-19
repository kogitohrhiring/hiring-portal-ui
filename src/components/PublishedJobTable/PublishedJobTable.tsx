import React, { useState, useEffect } from 'react';
import { Table, TableHeader, TableBody } from '@patternfly/react-table';
import { getPublishedJobList } from '../../services/jobService'
import "@patternfly/react-core/dist/styles/base.css";

interface IOwnProps {

}

const PublishedJobTable: React.FC<IOwnProps> = ({ }) => {
  const [columns, setColumns] = useState<string[]>(['Id', 'Name', 'Location', 'Category', 'Job Summary']);
  const [rows, setRows] = useState<string[][]>([]);
  console.log('test', setColumns)

  useEffect(() => {    
    getPublishedJobList().then(jobs => {
        const tempRows:string[][] = []
        jobs.map(job => {          
          let row:string[] = [job.id, job.name, job.location, job.category, job.jobSummary]
          tempRows.push(row)
        });
        setRows(tempRows)  
      }
    )  
  },[]);

  const actions = () => {
    return [
      {
        title: 'view',
        onClick: (event, rowId, rowData, extra) => console.log('clicked on view action, on row: ', rowId)
      },      
      {
        title: 'edit',
        onClick: (event, rowId, rowData, extra) => console.log('clicked on edit action, on row: ', rowId)
      },
      {
        title: 'delete',
        onClick: (event, rowId, rowData, extra) => console.log('clicked on delete action, on row: ', rowId)
      }
    ];
  };

  return (
    <Table
      aria-label="Actions table"
      variant={'compact'}
      borders={true}
      cells={columns}
      rows={rows}
      actions={actions()}
    >
      <TableHeader />
      <TableBody />
    </Table>
  );
}

export default PublishedJobTable;