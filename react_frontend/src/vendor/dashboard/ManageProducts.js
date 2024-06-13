import { Tooltip } from 'react-tooltip';
import DeleteProduct from "./DeleteProduct";
import { ChatFill, EyeFill, SuitHeartFill } from 'react-bootstrap-icons';
import RatingStars from '../../Elements/RatingStars';
import { Link } from 'react-router-dom';

export default function MangeProducts({ dataTable }) {
  const imglink = process.env.REACT_APP_LOCALHOST_IMG;

  return (
    <div className="mb-16">
      <div className="container px-4 mx-auto">
        <div className="text-center my-8">
          <h1 className="font-poppins sm:text-3xl text-2xl font-semibold text-cream-600 mb-3">Products <span className="text-gray-900 dark:text-white">Management</span></h1>
          <div className="flex justify-center">
            <div className="w-16 h-[3px] rounded-full bg-cream-600 inline-flex"></div>
          </div>
        </div>
        <div className="overflow-x-auto shadow border border-cream-300 rounded">
          <table className="w-full dark:bg-gray-800 table-auto">
            <thead className="">
              <tr className="text-base text-left text-gray-600 dark:text-gray-300 border-b border-cream-300">
                <th className="px-2 py-4 font-medium text-center">Image</th>
                <th className="px-2 py-4 font-medium">Name</th>
                <th className="px-2 py-4 font-medium">Price</th>
                <th className="px-2 py-4 font-medium">Stock</th>
                <th className="px-2 py-4 font-medium">Size</th>
                <th className="px-2 py-4 font-medium">Rating</th>
                <th className="px-2 py-4 font-medium">Quantity sold</th>
                <th className="px-2 py-4 font-medium">Revenue</th>
                <th className="px-2 py-4 font-medium">Likes</th>
                <th className="px-2 py-4 font-medium">Reviews</th>
                <th className="px-2 py-4 font-medium">Views</th>
                <th className="px-2 py-4 font-medium">Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                dataTable.map((item, index) => (
                  <tr key={index} className="border-b text-sm border-cream-300">
                    <td className="flex justify-center items-center px-0 py-1 font-medium">
                      <span className="bg-cream-300 flex justify-center items-center w-16 h-16 rounded">
                        <Link to={`/products/${item.ProductID}`}>
                          {
                            item.Image ?
                              (<img className="w-auto h-12 rounded" src={imglink + item.Image} alt={item.ProductName} data-tooltip-id={`product-${index}`} />)
                              : (<p className='text-[9px] text-white dark:text-gray-900'>Not Found</p>)
                          }
                        </Link>
                        <Tooltip id={`product-${index}`} place='right' style={{ background: '#FFD0D0', padding: '2rem' }}>
                          <img src={imglink + item.Image} className="w-52 h-auto" alt={item.ProductName} />
                        </Tooltip>
                      </span>
                    </td>
                    <td className="px-2 font-medium">{item.ProductName}</td>
                    <td className="px-2 font-medium">${item.ProductPrice}</td>
                    <td className="px-2 font-medium">{item.ProductStock}</td>
                    <td className="px-2 font-medium">{item.ProductSize}</td>
                    <td className="px-2 font-medium"><RatingStars rating={item.ProductRating} size={3} /></td>
                    <td className="px-2 font-medium">{item.TTQuantity}</td>
                    <td className="px-2 font-medium">${item.TTAmount}</td>
                    <td className="px-2 font-medium">
                      <div className='flex items-center'>
                        <SuitHeartFill className='w-4 h-auto mr-1' /> {item.TTFav}
                      </div>
                    </td>
                    <td className="px-2 font-medium">
                      <div className='flex items-center'>
                        <ChatFill className="h-4 w-auto mr-1" /> {item.TTRev}
                      </div>
                    </td>
                    <td className="px-2 font-medium">
                      <div className='flex items-center'>
                        <EyeFill className='h-4 w-auto mr-1' /> {item.TTView}
                      </div>
                    </td>
                    <td className="px-2 font-medium">
                      <DeleteProduct productid={item.ProductID} />
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}