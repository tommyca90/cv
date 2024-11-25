import {
  DEGREES,
  TRAININGS,
  TOOLS,
  SKILLS,
  TECHNOLOGIES,
  HOBBIES,
  SHOP_ITEMS,
  PMT_ITEMS,
  WORK_EXPERIENCES,
} from "./texts";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function App() {
  var counter = 0;
  const navbarEntries = [
    { title: "Ausbildung", link: "/#education" },
    { title: "Arbeitserfahrung", link: "/#experience" },
    { title: "Fortbildungen", link: "/#trainings" },
    { title: "Arbeitsproben", link: "/#samples" },
    { title: "Fähigkeiten", link: "/#skills" },
    { title: "Technologien", link: "/#technologies" },
    { title: "Werkzeuge", link: "/#tools" },
    { title: "Interessen", link: "/#hobbies" },
  ];
  return (
    <div className="App">
      <Navbar entries={navbarEntries} />
      {/* <header className="header">Thomas' CV</header> */}
      <Hero idx={counter++} />
      <Section id="education" title="Ausbildung" idx={counter++}>
        {DEGREES.map((degree, idx) => (
          <SubSectionPair
            key={idx}
            idx={idx}
            isLast={idx === DEGREES.length - 1}
            article={
              <Article
                title={degree.title}
                dateStart={degree.dateStart}
                dateEnd={degree.dateEnd}
                paragraphs={degree.paragraphs}
              />
            }
            image={
              <img
                className="article-img"
                src={degree.imgUrl}
                title={degree.imgTitle}
                alt={degree.imgAlt}
              />
            }
          />
        ))}
      </Section>
      <Section id="experience" title="Arbeitserfahrung" idx={counter++}>
        {WORK_EXPERIENCES.map((workExperience, idx) => (
          <SubSectionPair
            key={idx}
            idx={idx}
            article={
              <Article
                title={workExperience.title}
                dateStart={workExperience.dateStart}
                dateEnd={workExperience.dateEnd}
                paragraphs={workExperience.paragraphs}
              />
            }
            image={
              <img
                className="article-img downscale"
                src={workExperience.imgUrl}
                title={workExperience.imgTitle}
                alt={workExperience.imgAlt}
              />
            }
          />
        ))}
      </Section>
      <Section id="trainings" title="Fortbildungen" idx={counter++}>
        <SubSectionGrid articles={TRAININGS} />
      </Section>
      <Section
        id="samples"
        title="Arbeitsproben App & Full-Stack"
        idx={counter++}
      >
        <SubSectionPair
          article={
            <Article
              title="Flutter Shop App"
              dateStart="Juni 2024"
              paragraphs={[
                'Die Flutter Shop App enstand als Teil der Udemy Fortbildung "Lerne Flutter & Dart und erstelle native iOS & Android Apps"',
                "Sie ermöglicht es einen Nutzer zu registrieren, verfügbare Produkte anzuzeigen, eigene Produkte dem Markplatz verfügbar zu machen, Bestellungen zu tätigen, Produkte zu einer Merkliste hinzuzufügen und getätigte Bestellungen anzuzeigen.",
                "Die App selbst wurde mit Flutter in Dart programmiert. Für die Benutzer-Authentifizierung wird Googles Identity Toolkit API genutzt. Die Shop Daten werden in einer Google Firebase NoSQL Datenbank gespeichert.",
              ]}
            />
          }
          image={
            <Carousel
              className="carousel-flutter"
              showDots={true}
              slidesToSlide={1}
              responsive={{
                desktop: {
                  breakpoint: { max: 40000, min: 0 },
                  items: 1,
                },
              }}
            >
              {SHOP_ITEMS.map((shop_item) => (
                <img
                  key={shop_item.imgUrl}
                  src={shop_item.imgUrl}
                  alt={shop_item.alt}
                  title={shop_item.title}
                />
              ))}
            </Carousel>
          }
        />
        <SubSectionPair
          idx={1}
          article={
            <Article
              title="React Project Management Tool"
              dateStart="Oktober 2024"
              dateEnd="jetzt"
              paragraphs={[
                'Das Project Mangement Tool (PMT) entsteht als Lern-Projekt, motiviert durch die Udemy Fortbildung "Master modern React from beginner to advanced".',
                "PMT ermöglicht es einem Nutzer Projekte, Meilensteine und Aufgaben zu verwalten. Die Funktionalität ist in vier Hauptbereiche aufgeteilt: Aktive Sprints, Sprint Planer, Aufgabenbrowser und Projektübersicht. Übergeordnet ist es jederzeit möglich neue Projekte, Meilensteine oder Aufgaben zu erstellen.",
                "In Aktive Sprints kann der Nutzer zwischen auf aktiv gesetzten Sprints auswählen und Aufgabenfortschritte verwalten.",
                "Der Sprint Planer erlaubt es Sprints zu erstellen, Aufgaben den ausgewählten Sprints zuzuweisen und den Status des Sprints selbst von Offen über Aktiv auf Geschlossen zu setzen.",
                "Unabhängig vom Projekt-/Meilenstein-/Aufgabenzustands kann der Nutzer im Aufgabenbrowser die mit einem Projekt assoziierten Meilensteine und Aufgaben anzuzeigen, modifizieren oder löschen.",
                "Die Projektübersicht ermöglicht es Meilensteine und Aufgaben mehrerer Projekte übereinander entlang eines Zeitstrahls anzuzeigen.",
                "PMT ist eine Single Page Application, wird in JavaScript mit der React Library programmiert und mit einem node.js Server lokal betrieben. Aktuell gehen die Daten mit dem Verlassen der Sitzung verloren.",
              ]}
            />
          }
          image={
            <div className="mint-logo">
              <img
                src="./images/logoMint64.png"
                title="Logo Project Management Tool"
                alt="Minzblatt"
                style={{
                  backgroundColor: "#006F3D",
                }}
              />
              <p style={{ textAlign: "center", fontSize: "2rem" }}>Mint PMT</p>
            </div>
          }
        >
          <Carousel
            className="carousel-pmt"
            showDots={true}
            slidesToSlide={1}
            responsive={{
              desktop: {
                breakpoint: { max: 40000, min: 0 },
                items: 1,
              },
            }}
          >
            {PMT_ITEMS.map((pmt_item) => (
              <img
                key={pmt_item.imgUrl}
                src={pmt_item.imgUrl}
                alt={pmt_item.alt}
                title={pmt_item.title}
              />
            ))}
          </Carousel>
        </SubSectionPair>
      </Section>
      <Section id="skills" title="Fähigkeiten" idx={counter++}>
        <SubSectionFeatures features={SKILLS} />
      </Section>
      <Section id="technologies" title="Technologien" idx={counter++}>
        <SubSectionFeatures features={TECHNOLOGIES} />
      </Section>
      <Section id="tools" title="Werkzeuge" idx={counter++}>
        <SubSectionFeatures features={TOOLS} />
      </Section>
      <Section id="hobbies" title="Interessen" idx={counter++}>
        <SubSectionFeatures features={HOBBIES} />
      </Section>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;

function Hero({ idx }) {
  var isOdd = idx % 2;
  return (
    <section className={`${isOdd && "odd"}`}>
      <div className="px-4 py-5 text-center">
        <img
          id="thomas-avatar"
          className="d-block mx-auto mb-5"
          src="./images/thomas.jpg"
          alt="Thomas"
          width="180"
          height="180"
        />
        <h2 className="display-5 fw-bold">Hi.</h2>
        <div className="col-lg-6 mx-auto">
          <p className="lead">
            Ich bin Thomas, ein professioneller Software Engineer. Nach vielen
            spannenden Projekten und Jahren im Embedded Bereich hatte ich Lust
            auf etwas neues und habe mich in App- und Full-Stack-Entwicklung
            fortgebildet. Abseits von Bits und Bytes interessiere ich mich für
            Musik und Tanz.
          </p>
        </div>
      </div>
    </section>
  );
}

function Section({ id, title, idx, className, children }) {
  var isOdd = idx % 2;
  return (
    <section id={id} className={`${isOdd && "odd"} ${className}`}>
      <div className="container col-xxl-8 px-4">
        <div className="row flex-lg-row py-3">
          <h2>{title}</h2>
          {children}
        </div>
      </div>
    </section>
  );
}

function SubSectionPair({ article, image, idx, isLast, children }) {
  const isOdd = idx % 2 === 1;
  return (
    <div className={`sub-section row flex-lg-row ${isLast && "last"}`}>
      <div className="col-12 col-lg-6 justify-center">
        {isOdd ? image : article}
      </div>
      <div className="col-12 col-lg-6 justify-center">
        {isOdd ? article : image}
      </div>
      {children && <div className="child">{children}</div>}
    </div>
  );
}

function SubSectionGrid({ articles }) {
  return (
    <div className={`sub-section row flex-lg-row`}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {articles.map((article, idx) => (
          <div key={article.title} className="col-12 col-lg-6 justify-center">
            <Article
              key={article.title}
              className="tile"
              title={article.title}
              dateStart={article.dateStart}
              dateEnd={article.dateEnd}
              paragraphs={article.paragraphs}
              idx={idx}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function Article({ className, title, dateStart, dateEnd, paragraphs, idx }) {
  const isPrimary = idx !== undefined && idx % 3 === 0;
  const isSecondary = idx !== undefined && idx % 3 === 1;
  const isTertiary = idx !== undefined && idx % 3 === 2;
  return (
    <div
      className={`article ${className} ${isPrimary && "primary"} ${
        isSecondary && "secondary"
      } ${isTertiary && "tertiary"}`}
    >
      <h3 className="article-header">{title}</h3>
      <p className="article-time">
        {dateStart}
        {dateEnd !== undefined && ` - ${dateEnd}`}
      </p>
      {paragraphs.map((paragraph, idx) => (
        <p key={idx} className="article-text">
          {paragraph}
        </p>
      ))}
    </div>
  );
}

function SubSectionFeatures({ features }) {
  return (
    <div className={`sub-section row flex-lg-row`}>
      <div className="container px-4 pt-5">
        <ul className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          {features.map((feature) => (
            <Feature
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

function Feature({ title, description, icon }) {
  return (
    <li className="feature col">
      <div>{icon}</div>
      <h3 className="fs-2">{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function Navbar({ entries }) {
  function jumpToSection(e) {
    e.preventDefault();
    window.location.replace(e.target.hash);
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="./" onClick={jumpToSection}>
          Thomas' CV
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {entries.map((entry) => (
              <li key={entry.link} className="nav-item">
                <a
                  className="nav-link"
                  aria-current="page"
                  href={entry.link}
                  onClick={jumpToSection}
                >
                  {entry.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
