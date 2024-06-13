import axios from "axios";
import { useEffect, useState } from "react";
import { SuitHeart, SuitHeartFill } from "react-bootstrap-icons";

export default function FavoriteBtn({ productID }) {
  const localhost = process.env.REACT_APP_LOCALHOST;
  const token = localStorage.getItem('token');
  const userID = localStorage.getItem('userID');
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    axios.post(`${localhost}/customer/isfavorite/${productID}`,{'user_id': userID}, { headers: { 'Authorization': `Bearer ${token}` } })
      .then((res) => setFavorite(res.data))
      .catch((err) => console.error(err));
  }, [productID]);


  const favoriteClick = async () => {
    const data = { "user_id": userID, "product_id": productID };
    axios.post(`${localhost}/customer/favorites`, data, { headers: { 'Authorization': `Bearer ${token}` } })
      .then((res) => {
        axios.post(`${localhost}/customer/isfavorite/${productID}`,{'user_id': userID}, { headers: { 'Authorization': `Bearer ${token}` } })
          .then((res) => setFavorite(res.data))
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  }

  return (
    <button onClick={favoriteClick} className="rounded-md w-10 h-10 text-white bg-cream-600 hover:bg-cream-600/90  p-0 border-0 inline-flex items-center justify-center ml-2">
      {favorite === "yes" ?
        (<SuitHeartFill className="h-6 w-auto" />)
        : (<SuitHeart className="h-6 w-auto" />)
      }
    </button>
  )
}