// styles
import styles from "./SideBar.module.css";
// Icons
import { AiOutlineHeart } from "react-icons/ai";
import { GoChecklist } from "react-icons/go";
import { IconType } from "react-icons";
import { IoDiamondOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";

// Hooks
import { GetUser } from "../../Hooks/GetUser";

type optionType = { icon: IconType; text: string; to: string };

const SideBar = () => {
  const [user] = GetUser();

  const options: optionType[] = [
    { icon: FaHome, text: "Home", to: "/" },
    { icon: AiOutlineHeart, text: "Favoritos", to: "/favorites" },
    { icon: GoChecklist, text: "Para-Assistir", to: "/to-watch" },
    { icon: IoDiamondOutline, text: "Recomendados", to: "/recomended" },
    { icon: FiUser, text: user ? "Conta" : "SingIn", to:user ? "/user/profile" : "/user/singin" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.profileImage}>
        <img
          src={`${process.env.PUBLIC_URL}/images/NoUser.png`}
          alt="Foto de perfil"
        />
      </div>
      <div className={styles.content}>
        {options.length > 0 &&
          options.map((option, index) => (
            <NavLink
              to={option.to}
              key={index}
              className={styles.optionContainer}
            >
              <option.icon />
              <p>{option.text}</p>
            </NavLink>
          ))}
      </div>
      <div className={styles.footer}>
        <h1 className={styles.title}>Geek Movies</h1>
      </div>
    </div>
  );
};

export default SideBar;
