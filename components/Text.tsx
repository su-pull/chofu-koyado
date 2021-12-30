import ActiveLink from "./Sys/ActiveLink";

const Text: React.FC = () => {
  return (
    <div className="inblo">
      <ActiveLink href="/" activeClassName="ListState">
        <a className="migiue">こやどの会 ミーティング</a>
      </ActiveLink>
    </div>
  );
};

export default Text;
