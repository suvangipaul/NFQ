import React from "react";
import { NewsBG, Violin, WireKid, RedApples, TowerThumb } from "../assets";
import Image from "next/image";

const News = () => {
  return (
    <div className="news-page">
      <div className="bg-relative">
        <Image className="news-bg" src={NewsBG} alt="" width={50} height={15} />
        <div className="news-overlays"></div>
        <div className="news-overlays"></div>
        <div className="news-overlays"></div>
        <div className="news-overlays"></div>
      </div>
      <div className="news-header-content">
        <h1>This Pride month, uplift LGBTQ+ lives.</h1>
        <p>The Coordinated Attack on Trans Student Athletes</p>
      </div>
      <div className="article-section">
        <div className="new-articles">
          <div className="main">
            <Image
              className="new-thumb"
              src={WireKid}
              alt=""
              width={500}
              height={500}
            />
            <p>January 2, 2022 — 1.29pm</p>
            <h1>
              Debunking Myths About Trans Athletes. &rdquo;I just want to run&ldquo; says
              Lindsay Hecox
            </h1>
            <p className="new-desp">
              Transgender athletes want to participate in school sports for the
              same reason as anybody else: to find a sense of belonging and
              social engagement, to be a part of a team, and to challenge
              themselves. But states and schools across the country are trying
              to exclude trans people from enjoying the benefits of sports on
              equal terms with their cisgender peers. Not only do these proposed
              laws discriminate against trans youth in ways that compromise
              their health, social and emotional development, and safety, they
              also raise a host of privacy concerns.
            </p>
            <div className="read-more">
              <a
                href="https://www.aclu.org/news/lgbtq-rights/the-coordinated-attack-on-trans-student-athletes"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>READ MORE</p>
              </a>
            </div>
            <h1>
              {" "}
              &ldquo;Freedom of expression is the matrix, the indispensable
              condition, of nearly every other form of freedom.&rdquo;
            </h1>
            <Image
              className="new-thumb"
              src={Violin}
              alt=""
              width={400}
              height={300}
            />
          </div>
          {/*middle-col*/}
          <div className="news-col main">
            <p>COVID19 Fieldnotes from our Grantees</p>
            <h1>
              Freedom of speech, the press, association, assembly, and petition:
            </h1>

            <Image
              className="new-thumb"
              src={RedApples}
              alt=""
              width={500}
              height={500}
            />
            <p>November 10, 2022 — 1.29pm</p>
            <p className="new-desp">
              Almost a century later, these battles have taken on new forms, but
              they persist. The ACLU&sbquo; s Speech, Privacy, and Technology
              Project continues to champion freedom of expression in its myriad
              forms — whether through protest, media, online speech, or the arts
              — in the face of new threats. For example, new avenues for
              censorship have arisen alongside the wealth of opportunities for
              speech afforded by the Internet. Over the years, the ACLU has
              represented or defended individuals engaged in some truly
              offensive speech. We have defended the speech rights of
              communists, Nazis, Ku Klux Klan members, accused terrorists.
            </p>
            <div className="read-more">
              <a
                href="https://www.aclu.org/issues/free-speech"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>READ MORE</p>
              </a>
            </div>
            <h1>News and Commentary</h1>
            <p className="new-desp">
              In January 2022, Gabino Medina, who was held at an U.S.
              Immigration and Customs Enforcement (ICE) detention facility in
              Seneca County, Ohio, tried to reach me and his immigration
              attorney several times, but his calls wouldn&sbquo; t go through.
              Gabino informed facility officials that he was having issues with
              his phone account, but was told not to worry — that he would soon
              be transferred to another facility and his account would be up and
              running again soon. A few days later, I finally received a call
              from Gabino. This time, he was in Mexico.
            </p>
          </div>
          {/*right-col*/}
          <div className="main">
            <h1>
              Research shows that legal representation can make an enormous
              difference
            </h1>
            <p className="new-desp">
              A recent ACLU research report, &ldquo;No Fighting Chance:
              ICE&sbquo; s Denial of Access to Counsel in U.S. Immigration
              Detention Centers,&rdquo; documents pervasive barriers to counsel
              in ICE detention facilities across the country, where countless
              people, like Gabino, struggle to exercise their basic rights.
            </p>
            <div className="read-more">
              <a
                href="https://www.aclu.org/news/immigrants-rights/without-access-to-counsel-detained-immigrants-face-increased-risks-of-prolonged-detention-and-unlawful-deportation"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>READ MORE</p>
              </a>
            </div>
            <Image
              className="new-thumb"
              src={TowerThumb}
              alt=""
              width={500}
              height={500}
            />
            <p>November 10, 2022 — 1.29pm</p>
            <p className="new-desp">
              Research shows that legal representation can make an enormous
              difference in the outcome of detained immigrants&sbquo; cases.
              Detained immigrants with legal representation are 10 times more
              likely to win their immigration cases compared to those who lack
              counsel, and are seven times more likely to be released from
              custody than those without counsel. Yet if they can&sbquo; t
              actually communicate with attorneys, their constitutional right to
              due process is rendered meaningless.
            </p>
            <div className="read-more">
              <a
                href="https://www.aclu.org/news/immigrants-rights/without-access-to-counsel-detained-immigrants-face-increased-risks-of-prolonged-detention-and-unlawful-deportation"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>READ MORE</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
