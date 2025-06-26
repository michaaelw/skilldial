import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { DialogModal } from './DialogModal';
import { Column } from './Column';
import { Text } from './Text';
import { Row } from './Row';
import * as DialogPrimitive from '@rn-primitives/dialog';
import { Button } from './Button';

type Props = {};

export type AlertRef = {
  show: (title: string, detail: string) => Promise<void>;
};

export const AlertDialog = forwardRef<AlertRef, Props>((_, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');

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
        <Row style={{ justifyContent: 'flex-end' }}>
          <DialogPrimitive.Close asChild>
            <Button title="Continue" onPress={handleClose} style={{ paddingHorizontal: 16 }} />
          </DialogPrimitive.Close>
        </Row>
      </Column>
    </DialogModal>
  );
});

AlertDialog.displayName = 'AlertDialog';
