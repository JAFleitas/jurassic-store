import style from "../styles/Header.module.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Link from "next/link";
import { Badge } from "@mui/material";
import { IconButton } from "@mui/material";

import useCart from "../hooks/useCart";
import useUi from "../hooks/useUi";
export const Navbar = () => {
  const { toggleSideMenu } = useUi();
  const { numberOfItems } = useCart();
  return (
    <header className={style.container}>
      <Link href="/">
        <h1>Jurassic Store</h1>
      </Link>
      <div onClick={toggleSideMenu}>
        <IconButton>
          <Badge
            badgeContent={numberOfItems}
            color="primary"
            sx={{ fontSize: "42px" }}
          >
            <ShoppingCartOutlinedIcon
              style={{ fontSize: "32px", cursor: "pointer", color: "#f0f0f0" }}
            />
          </Badge>
        </IconButton>
      </div>
    </header>
  );
};
