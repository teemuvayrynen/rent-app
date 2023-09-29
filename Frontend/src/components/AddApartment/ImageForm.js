import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark} from '@fortawesome/free-solid-svg-icons'

function ImageForm() {
    const [images, setImage] = useState([])

    const handleSubmit = (e) => {
        console.log(e.target)
    }

    const handleChange = (e) => {
        console.log(e.target.value)
    }

    const onImageChange = (event) => {
        if (event.target.files && event.target.files.length > 0) {
            Object.entries(event.target.files).map(([key, value]) => {
                setImage(prev => [...prev, URL.createObjectURL(value)])
            })
            
        }
       }

    const deleteImage = (image) => {
        setImage(prev => {
            return prev.filter(current => {
                return current !== image
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
                {images.length > 0 ? (
                    images.map(image => {
                        return (
                        <div key={image}  style={{position: 'relative', width: "100px", height: "100px"}}>
                            <FontAwesomeIcon icon={faXmark} onClick={() => deleteImage(image)} style={{color: "#ff0000", width: "20px", height: "20px", position: 'absolute', top: "-10px", right: "-10px"}}/>
                            <img alt="preview image" src={image} style={{width: "100px", height: "100px", objectFit: "fill", marginRight: "10px"}}/>
                        </div>)
                    })
                ) : null}
                </div>
            </div>
        </>
    );
}

export default ImageForm;