import { useState, useEffect } from 'react'
import getPictureWithValue from './unsplash-api'
import SearchBar from './SearchBar/SearchBar'
import ImageGallery from './ImageGallery/ImageGallery'
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn'
import { perPage } from './unsplash-api'
import Loader from './Loader/Loader'
import ImageModal from './ImageModal/ImageModal'
let totalPages;
import './App.css'

function App() {

  const[elements, setElements] = useState([])
  const[searchValue, setSearchValue] = useState("")
  const[newPage, setNewPage] = useState(1)
  const [loading, setLoading] = useState(false);
  const[modalIsOpen, setModalIsOpen] = useState(false)

  
  async function getPicture(value){
    try{
      
      setElements([])
    setSearchValue("")
    setLoading(true)
const result = await getPictureWithValue(value, 1);
setElements(result.data.results)
setNewPage(2)
totalPages = result.data.total_pages
if(totalPages === newPage) alert('немає сторінок')
    }catch (error){
console.log(error)
    }finally{
     setLoading(false)
    }
  }


 
  async function pagination(value){
    
    try{
      setNewPage(newPage+1)
      setLoading(true)
const result = await getPictureWithValue(value, newPage);
setElements([...elements, ...result.data.results])
if(totalPages === newPage) alert('немає сторінок')

    }catch (error){
console.log(error)
    }finally{
      setLoading(false)
    }
  }

  
 

  return (
    <div>
    <SearchBar onSubmit={getPicture} setSearchValue={setSearchValue}/>
    {/* <p>номер сторінки: {newPage}</p> */}
    <ImageGallery images={elements} modalOpen={setModalIsOpen}/>
    {loading && <Loader/>}
{elements.length > 0 && totalPages >= newPage && <LoadMoreBtn value={searchValue} onClick={pagination}/>}
<ImageModal isOpen={modalIsOpen} onClose ={() => setModalIsOpen(true)}></ImageModal>
    </div>
  )
}

export default App
