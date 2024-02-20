export default function About() {
    return (
        <article className="about-us">
            <section className="hero-text">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p className="about-subtext"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              euismod condimentum ante finibus consequat. Donec vitae nisl
              mollis, vehicula sem ut, imperdiet tellus. Duis magna tellus,
              ultrices quis molestie nec, ullamcorper in urna. Mauris accumsan
              tellus mi, vitae rutrum felis scelerisque at.{" "}</p>
            </section>

            <section className="double-image">
                <img className="about-1" src={require('../../../assets/food/food3.jpeg')} alt="Little Lemon restaurant cuisine 1"></img>
                <img className="about-2" src={require('../../../assets/food/food4.webp')} alt="Little Lemon restaurant cuisine 2"></img>
            </section>
    </article>
    );
}