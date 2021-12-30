import ActiveLink from "./Sys/ActiveLink";

const Text: React.FC = () => {
  return (
    <div className="migiue inblo">
      <ActiveLink href="/" activeClassName="headerState">
        <a>こやどの会 ミーティング</a>
      </ActiveLink>
    </div>
  );
};

export default Text;
