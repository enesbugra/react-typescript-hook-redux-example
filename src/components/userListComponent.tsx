import React from 'react';
import { useSelector } from 'react-redux'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default,
      },
    },
  }))(TableRow);

  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });

const UserListComponent = () => {
    const userList = useSelector(state => state.userList.userList)

    const classes = useStyles();
    return (
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">First name</StyledTableCell>
              <StyledTableCell align="left">Last name&nbsp;(g)</StyledTableCell>
              <StyledTableCell align="left">Age&nbsp;(g)</StyledTableCell>
              <StyledTableCell align="left">Profession&nbsp;(g)</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userList.map((user) => (
              <StyledTableRow key={user.firstName}>
                <StyledTableCell align="left">{user.firstName}</StyledTableCell>
                <StyledTableCell align="left">{user.lastName}</StyledTableCell>
                <StyledTableCell align="left">{user.age}</StyledTableCell>
                <StyledTableCell align="left">{user.profession}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
}

export default UserListComponent;