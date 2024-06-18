import { CartIcon, SearchIcon } from "../../ui/svgs/icons.tsx";
import styles from "./nav-right.module.scss";
import Button from "../../ui/button/Button.tsx";

const NavRight = () => {
  return (
    <div className={styles.container}>
      <div>
        <Button icon rounded="full">
          <SearchIcon />
        </Button>
      </div>
      <div>
        <Button icon rounded="full">
          <CartIcon />
        </Button>
      </div>
      <div>
        <Button color="primary" type="regular" size="sm">
          Login / Register
        </Button>
      </div>
    </div>
  );
};

export default NavRight;
