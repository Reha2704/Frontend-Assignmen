import { FaInfoCircle } from 'react-icons/fa';
import info from './info.png'
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
function Tooltop(data) {
  return (
    <OverlayTrigger
      placement="bottom"
      overlay={
(      <Tooltip id="button-tooltip-2">{data.data.description}</Tooltip>)
  
    }
    >
      {({ ref, ...triggerHandler }) => (
        <Button
          variant="light"
          {...triggerHandler}
          className="d-inline-flex align-items-center"
        >
          {data.data.uiType=="Select" ?
          <>
              <span className="ms-1">
               Select {data.data.label}
              {(data?.data?.validate?.required)?"*":""}
              </span>
              <Image
              ref={ref}
              style={{height:"12px",marginTop:"5px",marginLeft:"5px"}}
              className="roundedCircle"
              src={info}
            />
          </>
          :
          <>
              <span className="ms-1">
              {data.data.label}
              {(data?.data?.required)?"*":""}
              </span>
              <Image
              ref={ref}
              style={{height:"12px",marginTop:"5px",marginLeft:"5px"}}
              className="roundedCircle"
              src={info}
            />
          </>
          }
        </Button>
      )}
    </OverlayTrigger>
  );
}

export default Tooltop;