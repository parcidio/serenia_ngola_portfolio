import Image from "next/image";

const Tool = ({ image, styles, tooltipText }) => {
  return (
    <div className={styles.tools__tool}>
      <Image src={image} width={40} height={40} alt={`${image}`} />
      <span className={styles.tools__tooltip}>{tooltipText}</span>
    </div>
  );
};

export default Tool;
