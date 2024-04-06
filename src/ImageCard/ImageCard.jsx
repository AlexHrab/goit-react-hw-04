import css from '../ImageGallery/ImageGallery.module.css'

function ImageCard({bigImage, littleImage, alt, modalOpen}){
    return(
        <div className={css.card}>
            <a href={bigImage}><img onClick={() => modalOpen(true)} className={css.image} src={littleImage} alt={alt}/></a>
        </div>
    )
}

export default ImageCard;