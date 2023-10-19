import { useLoaderData } from 'react-router-dom';
import BrandProducts from './BrandProducts';

const BrandAdvertisement = () => {
    const brandData = useLoaderData();
    console.log('new', brandData);
    
    return (
        <div>
            {brandData ? (
                brandData.length > 0 ? (
                    <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4'>
                        {
                            brandData.map(brand => <BrandProducts key={brand._id} brand={brand}></BrandProducts>)
                        }
                    </div>
                ) : (
                    <p>Products are not available for this brand.</p>
                )
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default BrandAdvertisement;
