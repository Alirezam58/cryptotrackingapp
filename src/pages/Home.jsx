import React, { useEffect, useState } from 'react'
import Spinner from '../components/ui/Spinner'
import axios from 'axios'
import {BaseUrl} from '../constants/api'
import Coins from '../components/coins/Coins'

function Home() {

  const [data, setData ] = useState([])
  const [loading, setLoading ] = useState(false)
  const [error, setError ] = useState("")

  useEffect(() => {
    setLoading(true)
    axios(BaseUrl)
      .then((response) => {
        setData(response.data)
        setLoading(false)
      })
      .catch((error) => {
        setError(error.message)
        setLoading(false)
      })
  }, [])

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12 text-center'>
          <h2>Cryoto Tracking</h2>
          <h4>A place to manage all of your trade information and actions</h4>
          <h4>Do not forget to always using asset and risks management!!!</h4>
        </div>
      </div>
      <div className='row'>
        <div className='col-12'>
          {loading ? <Spinner /> : error !=="" ? <h4 className='text-center text-danger'>{error}</h4> : <Coins data={data} />}
        </div>
      </div>

    </div>
  )
}

export default Home
