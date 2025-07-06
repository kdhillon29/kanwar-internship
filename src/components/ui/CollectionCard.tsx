import React from 'react'
import { Link } from 'react-router-dom'

const CollectionCard = ({collection}) => {
  return (
                  <>
                  
                    <img
                      src={collection?.imageLink}
                      alt=""
                      className="collection__img"
                    />
                    <div className="collection__info">
                      <h3 className="collection__name">{collection?.title}</h3>
                      <div className="collection__stats">
                        <div className="collection__stat">
                          <span className="collection__stat__label">Floor</span>
                          <span className="collection__stat__data">
                            {parseFloat(collection?.floor).toFixed(2)} ETH
                          </span>
                        </div>
                        <div className="collection__stat">
                          <span className="collection__stat__label">
                            Total Volume
                          </span>
                          <span className="collection__stat__data">
                            {parseFloat(collection?.totalVolume).toFixed(2)} ETH
                          </span>
                        </div>
                      </div>
                    </div>
                  </>   
            
  )
}

export default CollectionCard