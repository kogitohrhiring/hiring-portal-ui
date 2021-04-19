import "@patternfly/react-core/dist/styles/base.css";
import './fonts.css';

import React from 'react';
import { Table, TableHeader, TableBody } from '@patternfly/react-table';

interface MyProps {
  }
  
  interface MyState {
    rows: string[][]
  }

class PublishedJobTable extends React.Component<MyProps, MyState> {
  constructor(props) {
    super(props);   
    this.state = {
        rows : [
            ['Repository one', 'Branch one', 'PR one', 'Workspace one', 'Commit one']
        ]
    } 
  }  
  
  actions() {
    return [
      {
        title: 'view',
        onClick: (event, rowId, rowData, extra) => console.log('clicked on view action, on row: ', rowId)
      },
      {
        isSeparator: true
      },
      {
        title: 'edit',
        onClick: (event, rowId, rowData, extra) => console.log('clicked on edit action, on row: ', rowId)
      },
      {
        isSeparator: true
      },
      {
        title: 'delete',
        onClick: (event, rowId, rowData, extra) => console.log('clicked on delete action, on row: ', rowId)
      }
    ];
  }

  componentDidMount(){
      fetch('http://localhost:8080/jobs').then(response => response.json()).then(response => this.setState({ rows: response.data }))
  }

  render() {
    //const tableData = JSON.parse(this.state.tableData);
    const columns = ['Repositories', 'Branches', 'Pull requests', 'Workspaces', 'Last commit'];
    // const rows = [
    //   ['Repository one', 'Branch one', 'PR one', 'Workspace one', 'Commit one'],
    //   ['Repository two', 'Branch two', 'PR two', 'Workspace two', 'Commit two'],
    //   ['Repository three', 'Branch three', 'PR three', 'Workspace three', 'Commit three']
    // ];

    return (
      <React.Fragment>        
        <Table
          aria-label="Actions table"
          variant='compact'
          borders={true}
          cells={columns}
          rows={this.state.rows}
          actions={this.actions()}
        >
          <TableHeader />
          <TableBody />
        </Table>
      </React.Fragment>
    );
  }
}

export default PublishedJobTable