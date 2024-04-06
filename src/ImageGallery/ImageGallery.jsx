import ImageCard from "../ImageCard/ImageCard";
import css from './ImageGallery.module.css'

function ImageGallery({images, modalOpen}){
    return(
        <ul className={css.box}>
	{images.map(el => <li key={el.id} className={css.item}><ImageCard modalOpen={modalOpen} bigImage={el.urls.regular} littleImage={el.urls.small} alt={el.urls.alt_description}/></li>)}
</ul>
    )
}

export default ImageGallery;

