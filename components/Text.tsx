import ActiveLink from "./Sys/ActiveLink";

const Text: React.FC = () => {
  return (
    <div className="inblo">
      <ActiveLink href="/" activeClassName="topState">
        <a className="migiue Font aBlock">こやどMeeting</a>
      </ActiveLink>
    </div>
  );
};

export default Text;
