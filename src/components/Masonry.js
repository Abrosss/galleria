

import {useNavigate} from 'react-router-dom';
function Masonry(props) {
  const navigate = useNavigate();
  const viewImage = (img, i) => {
    navigate('/slideshow',{state: {
      art:{img, i},
      slide:false
    } });

  }
  
  return (
    <>
    
    <div className='masonry'>
    {props.imageUrls.map((img, i) => (
      <div onClick={() => viewImage(img, i)} key={i} className="image">
        <div className='image-container'>
      <img className='img' src={img.images.thumbnail} alt="thumbnail"   ></img>
      <div className='caption'>
        <h2>{img.name}</h2>
        <p>{img.artist.name}</p>
      </div>
      </div>
    </div>
      
    ))}
    </div>
    </>
  )
}

export default Masonry