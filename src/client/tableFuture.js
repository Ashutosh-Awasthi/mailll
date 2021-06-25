import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import rows from "./table2data.js";
import { TextField, Button, Typography } from '@material-ui/core';

export default () => (
  <div>
    <h1 className="title">Material UI - Responsive Table</h1>
    <Paper className="container">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell numeric >Serial_no </TableCell>
            <TableCell >Date</TableCell>
            <TableCell >Email(g)</TableCell>
            <TableCell >Subject</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(({id,Serial_no, date, email,subject }) => (
            <TableRow key={id}>
             
              <TableCell numeric >{Serial_no}</TableCell>
              <TableCell >{date}</TableCell>
              <TableCell >{ email}</TableCell>
              <TableCell >{subject}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
       
    </Paper>
  </div>
);
