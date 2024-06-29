import Container from "../../ui/Container.tsx";
import HomeSectionContainer from "../../ui/home/HomeSectionContainer.tsx";

const HomeBlog = () => {
  return (
    <section>
      <Container>
        <HomeSectionContainer title="Our Blogs" to="/blog">
          Blog content
        </HomeSectionContainer>
      </Container>
    </section>
  );
};

export default HomeBlog;
