import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Shared/Loading/Loading';
import AdvertiseCard from './AdvertiseCard';

const Advertise = () => {
    const { data: advertiseProducts = [], isLoading } = useQuery({
        queryKey: ['advertise'],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/advertise");
            const data = await res.json();
            return data;
        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='my-12 lg:my-24'>
            {
                advertiseProducts.length > 0 && <div className='px-4 lg:px-20'>
                    <h2 className='text-3xl fond-bold text-secondary text-center my-8'>Advertise of Products</h2>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                        {
                            advertiseProducts.map(advertiseProduct => <AdvertiseCard
                            key={advertiseProduct._id}
                            advertiseProduct={advertiseProduct}
                            ></AdvertiseCard>)
                        }
                    </div>
                </div>
            }
        </div>
    );
};

export default Advertise;