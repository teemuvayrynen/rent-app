import React from 'react';

function Additionalnfo({apartmentData, handleUpdate}) {
    return (
        <>
            <h2>Additional information</h2>
            <div className='additional-information'>
                    <div className='grid-item1'>
                        <label>Rent</label>
                        <input type="number" autoFocus required placeholder='EUR' value={apartmentData['montlyPrice']} onChange={(e) => handleUpdate('montlyPrice', e.target.value)}/>
                    </div>
                    <div className='grid-item2'>
                        <label>Deposit €</label>
                        <input type="number" autoFocus required placeholder='EUR' value={apartmentData['deposit']} onChange={(e) => handleUpdate('deposit', e.target.value)}/>
                    </div>
                    <div className='grid-item3'>
                        <label>Water price €</label>
                        <input type="number" autoFocus required placeholder='EUR' value={apartmentData['waterPrice']} onChange={(e) => handleUpdate('waterPrice', e.target.value)}/>
                    </div>
                    <div className='grid-item5'>
                        <label>Description</label>
                        <textarea type="text" autoFocus placeholder='Type a description of your place' value={apartmentData['description']} onChange={(e) => handleUpdate('description', e.target.value)}/>
                    </div>
                </div>
        </>
    );
}

export default Additionalnfo;