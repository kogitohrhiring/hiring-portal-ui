import React, { useState, useEffect } from 'react';
import { Table, TableHeader, TableBody, IAction, ISeparator } from '@patternfly/react-table';
import { getPublishedJobList } from '../../../services/jobService'
import "@patternfly/react-core/dist/styles/base.css";

interface IPublishedJobTable {
  actions:(IAction | ISeparator)[]
}

const PublishedJobTable: React.FC<IPublishedJobTable> = ({actions}) => {
  // @ts-ignore
  const [columns, setColumns] = useState<string[]>(['Id', 'Name', 'Location', 'Category', 'Job Summary']);
  const [rows, setRows] = useState<string[][]>([]);

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

  return (
    <Table
      aria-label="Actions table"
      variant={'compact'}
      borders={true}
      cells={columns}
      rows={rows}
      actions={actions}
    >
      <TableHeader />
      <TableBody />
    </Table>
  );
}

export default PublishedJobTable;