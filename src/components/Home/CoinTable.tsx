import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ohlcv } from "../../types/ohlcv";

interface CoinTableProps {
  coins: ohlcv[];
  updateCoin?: any;
}

const CoinTable = (props: CoinTableProps) => {
  return (
    <TableContainer component={Paper} style={{ maxHeight: 480 }}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Coin</TableCell>
            <TableCell>Symbol</TableCell>
            <TableCell>Latest Price (USD)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.coins
            .sort((c1, c2) => (c1.coin < c2.coin ? -1 : 1))
            .map((coin) => {
              return (
                <TableRow
                  key={coin.coin}
                  onClick={() => props.updateCoin(coin.coin)}
                >
                  <TableCell>{coin.name}</TableCell>
                  <TableCell>{coin.coin}</TableCell>
                  <TableCell>{coin.close}</TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CoinTable;
