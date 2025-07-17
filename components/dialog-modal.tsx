import React, { useEffect, useState } from "react";
import {
  Keyboard,
  Platform,
  StyleSheet,
  EventSubscription,
  ViewStyle,
} from "react-native";
import { useMedia } from "~/lib/useMedia";
import { Text } from "~/components/ui/text";
import { XIcon } from "lucide-react-native";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Pressable } from "react-native";

type DialogModalProps = {
  title: string;
  description?: string;
  trigger?: React.ReactNode;
  children: React.ReactNode;
  isOpen: boolean;
  onOpenChange: (value: boolean) => void;
};

export function DialogModal({
  title,
  description,
  trigger,
  children,
  isOpen,
  onOpenChange,
}: DialogModalProps) {
  const media = useMedia();
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  useEffect(() => {
    let subShow: EventSubscription | undefined;
    let subHide: EventSubscription | undefined;

    if (Platform.OS === "ios") {
      subShow = Keyboard.addListener("keyboardDidShow", (e) => {
        setKeyboardHeight(e.endCoordinates.height);
      });

      subHide = Keyboard.addListener("keyboardDidHide", () => {
        setKeyboardHeight(0);
      });
    }

    return () => {
      subShow?.remove();
      subHide?.remove();
    };
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}

      <DialogContent
        style={[
          styles.dialogContent,
          {
            paddingBottom: keyboardHeight + 24,
            width: media.lg ? 400 : "100%",
          },
        ]}
      >
        <DialogHeader>
          <DialogTitle>
            <Text>{title}</Text>
          </DialogTitle>

          {description && (
            <DialogDescription>
              <Text>{description}</Text>
            </DialogDescription>
          )}
        </DialogHeader>

        {children}

        <DialogClose asChild>
          <Pressable style={styles.closeButton}>
            <XIcon size={24} />
          </Pressable>
        </DialogClose>

        {/* Optional Footer if you want it */}
        {/* <DialogFooter>
          <DialogClose asChild>
            <Button>
              <Text>Close</Text>
            </Button>
          </DialogClose>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
}

const styles = StyleSheet.create({
  dialogContent: {
    borderRadius: 16,
    padding: 16,
    // Shadow for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // Elevation for Android
    elevation: 4,
  } as ViewStyle,

  closeButton: {
    position: "absolute",
    top: 8,
    right: 8,
  },
});
