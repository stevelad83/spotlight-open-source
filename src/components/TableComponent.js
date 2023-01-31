import React from 'react';
import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import 'rsuite-table/dist/css/rsuite-table.css';

const dataList = [
  { id: 1, name: 'Ben', email: 'ben@email.com', location: 'Oregon' },
  { id: 2, name: 'Michelle', email: 'michelle@email.com', location: 'Oregon' },
  { id: 3, name: 'Andrew', email: 'andrew@email.com', location: 'Oregon' },
];

export default function TableComponent() {
  return (
    <Table data={dataList} bordered sortable fixed resizable>
      <Column width={100}>
        <HeaderCell>ID</HeaderCell>
        <Cell dataKey="id" />
      </Column>
      <Column width={100} sortable resizable>
        <HeaderCell>Name</HeaderCell>
        <Cell dataKey="name" />
      </Column>
      <Column width={100} sortable resizable>
        <HeaderCell>Email</HeaderCell>
        <Cell dataKey="email" />
      </Column>
      <Column width={100} sortable resizable>
        <HeaderCell>Location</HeaderCell>
        <Cell dataKey="location" />
      </Column>
    </Table>
  );
}
