import { useContext } from "react";
import { PopoverContext } from "./PopoverContext";

interface Props {
  children: (isShow: boolean, onClose: () => void) => JSX.Element;
}

const PopoverContent = ({ children }: Props) => {
  const { isMounted, setIsMounted } = useContext(PopoverContext);

  const onClose = () => {
    setIsMounted(false);
  };

  return children(isMounted, onClose);
};

PopoverContent.displayName = "Popover.PopoverContent";

export default PopoverContent;
