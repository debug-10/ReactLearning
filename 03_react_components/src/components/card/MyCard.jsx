import "./MyCard.css";

const MyCard = ({ header, body, footer }) => {
  return (
    <div className="my-card">
      <div className="my-card-header">{header}</div>
      <div className="my-card-body">{body}</div>
      <div className="my-card-footer">{footer}</div>
    </div>
  );
};

export default MyCard;
