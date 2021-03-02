import React, { useEffect, useState } from 'react'
import Customer from './components/Customer';
import { Table, TableHead, TableBody, TableRow, TableCell, Paper, withStyles } from '@material-ui/core';
import Axios from 'axios'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto'
  },
  table: {
    minWidth: 1080
  }
})



function App(props) {
  const { classes } = props;
  const [Customers, setCustomers] = useState([])


  const callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body
  }

  useEffect(() => {
    // Axios.get('/api/customers').then(res => {
    //   setCustomers(res.data);
    // })
    callApi().then(res => {
      setCustomers(res)
    }).catch(err => console.log(err))
  }, [])



  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Customers.map((customer) => <Customer key={customer.id} id={customer.id} image={customer.image} name={customer.name} birthday={customer.birthday} gender={customer.gender} job={customer.job} />)}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default withStyles(styles)(App);
