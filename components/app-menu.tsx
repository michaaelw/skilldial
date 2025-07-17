import { CreditCard, Menu, MoonIcon, Settings } from "lucide-react-native";
import * as React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Text } from "~/components/ui/text";
import { Switch } from "./ui/switch";
import { Row } from "./ui/row";
import { useSelector } from "@legendapp/state/react";
import { useThemeStore } from "./theme-toggle";
import { Link, router } from "expo-router";

export function AppMenu() {
  const themeStore$ = useThemeStore();
  const currentScheme = useSelector(themeStore$.currentScheme);
  const isDark = currentScheme === "dark";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Menu className="dark:text-white" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        insets={{ top: 8, bottom: 8, right: 8, left: 0 }}
        className="w-64 native:w-72"
      >
        <DropdownMenuGroup>
          <DropdownMenuItem
            onPress={() => {
              router.push("/settings");
            }}
          >
            <Settings size={20} className="dark:text-white" />
            <Text>Settings</Text>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCard size={20} className="dark:text-white" />
            <Text>Billing</Text>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuItem className="justify-between">
          <Row className="gap-2">
            <MoonIcon size={20} className="dark:text-white" />
            <Text>Dark Mode</Text>
          </Row>
          <Switch
            checked={isDark}
            onCheckedChange={(value) =>
              themeStore$.currentScheme.set(value ? "dark" : "light")
            }
          />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
