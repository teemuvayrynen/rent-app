import React from 'react';
import './Rent.css';
import './Rules.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw, faSmoking, faUniversalAccess, faSquareCheck, faSquare } from '@fortawesome/free-solid-svg-icons';


function RentAndRules({ apartmentData }) {
    return (
        <div className='rent-container'>
            <h1>Apartment Rules</h1>
            <p>
                The monthly rent is <b>{apartmentData.monthlyPrice} €</b>.
                {apartmentData.waterPrice > 0 && (
                    <> Additionally, there is a <b> {apartmentData.waterPrice} € </b> monthly water cost.</>
                )}
                {apartmentData.deposit > 0 && (
                    <> The deposit is <b> {apartmentData.deposit} €</b>.</>
                )}
            </p>

            <div className='mini-divider'/>

            <div className='rules-info'>
                <RuleCategory
                    title="Pets"
                    icon={faPaw}
                    data={apartmentData.rules.pets}
                    textFalse={"Not allowed"}
                    textTrue={"Allowed"}
                />
                <RuleCategory
                    title="Smoking"
                    icon={faSmoking}
                    data={apartmentData.rules.smoking}
                    textFalse={"Not allowed"}
                    textTrue={"Allowed"}
                />
                <RuleCategory 
                    title="Unobstructed"
                    icon={faUniversalAccess}
                    data={apartmentData.rules.unobstructed}
                    textFalse={"Is not unobstructed"}
                    textTrue={"Is unobstructed"}
                />
            </div>
        </div>
    );
}

  
function RuleCategory({ title, icon, data, textFalse, textTrue }) {
    return (
        <div className="rules-category">
            <h3 className="rules-title">
                <FontAwesomeIcon icon={icon} size='lg' style={{paddingRight: '4px'}}/> 
                {title}
            </h3>
            <label>
                {data ? (
                    <>
                        <FontAwesomeIcon icon={faSquareCheck} size='xs' style={{ paddingRight: '4px' }} />
                        {textTrue}
                    </>
                ) : (
                    <>
                        <FontAwesomeIcon icon={faSquare} size='xs' style={{ paddingRight: '4px' }} />
                        {textFalse}
                    </>
                )}
            </label>
        </div>
      )
  }


export default RentAndRules;
