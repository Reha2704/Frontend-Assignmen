import React, { useState } from 'react';
import './App.css';
import JSONInput from "react-json-editor-ajrm";
import locale from "react-json-editor-ajrm/locale/en";
import {connect} from 'react-redux'
import { Row,Col, Placeholder } from 'react-bootstrap';
import Form from './form/Form'
function App(props) {
  let placeholder = {
    sampleObject: 
    [
      {
        sort: 1,
        label: 'Pasta Name',
        description: '',
        validate: {
          required: true,
          immutable: false
        },
        jsonKey: 'name',
        uiType: 'Input',
        icon: '',
        level: 0,
        placeholder: ''
      },
      {
        sort: 10001,
        label: 'Pasta_type',
        description: '',
        validate: {
          required: true,
          immutable: false
        },
        jsonKey: 'pasta_type',
        uiType: 'Group',
        icon: '',
        level: 0,
        placeholder: '',
        subParameters: [
          {
            sort: 1,
            label: 'Sauce',
            description: '',
            validate: {
              required: true,
              options: [
                {
                  label: 'Red',
                  value: 'Red',
                  description: '',
                  icon: ''
                },
                {
                  label: 'White',
                  value: 'White',
                  description: '',
                  icon: ''
                },
                {
                  label: 'Pesto',
                  value: 'Pesto',
                  description: '',
                  icon: ''
                }
              ],
              defaultValue: 'Red',
              immutable: false
            },
            jsonKey: 'sauce',
            uiType: 'Select',
            icon: '',
            level: 1,
            placeholder: ''
          },
          {
            sort: 3,
            label: 'Topping_type',
            description: '',
            validate: {
              required: true,
              options: [
                {
                  label: 'Veg',
                  value: 'Veg',
                  description: '',
                  icon: ''
                },
                {
                  label: 'Mushroom',
                  value: 'Mushroom',
                  description: '',
                  icon: ''
                },
                {
                  label: 'Chicken',
                  value: 'Chicken',
                  description: '',
                  icon: ''
                },
                {
                  label: 'Prawns',
                  value: 'Prawns',
                  description: '',
                  icon: ''
                }
              ],
              defaultValue: 'Veg',
              immutable: false
            },
            jsonKey: 'topping_type',
            uiType: 'Select',
            icon: '',
            level: 1,
            placeholder: ''
          },
          {
            sort: 5,
            label: 'Cheese',
            description: '',
            validate: {
              options: [
                {
                  label: 'Cheddar',
                  value: 'Cheddar',
                  description: '',
                  icon: ''
                },
                {
                  label: 'Mozzarella',
                  value: 'Mozzarella',
                  description: '',
                  icon: ''
                },
                {
                  label: 'Parmesan',
                  value: 'Parmesan',
                  description: '',
                  icon: ''
                },
                {
                  label: 'Feta',
                  value: 'Feta',
                  description: '',
                  icon: ''
                },
                {
                  label: 'Gouda',
                  value: 'Gouda',
                  description: '',
                  icon: ''
                }
              ],
              defaultValue: 'Cheddar',
              immutable: false
            },
            jsonKey: 'cheese',
            uiType: 'Select',
            icon: '',
            level: 1,
            placeholder: ''
          }
        ]
      },
      {
        sort: 10002,
        label: 'Portion',
        description: '',
        validate: {
          options: [
            {
              label: 'Medium',
              value: 'Medium',
              description: '',
              icon: ''
            },
            {
              label: 'Small',
              value: 'Small',
              description: '',
              icon: ''
            },
            {
              label: 'Large',
              value: 'Large',
              description: '',
              icon: ''
            }
          ],
          defaultValue: 'Medium',
          immutable: false
        },
        jsonKey: 'portion',
        uiType: 'Select',
        icon: '',
        level: 0,
        placeholder: ''
      }
    ]
  
  };
  const [data,setData]= useState(placeholder);
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
                  <Form data={data.sampleObject}/>
          </Col>
        </Row>
    </div>
  );
}

const mapStateToProps = (state) => ({
  items: state.items
})

export default connect(mapStateToProps)(App)
