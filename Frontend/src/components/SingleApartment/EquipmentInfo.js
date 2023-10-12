import React from 'react';
import './EquipmentInfo.css';

function EquipmentInfo({ apartmentData }) {
  return (
    <div className="equipment-info">
      <EquipmentCategory title="Bathroom" data={apartmentData.equipment.bathroom} />
      <EquipmentCategory title="Kitchen" data={apartmentData.equipment.kitchen} />
      <EquipmentCategory title="Electronics" data={apartmentData.equipment.electronics} />
      <EquipmentCategory title="Premises" data={apartmentData.equipment.premises} />
      <EquipmentCategory title="Utility" data={apartmentData.equipment.utility} />
      <EquipmentCategory title="Others" data={apartmentData.equipment.other} />
    </div>
  );
}

function EquipmentCategory({ title, data }) {
    const hasItems = Object.values(data).some((value) => value);
  
    return (
      hasItems && (
        <div className="equipment-category">
          <h3 className="category-title">{title}</h3>
          <ul className="equipment-list">
            {Object.entries(data).map(([item, value]) => (
              value && <li key={item}>{formatEquipmentName(item)}</li>
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
