import React, { useState } from 'react';
import JSONInput from "react-json-editor-ajrm";
import locale from "react-json-editor-ajrm/locale/en";
import image from './assets/img.png'
import { Row,Col } from 'react-bootstrap';
import Form from './form/Form'
function App() {
  let placeholder = {
    sampleObject: 
    [

    ]
  };
const [data,setData]= useState(placeholder);
console.log('app',data.sampleObject.length)
  return (
    <div className="App">
        <Row>
          <Col>
          <JSONInput
              id="a_unique_id"
              // theme='light_mitsuketa_tribute'
              placeholder={data}
              locale={locale}
              height="550px"
              width="600px"
              onChange={(obj) => {
                if (obj.error) {
                  console.log('ERROR: ', obj.error);
                } else {
                setData(obj.jsObject)
                }
              }}
              onKeyPressUpdate="true"
              />
          </Col>
          <Col className='form'>
            {data.sampleObject.length?<Form data={data.sampleObject}/> :
              <>
                <h4 className="Maintitle">Please enter schema </h4>
                <p><b>Note:</b>
                <ul>
                  <li>Delete the square brackter</li>
                  <li>Click enter</li>
                  <li>Paste the UI-Schema</li>
                  <li>If the editor takes too much to load or error doesn't disappead ever after entering right schema kindly refresh the page</li>
                  <li>Please make sure your data is pasted in the following format else editor may throw error</li>
                  <img style={{height:"300px", objectFit:"contain"}} src={image}/>
                </ul>
                </p>
              </>
            }
          </Col>
        </Row>
    </div>
  );
}


export default App
