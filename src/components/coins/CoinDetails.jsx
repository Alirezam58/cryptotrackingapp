import React from 'react'

function CoinDetails({coin}) {
    if(!coin.id){
        return
    }

  return (
    <div className='container'>
        <div className='row my-5 coin-details-row'>
            <div className='col-12'>
                <h2>Detils of {coin.id}</h2>
            </div>
        </div>
        <div className='row my-2 coin-details-row'> 
            <div className='col-12 col-md-6'>
                <div>
                    <img src={coin.image.small} alt={coin.id} className='img-fluid mb-2' />
                    <h4>{coin.name} ({coin.symbol})</h4>
                </div>
                <div>
                    <h4 className='ms-1'>Market cap rank : <span>{coin.market_cap_rank}</span></h4>

                </div>
                <div>
                    <h4>Market cap : 
                        <span className='ms-1'>{coin.market_data.current_price.usd.toLocaleString()} $</span> 
                        <span className='ms-1 badge bg-success'>{coin.market_data.market_cap_change_percentage_24h.toFixed(2)} %</span>
                        </h4>

                </div>
                <div>
                    <h4>Current Price : 
                        <span className='ms-1'>{coin.market_data.market_cap.usd.toLocaleString()} $</span> 
                    </h4>
                </div>
            </div>
            <div className='col-12 col-md-6'>
                <div className="table-responsive">
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">24h</th>
            <th scope="col">7d</th>
            <th scope="col">30d</th>
            <th scope="col">1y</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
            <tr>
              <td>{coin.market_data.price_change_percentage_24h.toFixed(2)} %</td>
              <td>{coin.market_data.price_change_percentage_7d.toFixed(2)} %</td>
              <td>{coin.market_data.price_change_percentage_30d.toFixed(2)} %</td>
              <td>{coin.market_data.price_change_percentage_1y.toFixed(2)} %</td>
            </tr>
        </tbody>
      </table>
    </div>
            </div>
        </div>
        <div className='row my-2 coin-details-row'>
            <div className='col-12'>
                <h3>Description :</h3>
                <p dangerouslySetInnerHTML={{
                    __html : coin.description.en
                }}></p>
            </div>
        </div>
    </div>
  )
}

export default CoinDetails
