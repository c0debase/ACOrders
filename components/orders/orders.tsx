import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Link from "../ui/Link";


// Functional component for table data of enumerated orders

const Orders: React.FC<{ rows: any[] }> = (props) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="right">Processor</TableCell>
            <TableCell align="right">Username</TableCell>
            <TableCell align="right">Total</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Subscription</TableCell>
            <TableCell align="right">Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row) => (
            <TableRow
              key={row.uuid}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.purchasedAt}
              </TableCell>
              <TableCell align="right">{row.paymentProcessor}</TableCell>
              <TableCell align="right">{row.username}</TableCell>
              <TableCell align="right">{row.total}</TableCell>
              <TableCell align="right">{row.quantity}</TableCell>
              <TableCell align="right">
                {row.subscription ? "Yes" : "No"}
              </TableCell>
              <TableCell>
                <Link href={'/orders/' + row.uuid}>View</Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Orders;
