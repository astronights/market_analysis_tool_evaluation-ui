import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getCoins } from "../../api/ohlcv";

class CoinTable extends React.Component {
  render() {
    getCoins();
    return (
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Coin</TableCell>
              <TableCell>Symbol</TableCell>
              <TableCell>Latest Price</TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
    );
  }
}

export default CoinTable;
