import React from 'react';
import './MenuItem.css'

const MenuItem = ({item}) => (
  <div>
    <div className="row">
				  <div className="card-menu">
					  <img src={item.image} class="card-img-top" alt="..."/>
					  <div className="card-body">
					    <p className="card-text">
						    <h3>{item.name}</h3>
						    <p>{item.description}</p>
						    <i>{item.price}</i>
					    </p>
					  </div>
				  </div>
	  </div>
    </div>
);

export default MenuItem;
