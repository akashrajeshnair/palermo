import React from 'react';
import './MenuHeader.css'
import SubHeading from '../SubHeading/SubHeading';

const MenuHeader = () => (
  <div>
    <nav className="breadcrumb-container">
        <ol class="breadcrumb">
            <li class="breadcrumb-item" style={{marginRight:'150px'}}><a href="#breakfast">Breakfast</a></li>
            <li class="breadcrumb-item" ><a href="#lunch">Lunch & Dinner</a></li>
            <li class="breadcrumb-item" style={{marginLeft: '60px'}}><a href="#beverages">Dessert & Beverages</a></li>
        </ol>
    </nav>
    </div>
);

export default MenuHeader;
