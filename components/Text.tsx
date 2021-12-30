import ActiveLink from "./Sys/ActiveLink";

const Text: React.FC = () => {
  return (
    <div className="migiue inblo">
      <ActiveLink href="/" activeClassName="">
        <a>こやどの会ミーティングプロジェクト</a>
      </ActiveLink>
    </div>
  );
};

export default Text;
