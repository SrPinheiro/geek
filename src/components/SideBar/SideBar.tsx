// styles
import styles from './SideBar.module.css'
// Icons
import {AiOutlineHeart} from 'react-icons/ai'
import { GoChecklist } from "react-icons/go";
import { IconType } from 'react-icons'
import { IoDiamondOutline } from "react-icons/io5";
import {FiUser} from 'react-icons/fi'

type optionType = {icon: IconType, text: string}

const SideBar = () => {
  const options:optionType[] = [
    {icon: AiOutlineHeart, text:'Favoritos'},
    {icon: GoChecklist, text:'Para-Assistir'},
    {icon: IoDiamondOutline, text:'Recomendados'},
    {icon: FiUser, text:'Conta'}
  ]

  return (
    <div className={styles.container}>
      <div className={styles.profileImage}>
        <img src={`${process.env.PUBLIC_URL}/images/NoUser.png`} alt="Foto de perfil" />
      </div>
      <div className={styles.content}>
        {options.length > 0 && options.map((option, index) => (
          <div key={index} className={styles.optionContainer} onClick={() => alert(`Você cliclou em: ${option.text}`)}>
            <option.icon/>
            <p>{option.text}</p>
          </div>
        ))}
      </div>
      <div className={styles.footer}>
        <h1 className={styles.title}>Geek Movies</h1>
      </div>
    </div>
  )
}

export default SideBar