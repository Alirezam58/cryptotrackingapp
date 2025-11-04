import React,{useEffect, useState} from 'react'
import { useParams } from "react-router-dom";
import { detailsUrl } from "../constants/api";
import axios from 'axios';
import CoinDetails from '../components/coins/CoinDetails';
import Spinner from '../components/ui/Spinner';

function Coin() {
    const paaramObject = useParams();
    const url = detailsUrl(paaramObject.id);

    const [coin, setCoin ] = useState({})
    const [loading, setLoading ] = useState(false)
    const [error, setError ] = useState("")

  useEffect(() => {
    setLoading(true)
    axios(url)
      .then((response) => {
        setCoin(response.data)
        console.log(response.data);
        setLoading(false)
      })
      .catch((error) => {
        setError(error.message)
        setLoading(false)
      })
  }, [])

  return (
    <div className='container'>
      {loading ? <Spinner /> : error !=="" ? <h4 className='text-center text-danger'>{error}</h4> : <CoinDetails coin={coin} />}
    </div>
  )
}

export default Coin
