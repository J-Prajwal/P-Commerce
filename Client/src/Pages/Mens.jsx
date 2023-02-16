import React from 'react';
import Footer from '../Components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addMensData, mensData } from '../Redux/Mens/mens.actions';
import ProductCard from '../Components/ProductCard';
import { Box, Center, CircularProgress, SimpleGrid } from '@chakra-ui/react';
import ProductSidebar from '../Components/ProductSidebar';
import { useState } from 'react';

const Mens = () => {
  const dispatch = useDispatch();
  const { mens, isLoading } = useSelector((state) => state.mensReducer);
  const [category, setCategory] = useState('');

  const handleAddMensProduct = (prod) => {
    dispatch(addMensData(prod));
  };

  useEffect(() => {
    dispatch(mensData(category));
  }, [category, handleAddMensProduct]);

  const sliderData = [
    {
      imgUrl:
        'https://images.unsplash.com/photo-1467843182948-36a9b559865e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      title: 'Offer 1',
    },
    {
      imgUrl:
        'https://images.unsplash.com/photo-1550246140-29f40b909e5a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      title: 'Offer 2',
    },
    {
      imgUrl:
        'https://images.unsplash.com/photo-1550246140-5119ae4790b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      title: 'Offer 3',
    },
  ];
  return (
    <div>
      <ProductSidebar setCategory={setCategory}>
        {isLoading ? (
          <Center mt={'10%'}>
            <CircularProgress size={'100px'} isIndeterminate color='blue.400' />
          </Center>
        ) : (
          <SimpleGrid columns={[1, 2, 3]} spacing={10}>
            {mens.length > 0 &&
              mens.map((ele) => <ProductCard data={ele} key={ele.id} />)}
          </SimpleGrid>
        )}
      </ProductSidebar>
      <Footer />
    </div>
  );
};

export default Mens;
