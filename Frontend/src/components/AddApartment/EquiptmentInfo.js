import React from 'react';

function EquipmentInfo({apartmentData, handleUpdate}) {

    return (
        <>
            <h2>Equipments and Utiliy</h2>
            <div className='additional-information'>
                    <div className='grid-item1'>
                        <label>Bathroom</label>
                        <div className='option-container'>
                            {Object.entries(apartmentData.equipment.bathroom).map(([key, value]) => {
                                return (
                                    <div key={key} className='option'>
                                        <p>{key.replace(/(^|_)([a-z])/g, (match, separator, letter) =>
                                        (separator === "_" ? " " : "") + letter.toUpperCase()
                                        )}</p>
                                        <input className='checkbox' checked={value} type="checkbox" onChange={(e) => handleUpdate(`equipment.bathroom.${key}`, e.target.value)}/>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className='grid-item2'>
                        <label>Kitchen</label>
                        <div className='option-container'>
                            {Object.entries(apartmentData.equipment.kitchen).map(([key, value]) => {
                                return (
                                    <div key={key} className='option'>
                                        <p>{key.replace(/(^|_)([a-z])/g, (match, separator, letter) =>
                                        (separator === "_" ? " " : "") + letter.toUpperCase()
                                        )}</p>
                                        <input className='checkbox' checked={value} type="checkbox" onChange={(e) => handleUpdate(`equipment.kitchen.${key}`, e.target.value)}/>
                                    </div>
                                )
                            })}
                        </div>    
                    </div>
                    <div className='grid-item3'>
                        <label>Electronics</label>
                        <div className='option-container'>
                            {Object.entries(apartmentData.equipment.electronics).map(([key, value]) => {
                                return (
                                    <div key={key} className='option'>
                                        <p>{key.replace(/(^|_)([a-z])/g, (match, separator, letter) =>
                                        (separator === "_" ? " " : "") + letter.toUpperCase()
                                        )}</p>
                                        <input className='checkbox' checked={value} type="checkbox" onChange={(e) => handleUpdate(`equipment.electronics.${key}`, e.target.value)}/>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className='grid-item5'>
                        <label>Premises</label>
                        <div className='option-container'>
                            {Object.entries(apartmentData.equipment.premises).map(([key, value]) => {
                                return (
                                    <div key={key} className='option'>
                                        <p>{key.replace(/(^|_)([a-z])/g, (match, separator, letter) =>
                                        (separator === "_" ? " " : "") + letter.toUpperCase()
                                        )}</p>
                                        <input className='checkbox' checked={value} type="checkbox" onChange={(e) => handleUpdate(`equipment.premises.${key}`, e.target.value)}/>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className='grid-item5'>
                        <label>Utility</label>
                        <div className='option-container'>
                            {Object.entries(apartmentData.equipment.utility).map(([key, value]) => {
                                return (
                                    <div key={key} className='option'>
                                        <p>{key.replace(/(^|_)([a-z])/g, (match, separator, letter) =>
                                        (separator === "_" ? " " : "") + letter.toUpperCase()
                                        )}</p>
                                        <input className='checkbox' checked={value} type="checkbox" onChange={(e) => handleUpdate(`equipment.utility.${key}`, e.target.value)}/>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className='grid-item5'>
                        <label>Others</label>
                        <div className='option-container'>
                            {Object.entries(apartmentData.equipment.other).map(([key, value]) => {
                                return (
                                    <div key={key} className='option'>
                                        <p>{key.replace(/(^|_)([a-z])/g, (match, separator, letter) =>
                                        (separator === "_" ? " " : "") + letter.toUpperCase()
                                        )}</p>
                                        <input className='checkbox' checked={value} type="checkbox" onChange={(e) => handleUpdate(`equipment.other.${key}`, e.target.value)}/>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
        </>
    );
}

export default EquipmentInfo;