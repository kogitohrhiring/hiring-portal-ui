import React, { useEffect, useState } from 'react';
import { Table, TableHeader, TableBody, IAction, ISeparator } from '@patternfly/react-table';
import "@patternfly/react-core/dist/styles/base.css";
import { getAppliedCandidates } from 'src/services/jobService';

interface IAppliedCandidateTable {
  actions:(IAction | ISeparator)[],
  jobId:string
}

const AppliedCandidateTable: React.FC<IAppliedCandidateTable> = ({actions,jobId}) => {
  // @ts-ignore
  const [columns, setColumns] = useState<string[]>(['Candidate ID','Name']);
  const [rows, setRows] = useState<string[][]>([]);

  useEffect(()=>{
    getAppliedCandidates(jobId).then((candidatesArray)=>{
        const tempArray=[];
        candidatesArray.forEach((candidate)=>{
            console.log(candidate)
            let row = [candidate.candidateId,candidate.name];
            tempArray.push(row);
        });
        setRows(tempArray);
    }).catch((error)=>{
        console.log(error)
    })
  },[]);

  return (
    <Table
      aria-label="Applied candidate table"
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

export default AppliedCandidateTable;