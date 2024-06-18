import Container from "../../ui/container/Container.tsx";
import Button from "../../ui/button/Button.tsx";
import styles from "./banner.module.scss";

export default () => {
  return (
    <section>
      <Container>
        <div className={styles.container}>
          <div className={styles.left}>
            <h1>Tech Heim</h1>
            <h3>
              "Join the <span>digital revolution</span>"
            </h3>
            <div>
              <Button color="secondary" type="regular">
                Explore More
              </Button>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.bannerImage} />
          </div>
        </div>
      </Container>
    </section>
  );
};
