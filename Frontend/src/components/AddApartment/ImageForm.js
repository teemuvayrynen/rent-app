import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark} from '@fortawesome/free-solid-svg-icons'

function ImageForm({apartmentData, handleUpdate}) {
    const [images, setImage] = useState(apartmentData.images)
    const [base64Images, setBase64Images] = useState([])

    useEffect(() => {
        console.log(images)
        handleUpdate('images', images)
    }, [images])

    const onImageChange = (event) => {
      if (event.target.files && event.target.files.length > 0) {
        setImage(prev => [...prev, ...event.target.files])
        Object.entries(event.target.files).map(([key, value]) => {
           if(value){
               const reader = new FileReader()
                reader.onload = function (event) {
                    console.log(event.target)
                   const base64String = event.target.result
                   setBase64Images(prev => [...prev, base64String])
                }
             reader.readAsDataURL(value)
            }
        })
      }
    }

    const deleteImage = (image, index) => {
        setBase64Images(prev => {
            return prev.filter(current => {
                return current !== image
            })
        })

        setImage(prev => {
            return prev.filter((current, idx) => {
                return idx !== index
            })
        })
    }

    return (
        <>
            <h2>Finally, upload images of your apartment</h2>
            <div>
                <label>Upload images</label>
                <input type="file" onChange={onImageChange} className="filetype" multiple accept='image/*' style={{color: 'transparent'}}/>
                <p>{images.length} files chosen</p>
                <div className='previw-container' style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: "5px 10px", margin: "10px 0"}}>
                {base64Images.length > 0 ? (
                    base64Images.map((image, index) => {
                        return (
                        <div key={image}  style={{position: 'relative', width: "100px", height: "100px"}}>
                            <FontAwesomeIcon icon={faXmark} onClick={() => deleteImage(image, index)} style={{color: "#ff0000", width: "20px", height: "20px", position: 'absolute', top: "-10px", right: "-10px"}}/>
                            <img alt="preview image" src={image} style={{width: "100px", height: "100px", objectFit: "cover", marginRight: "10px"}}/>
                        </div>)
                    })
                ) : null}
                </div>
            </div>
        </>
    );
}

export default ImageForm;