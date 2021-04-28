import React from "react";
import {  } from '@fortawesome/react-fontawesome';

function Pricecard(props)
{
    return(
        
      <div class="col-lg-4">
        <div class="card mb-5 mb-lg-0">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">{props.details.plan}</h5>
            <h6 className="card-price text-center">{props.details.currency}{props.details.price}/<span className="period">{props.details.period}</span></h6>
            <hr/>
            <ul class="fa-ul">
              <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.details.members}</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.details.storage}</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Public Projects</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Community Access</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Unlimited Private Projects</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Dedicated Phone Support</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{props.details.domain}</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Monthly Status Reports</li>
            </ul>
            <a href="#" class="btn btn-block btn-primary text-uppercase">Button</a>
          </div>
        </div>
      </div>
      
     
      );
      }
      export default Pricecard