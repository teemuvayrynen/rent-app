"use client"

import React from 'react';

function InformationForm({apartmentData, handleUpdate}) {

    return (
        <>
            <h2>Give information about your place</h2>
            <div className="form-wrapper-column">
            <label>What is the type?</label>
            <input type="text" autoFocus required placeholder='Apartment type' value={apartmentData['apartmentType']} onChange={(e) => handleUpdate('apartmentType', e.target.value)} />
            <label>What is the surface area in m2?</label>
            <input type="number" autoFocus required placeholder='Apartment size' value={apartmentData['size']} onChange={(e) => handleUpdate('size', parseInt(e.target.value, 10))}/>
            <label>How many rooms?</label>
            <input type="number" autoFocus required placeholder='Room number' value={apartmentData['roomAmount']} onChange={(e) => handleUpdate('roomAmount', parseInt(e.target.value, 10))}/>
            </div>
        </>
    );
}

export default InformationForm;
