import thumsUp from "../../assets/thumbs-up.webp";

interface Props {
  rating: number;
}
const Emoji = ({ rating }: Props) => {
  let rate = null;
  if (rating) {
    rate = (
      <img
        style={{ width: "25px", height: "25px", marginTop: "10px" }}
        src={thumsUp}
        alt="recommended"
      />
    );
  }
  return <>{rate}</>;
};

export default Emoji;
