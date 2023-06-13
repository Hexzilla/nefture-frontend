import React from 'react';
import { Card, Stack, Typography, Divider } from '@mui/material';

export type CardTableColumn = {
  id: string;
  label?: string | React.ReactNode;
  render?: (row: any) => React.ReactNode;
};

export type CardTableProps = {
  columns: CardTableColumn[];
  dataSource: any[];
  divider?: boolean;
};

const Row = ({ title, value }: { title: string | React.ReactNode; value: React.ReactNode }) => (
  <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ height: '56px', padding: '16px' }}>
    <Typography>{title}</Typography>
    {typeof value === 'string' ? <Typography>{value}</Typography> : value}
  </Stack>
);

export default function CardTable({ columns, dataSource, divider }: CardTableProps) {
  return (
    <Stack spacing={3}>
      {dataSource.map((row, index) => (
        <Card key={index} sx={{ padding: '12px 0' }}>
          {columns.map((column, idx) => (
            <div key={idx}>
              {divider && idx > 0 && <Divider />}
              {column.label ? (
                <Row
                  title={column.label}
                  value={column.render ? column.render(row) : row[column.id]}
                />
              ) : (
                <>{!!column.render && column.render(row)}</>
              )}
            </div>
          ))}
        </Card>
      ))}
    </Stack>
  );
}
