import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, imageSelected, isSelected} = props
  const {thumbnailUrl, thumbnailAltText, id} = thumbnailDetails
  const thumbnailSelected = () => {
    imageSelected(id)
  }
  const selectedClassName = isSelected ? 'thumb' : 'thumb-image'
  return (
    <li className="thumbnail-image-container">
      <button type="button" className="btn">
        <img
          className={selectedClassName}
          alt={thumbnailAltText}
          src={thumbnailUrl}
          onClick={thumbnailSelected}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
