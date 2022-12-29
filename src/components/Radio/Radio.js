import React ,{useEffect}from 'react'
import Base from '../Base/Base'
function Radio(props) {
    const handlesubmit=(e)=>{
        localStorage.setItem("tab", e.target.value);
    }
    
    let naples;
    let newyork;
    if(props.data.jsonKey==="Naples"){
        naples = props.data.subParameters;
        localStorage.setItem("naples",JSON.stringify(naples));

    }else if( props.data.jsonKey==="NewYork"){
        newyork = props.data.subParameters;
        localStorage.setItem("newyork",JSON.stringify( newyork));
    }
    naples = JSON.parse(localStorage.getItem("naples"))
    newyork = JSON.parse(localStorage.getItem("newyork"))
  return (
    <div >
        {props.data.uiType=='Radio' &&
         <ul class="nav nav-pills mb-3 active" id="pills-tab" role="tablist" >
            {props.data.validate.options.map((tab,i)=>{
                return(
                    <li class="nav-item" role="presentation">
                        <button name={props.data.jsonKey} class="nav-link" onClick={handlesubmit}   value={tab.value} active={tab.value== props.data.validate.defaultValue} id={`${i+1}`} data-bs-toggle="pill" data-bs-target={`#pills-${i+1}`} type="button" role="tab" aria-controls={`pills-${i+1}`} aria-selected="true">{tab.label}</button>
                    </li>
                )
            })}
        </ul>
        }


       
            <div class="tab-content" id="pills-tabContent">
            
                <div class="tab-pane fade show"  id={`pills-${1}`} role="tabpanel" aria-labelledby={1}>
                    <div>
                        {naples.map((info)=>{
                            return(
                            <Base data= {info}/>
                            )
                        })}
                    </div>
                </div>
             <div class="tab-pane fade show"  id={`pills-${2}`} role="tabpanel" aria-labelledby={2}> 
                    <div>
                        {newyork.map((info)=>{
                            return(
                            <Base data= {info}/>
                            )
                        })}
                    </div>
            </div> 
            </div> 
        

    </div>
  )
}

export default Radio
{/*  */}
