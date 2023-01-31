import React from 'react';
import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import 'rsuite-table/lib/less/index.less';

const dataList = [
  { id: 1, name: 'Ben', email: 'ben@email.com', location: 'Oregon' },
  { id: 2, name: 'Michelle', email: 'michelle@email.com', location: 'Oregon' },
  { id: 3, name: 'Andrew', email: 'andrew@email.com', location: 'Oregon' },
];

export default function TableComponent() {
  return <Table data={dataList}></Table>;
}
