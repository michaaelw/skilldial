import { EventSubscription, Keyboard, Platform, StyleSheet } from 'react-native';
import { Text } from './Text';
import { useTheme } from './ThemeProvider';
import * as DialogPrimitive from '@rn-primitives/dialog';
import { XIcon } from 'lucide-react-native';
import React, { useEffect, useState } from 'react';

type DialogModalProps = {
  title: string;
  description?: string;
  trigger?: React.ReactNode;
  children: React.ReactNode;
  isOpen: boolean;
  onOpenChange: (value: boolean) => void;
};

export function DialogModal({
  trigger,
  children,
  title,
  description,
  isOpen,
  onOpenChange,
}: DialogModalProps) {
  const { theme, media } = useTheme();

  const [keyboardHeight, setKeyboardHeight] = useState(0);

  useEffect(() => {
    let subShow: EventSubscription;
    let subHide: EventSubscription;

    if (Platform.OS === 'ios') {
      subShow = Keyboard.addListener('keyboardDidShow', (e) => {
        setKeyboardHeight(e.endCoordinates.height);
      });

      subHide = Keyboard.addListener('keyboardDidHide', (e) => {
        setKeyboardHeight(e.endCoordinates.height);

        setKeyboardHeight(0);
      });
    }

    return () => {
      subShow?.remove();
      subHide?.remove();
    };
  }, []);

  return (
    <DialogPrimitive.Root open={isOpen} onOpenChange={onOpenChange}>
      {Boolean(trigger) ? (
        <DialogPrimitive.Trigger asChild>{trigger}</DialogPrimitive.Trigger>
      ) : null}

      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay
          style={{
            ...styles.overlay,
            alignItems: media.lg ? 'center' : undefined,
            justifyContent: Platform.OS === 'web' ? 'center' : 'flex-end',
          }}>
          <DialogPrimitive.Content
            style={[
              styles.content,
              {
                backgroundColor: theme.colors.card,
                width: media?.lg ? 400 : '100%',
                paddingBottom: keyboardHeight + 24,
              },
            ]}>
            <DialogPrimitive.Title>
              <Text variant="h3">{title || 'Title'}</Text>
            </DialogPrimitive.Title>

            {Boolean(description) && (
              <DialogPrimitive.Description>
                <Text>Dialog description.</Text>
              </DialogPrimitive.Description>
            )}

            {children}

            <DialogPrimitive.Close style={styles.closeButton}>
              <XIcon size={24} color={theme.colors.typography} />
            </DialogPrimitive.Close>
          </DialogPrimitive.Content>
        </DialogPrimitive.Overlay>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,

    justifyContent: 'flex-end',
  },
  content: {
    backgroundColor: 'white',
    padding: 16,
    paddingBottom: 0,
    borderRadius: 16,
    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // Android shadow
    elevation: 4,
  },
  closeButton: {
    position: 'absolute',

    top: 4,
    right: 4,
  },
});
