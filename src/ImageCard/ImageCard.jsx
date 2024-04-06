import css from '../ImageGallery/ImageGallery.module.css'

function ImageCard({littleImage, alt, likes}){
    return(
        <div className={css.card}>
            <img className={css.image} src={littleImage} alt={alt}/>
            <p className={css.likes}>likes:{likes}</p>
        </div>
    )
}

export default ImageCard;