import React from 'react';
import TableHeader from './TableHeader/TableHeader';
import BettingNav from './BettingNav/BettingNav';
import classes from './TableLists.module.css';
import { Fragment } from 'react';
const TableLists = () => {
  return (
     <Fragment>
     <TableHeader />
     <BettingNav />
 </Fragment>
  );
};

export default TableLists;
