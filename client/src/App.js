import React from 'react'
import Customer from './components/Customer';
import { Table, TableHead, TableBody, TableRow, TableCell, Paper, withStyles } from '@material-ui/core';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 1080
  }
})

const customer = [{
  'id': 1,
  'image': 'https://placeimg.com/64/64/any',
  'name': '홍길동',
  'birthday': '920303',
  'gender': '남자',
  'job': '대학생'
}, {
  'id': 2,
  'image': 'https://placeimg.com/64/64/1',
  'name': '박기영',
  'birthday': '910303',
  'gender': '남자',
  'job': '디자이너'
}, {
  'id': 3,
  'image': 'https://placeimg.com/64/64/2',
  'name': '안성진',
  'birthday': '910303',
  'gender': '남자',
  'job': '프로그래머'
}



]

function App(props) {
  const { classes } = props;

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
          {customer.map((customer) => <Customer key={customer.id} id={customer.id} image={customer.image} name={customer.name} birthday={customer.birthday} gender={customer.gender} job={customer.job} />)}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default withStyles(styles)(App);
