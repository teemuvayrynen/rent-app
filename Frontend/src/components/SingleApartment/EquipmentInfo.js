import React from 'react';
import './EquipmentInfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBath, faUtensils, faHouseCircleExclamation, faBolt, faPlus, faNetworkWired, faSquareCheck } from '@fortawesome/free-solid-svg-icons';

function EquipmentInfo({ apartmentData }) {
  const hasEquipment = Object.values(apartmentData.equipment).some((category) =>
    Object.values(category).some((value) => value)
  );
  return (
    <div className='equipment-container'>
      <h1>Equipment and Utility</h1>
      {hasEquipment ? (
          <div className='equipment-info'>
            <EquipmentCategory
              title="Bathroom"
              icon={faBath}
              data={apartmentData.equipment.bathroom}
            />
            <EquipmentCategory
              title="Kitchen"
              icon={faUtensils}
              data={apartmentData.equipment.kitchen}
            />
            <EquipmentCategory 
              title="Electronics"
              icon={faNetworkWired}
              data={apartmentData.equipment.electronics}
            />
            <EquipmentCategory 
              title="Premises" 
              icon={faHouseCircleExclamation} 
              data={apartmentData.equipment.premises} 
            />
            <EquipmentCategory 
              title="Utility"
              icon={faBolt} 
              data={apartmentData.equipment.utility}
            />
            <EquipmentCategory 
              title="Others"
              icon={faPlus}
              data={apartmentData.equipment.other}
            />
          </div>
      ) : (
        <h3>No equipment or utilities marked.</h3>
      )
      }
      
    </div>
  );
}

function EquipmentCategory({ title, icon, data }) {
  const hasItems = Object.values(data).some((value) => value);

  return (
    hasItems && (
      <div className="equipment-category">
        <h3 className="category-title">
          <FontAwesomeIcon icon={icon} size='lg' style={{paddingRight: '4px'}}/> 
          {title}
        </h3>
        <ul className='equipment-list'>
          {Object.entries(data).map(([item, value]) => (
            value && (
              <li key={item}>
                <label className='icon-label'>
                  <FontAwesomeIcon icon={faSquareCheck} size='xs' style={{paddingRight: '4px'}}/>
                  {formatEquipmentName(item)}
                </label>
              </li>
            )
          ))}
        </ul>
      </div>
    )
  );
}
  

function formatEquipmentName(name) {
  return name.replace(/(^|_)([a-z])/g, (match, separator, letter) =>
    (separator === '_' ? ' ' : '') + letter.toUpperCase()
  );
}

export default EquipmentInfo;
