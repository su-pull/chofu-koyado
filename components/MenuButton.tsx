type BoolProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MenuButton: React.FC<BoolProps> = ({ open, setOpen }) => {
  return (
    <div className="Line">
      <div aria-expanded={open} onClick={() => setOpen(!open)} aria-label="Toggle mobile navigation menu" className="Humb">
        <span />
        <span />
      </div>
    </div>
  );
};

export default MenuButton;
