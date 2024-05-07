import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import styles from "./index.module.css";
import ProcessSvg from "@site/static/img/undraw_process_re_gws7.svg";

function HomepageHeader() {
  // const { siteConfig } = useDocusaurusContext(); this way we can use the config data or envs
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className={clsx(styles.bannerContainer, "container")}>
        <ProcessSvg height={"500px"} />
        <div className={styles.bannerContentDiv}>
          <Heading as="h1" className="hero__title">
            Formsflow.ai
          </Heading>
          <p className="hero__subtitle">
            Low Code Platform to build Forms, Approval workflows, and
            Automations swiftly.
          </p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
   return (
    <Layout
      title={`Formsflow.ai`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
    </Layout>
  );
}
