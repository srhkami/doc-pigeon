import {useRef, useEffect, type ReactNode} from "react";
import ModalHeader from "./ModalHeader.tsx";
import ModalTitle from "./ModalTitle.tsx";
import ModalBody from "./ModalBody.tsx";

type Props = {
  isShow: boolean, // 決定是否顯示
  onHide: () => void, // 關閉的函數
  closeButton?: boolean, // 關閉按鈕（預設否）
  backdrop?: boolean, // 可點擊背景關閉（預設是）
  children: ReactNode,
}

function Modal({isShow, onHide, closeButton = false, backdrop = true, children}: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isShow) {
      if (!dialog.open) dialog.showModal();
    } else {
      if (dialog.open) dialog.close();
    }
  }, [isShow]);

  return (
    <dialog ref={dialogRef} className="modal" onClose={onHide}>
      <div className="modal-box">
        {closeButton &&
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={onHide}>✕</button>
        }
        {children}
      </div>
      <form method="dialog" className={backdrop ? "modal-backdrop" : ""}>
        <button>close</button>
      </form>
    </dialog>
  );
}

Modal.Header = ModalHeader;
Modal.Title = ModalTitle;
Modal.Body = ModalBody;

export default Modal;