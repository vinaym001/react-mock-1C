import {MdDelete} from 'react-icons/md'

const MusicComponent = props => {
  const {itemDetails, getId} = props
  const {id, name, imageUrl} = itemDetails

  const onClickBtn = () => {
    getId(id)
  }
  return (
    <li>
      <img src={imageUrl} alt={name} />
      <button type="button" onClick={onClickBtn}>
        <MdDelete />
      </button>
    </li>
  )
}

export default MusicComponent
