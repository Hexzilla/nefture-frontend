import { Card, CardContent,CardHeader, Button, Container, Chip, Stack, Typography, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

import StyledBox from '@components/atoms/StyledBox';
import Product from '@components/products/Product';
import ProductScheduled from '@components/products/ProductScheduled';
import ProductTested from '@components/products/ProductTested';
import { BaseProduct, ScheduledProduct } from '../types';
import { DragDropContext, Droppable, DropResult, Draggable } from '@hello-pangea/dnd';
import { hideScrollbarX } from '../../../utils/cssStyles';
import { SkeletonKanbanColumn } from '@components/skeleton';
import Iconify from '@components/iconify';
import KanbanTaskCard from '../../@dashboard/kanban/KanbanTaskCard';
import { useDispatch, useSelector } from '../../../redux/store';
import { getBoard, persistColumn, persistCard } from '../../../redux/slices/kanban';
import CustomBreadcrumbs from '@components/custom-breadcrumbs';
import { PATH_DASHBOARD } from '../../../routes/paths';
import { Box } from '@mui/system';
import DragableProduct from '../../@dashboard/e-commerce/shop/DragableProduct';

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

export default function ProductBoardView() {
  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId, type } = result;
    // dropped outside the list
    if (!destination) {
      return;
    }
    if(destination.droppableId == source.droppableId)
    {
      var tempProducts = products3;
      if(destination.droppableId==='savedroppable')
        tempProducts = products;
      if(destination.droppableId==='scheduledroppable')
        tempProducts = products2;
      var tProduct = tempProducts[destination.index];
      var t1Product = tempProducts[destination.index];
      [tempProducts[destination.index]] = [tempProducts[source.index]];
      if(destination.index<source.index)
        for (let i = destination.index + 1; i <= source.index; i++) {
          t1Product = tempProducts[i];
          [tempProducts[i]] = [tProduct];
          tProduct = t1Product;
        }
      else{
        for (let i = destination.index - 1; i >= source.index; i--) {
          t1Product = tempProducts[i];
          [tempProducts[i]] = [tProduct];
          tProduct = t1Product;
        }
      }
    }
    else{
      var iProduct = products[source.index];
      switch (source.droppableId) {
        case "testdroppable":
          iProduct = products3[source.index];
          products3.splice(source.index, 1);
          break;
        case "scheduledroppable":
          iProduct = products2[source.index];
          products2.splice(source.index, 1);
          break;
        case "savedroppable":
          iProduct = products[source.index];
          products.splice(source.index, 1);
          break;
        default:
          break;
      }
      switch (destination.droppableId) {
        case "testdroppable":
          products3.splice(destination.index, 0, iProduct);
          break;
        case "scheduledroppable":
          products2.splice(destination.index, 0, iProduct);
          break;
        case "savedroppable":
          products.splice(destination.index, 0, iProduct);
          break;
        default:
          break;
      }
    }
    return;
  }

  return (
    <>
    <DragDropContext onDragEnd={onDragEnd}>
      <Stack direction="row" justifyContent="space-between" spacing={2} sx={{ overflow: 'auto' }}>
        {/* Saved Products */}
        <DragableProduct 
          title = "Saved Products"
          droppableId = "savedroppable"
          products={products}
        />
        {/* Scheduled */}
        <DragableProduct 
          title = "Scheduled Products"
          droppableId = "scheduledroppable"
          scheduleProducts={products2}
        />
        {/* Tested */}
        <DragableProduct 
          title = "Tested Products"
          droppableId = "testdroppable"
          products={products3}
        />
      </Stack>
    </DragDropContext>
  </>
  );
}

const products: BaseProduct[] = new Array(7).fill(0).map(
  (_, index) =>
    ({
      id: index,
      name: 'Homerton Crew Tracksuit - Black',
      url: 'https://www.voilondon.com',
      logo: '/assets/images/products/product-1.svg',
    } as BaseProduct)
);

const products2: ScheduledProduct[] = new Array(10).fill(0).map(
  (_, index) =>
    ({
      id: index+10,
      name: 'Homerton Crew Tracksuit - Black',
      url: 'https://www.voilondon.com',
      logo: '/assets/images/products/product-1.svg',
      date: `Mar ${10 + index}, 2023`,
      person: 'Luke Dalton',
    } as ScheduledProduct)
);

const products3: BaseProduct[] = new Array(7).fill(0).map(
  (_, index) =>
    ({
      id: index+100,
      name: 'Homerton Crew Tracksuit - Black',
      url: 'https://www.voilondon.com',
      logo: '/assets/images/products/product-1.svg',
    } as BaseProduct)
);