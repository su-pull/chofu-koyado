import ActiveLink from "components/Sys/ActiveLink";

const Text: React.FC = () => {
  return (
    <div>
      <div className="topText inblo">
        <ActiveLink href="/" activeClassName="">
          <a id="top">ちょうふのこやど</a>
        </ActiveLink>
      </div>
    </div>
  );
};

export default Text;
