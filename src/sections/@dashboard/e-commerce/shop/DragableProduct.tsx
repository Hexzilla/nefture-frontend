import { Card, CardContent,CardHeader, Button, Container, Chip, Stack, Typography, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

import StyledBox from '@components/atoms/StyledBox';
import Product from '@components/products/Product';
import ProductScheduled from '@components/products/ProductScheduled';
import ProductTested from '@components/products/ProductTested';
import { BaseProduct, ScheduledProduct } from '../../../my-products/types';
import { DragDropContext, Droppable, DropResult, Draggable } from '@hello-pangea/dnd';
import { hideScrollbarX } from '../../../../utils/cssStyles';
import { SkeletonKanbanColumn } from '@components/skeleton';
import Iconify from '@components/iconify';
import KanbanTaskCard from '../../kanban/KanbanTaskCard';
import { useDispatch, useSelector } from '../../../../redux/store';
import { getBoard, persistColumn, persistCard } from '../../../../redux/slices/kanban';
import CustomBreadcrumbs from '@components/custom-breadcrumbs';
import { PATH_DASHBOARD } from '../../../../routes/paths';
import { Box } from '@mui/system';

const BoardTitle = ({ title, chip }: { title: string; chip: number }) => (
  <Typography variant="subtitle1">
    {title} <Chip label={chip} sx={{ borderRadius: 1 }} />
  </Typography>
);

const defaultStyle = {
  minWidth: '420px',
  width: '420px',
  height: 'fit-content',
  backgroundColor: 'white',
  boxShadow: '0 0 2px 0 rgba(149, 144, 166, 0.2), 0 12px 24px -4px rgba(149, 144, 166, 0.12)',
  borderRadius: '16px'
};

export type Props = {
  title: string;
  droppableId: string;
  products?: BaseProduct[];
  scheduleProducts?: ScheduledProduct[];
};

export default function DragableProduct({ title, droppableId, products, scheduleProducts }: Props) {
  return (
    <Box sx={defaultStyle}>
      <CardHeader title={<BoardTitle title={title} chip={9} />} />
      <CardContent>
        <Droppable droppableId={droppableId}>
          {(droppableProvided) => (
            <Box ref={droppableProvided.innerRef}>
              {products && products.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id +"sky"} index={index}>
                  {(draggableProvided) => (
                  <Box
                    ref={draggableProvided.innerRef}
                    {...draggableProvided.draggableProps}
                    {...draggableProvided.dragHandleProps}
                    sx={{backgroundColor:'white'}}
                    mb={2}
                  >
                    <StyledBox key={index}>
                      <Product title={item.name +item.id} logo={item.logo} url={item.url} />
                    </StyledBox>
                  </Box>
                  )}
                </Draggable>
              ))}
              {scheduleProducts && scheduleProducts.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id +"sky"} index={index}>
                  {(draggableProvided) => (
                  <Box
                    ref={draggableProvided.innerRef}
                    {...draggableProvided.draggableProps}
                    {...draggableProvided.dragHandleProps}
                    sx={{backgroundColor:'white'}}
                    mb={2}
                  >
                    <StyledBox key={index}>
                      <ProductScheduled
                        title={item.name +item.id}
                        logo={item.logo}
                        url={item.url}
                        date={item.date!}
                        user={item.person!}
                      />
                    </StyledBox>
                  </Box>
                  )}
                </Draggable>
              ))}
              {droppableProvided.placeholder}
            </Box>
          )}
        </Droppable>
      </CardContent>
    </Box>
  );
}
