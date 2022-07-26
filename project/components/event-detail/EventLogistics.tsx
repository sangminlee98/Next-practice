import AddressIcon from "../icons/AdressIcon";
import DateIcon from "../icons/DateIcon";
import LogisticsItem from "./LogisticsItem";
import styles from "./EventLogistics.module.css";
import Image from "next/image";

interface IEventLogisticsProps {
  date: string;
  address: string;
  image: string;
  imageAlt: string;
}
function EventLogistics(props: IEventLogisticsProps) {
  const { date, address, image, imageAlt } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const addressText = address.replace(", ", "\n");

  return (
    <section className={styles.logistics}>
      <div className={styles.image}>
        <Image src={`/${image}`} width="100%" height="100%" alt={imageAlt} />
      </div>
      <ul className={styles.list}>
        <LogisticsItem icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
}

export default EventLogistics;
