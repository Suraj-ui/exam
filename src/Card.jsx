import React from 'react';
import { NavLink } from 'react-router-dom';


const Card = (props) => {
  return(
  <>
     <div className="col-md-4 col-10 mx-auto">
                <div class="card" >
  <img src={props.imgsrc} class="card-img-top" alt="CardImg"/>
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">{props.content}</p>
    <NavLink to="#" class="btn btn-primary">{props.btn}</NavLink>
  </div>
</div>
                </div>
  </>);
}



export default Card;
