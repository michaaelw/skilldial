import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { DialogModal } from "./dialog-modal";
import { Column } from "./ui/column";
import { Text } from "./ui/text";
import { Row } from "./ui/row";
import { DialogClose } from "./ui/dialog";
import { Button } from "./ui/button";

type Props = {};

export type AlertRef = {
  show: (title: string, detail: string) => Promise<void>;
};

export const AlertDialog = forwardRef<AlertRef, Props>((_, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");

  const resolverRef = useRef<{
    resolve: (value: void | PromiseLike<void>) => void;
    reject?: (reason?: any) => void;
  } | null>(null);

  useImperativeHandle(ref, () => ({
    show: (newTitle: string, newDetail: string) => {
      setTitle(newTitle);
      setDetail(newDetail);
      setIsOpen(true);

      return new Promise<void>((resolve, reject) => {
        resolverRef.current = { resolve, reject };
      });
    },
  }));

  const handleClose = () => {
    setIsOpen(false);
    if (resolverRef.current) {
      resolverRef.current.resolve();
      resolverRef.current = null;
    }
  };

  return (
    <DialogModal title={title} isOpen={isOpen} onOpenChange={setIsOpen}>
      <Column style={{ gap: 16, paddingTop: 20 }}>
        <Text>{detail}</Text>
        <Row style={{ justifyContent: "flex-end" }}>
          <DialogClose asChild>
            <Button onPress={handleClose} style={{ paddingHorizontal: 16 }}>
              <Text>Continue</Text>
            </Button>
          </DialogClose>
        </Row>
      </Column>
    </DialogModal>
  );
});

AlertDialog.displayName = "AlertDialog";
