import { BsCaretLeft, BsCaretRight, BsDatabaseExclamation, BsHandThumbsUp, BsHeart, BsShare, BsUbuntu } from 'react-icons/bs'
import classes from './ButtonsActions.module.css'

const ButtonsActions = () => {
  return (
    <div className={classes.actions}>
             <button>
              <BsHandThumbsUp/>Like
            </button>
            <button>
              <BsHeart/>Favorito
            </button>
            <button>
              <BsShare/>Compartir
            </button>
            <button>
              <BsDatabaseExclamation/>Reportar
            </button>
            <button>
              <BsUbuntu/>Recargar
            </button>
            <button>
              <BsCaretLeft/>Anterior
            </button>
            <button>
              Siguiente<BsCaretRight/>
            </button>
          </div>
  )
}

export default ButtonsActions
