import type { NextPage } from "next";

export type WebinarType = {
  className?: string;
};

const Webinar: NextPage<WebinarType> = ({ className = "" }) => {
  return <section>dsd</section>;
};

export default Webinar;
