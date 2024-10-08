import axios from "axios";
import { useEffect, useState } from "react"

export default function ViewsCounter({ productID }) {
  const localhost = process.env.REACT_APP_LOCALHOST;
  const [result, setResult] = useState(0);

  useEffect(() => {
    axios.post(`${localhost}/views/${productID}`)
      .then()
      .catch((err) => console.error(err));

    axios.get(`${localhost}/getviews/${productID}`)
      .then((res) => setResult(res.data))
      .catch((err) => console.error(err));
  }, [])

  return (
    <>{result}</>
  )
}