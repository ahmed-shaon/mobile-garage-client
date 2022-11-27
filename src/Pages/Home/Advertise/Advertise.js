import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Shared/Loading/Loading';
import AdvertiseCard from './AdvertiseCard';

const Advertise = () => {
    const { data: advertiseProducts = [], isLoading } = useQuery({
        queryKey: [],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/advertise");
            const data = await res.json();
            return data;
        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }
    console.log(advertiseProducts)
    return (
        <div>
            {
                advertiseProducts.length > 0 && <div>
                    <h2 className='text-3xl fond-bold text-secondary text-center'>Advertise of Products</h2>
                    <div>
                        {
                            advertiseProducts.map(product => <AdvertiseCard
                            key={product._id}
                            product={product}
                            ></AdvertiseCard>)
                        }
                    </div>
                </div>
            }
        </div>
    );
};

export default Advertise;