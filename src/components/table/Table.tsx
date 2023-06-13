import React from 'react';
import { Theme } from '@mui/material/styles';
import { TableContainer, Table, TableBody, TableRow, TableCell, SxProps } from '@mui/material';

import { TableNoData, TableHeadCustom } from '@components/table';

type Props = {
  dataSource: any[];
  columns: any[];
  order?: 'asc' | 'desc';
  orderBy?: string;
  rowCount?: number;
  numSelected?: number;
  onSort?: (id: string) => void;
  onSelectAllRows?: (checked: boolean) => void;
  sx?: SxProps<Theme>;
};

export default function DefaultTable({ dataSource, columns, ...props }: Props) {
  return (
    <TableContainer component="div">
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHeadCustom headLabel={columns} {...props} />
        <TableBody>
          {dataSource.map((row, idx) => (
            <TableRow key={idx}>
              {columns.map((column, index) => (
                <TableCell key={index}>
                  {column.render ? (
                    column.render(row)
                  ) : (
                    <>{column.dataIndex ? row[column.dataIndex] : row[column.id]}</>
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
          {/* <TableEmptyRows
                height={denseHeight}
                emptyRows={emptyRows(page, rowsPerPage, tableData.length)}
              /> */}

          <TableNoData isNotFound={!dataSource?.length} />
        </TableBody>
      </Table>
    </TableContainer>
  );
}
