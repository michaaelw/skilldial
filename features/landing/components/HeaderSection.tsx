import { Button } from '@/components/Button';
import { Cube } from '@/components/icons/Cube';
import { Row } from '@/components/Row';
import { Text } from '@/components/Text';
import { useTheme } from '@/components/ThemeProvider';
import { useAuth } from '@/features/auth/AuthContext';
import { alignCenter, gap8 } from '@/styles';
import { Show } from '@legendapp/state/react';
import { Link, router } from 'expo-router';
import { Check, CreditCardIcon, Menu, MoonIcon, SettingsIcon } from 'lucide-react-native';
import React, { useEffect } from 'react';
import { StyleSheet, Switch, View, ViewStyle } from 'react-native';
import * as DropdownMenuPrimitive from '@rn-primitives/dropdown-menu';

const INDICATOR_STYLE: ViewStyle = {
  position: 'absolute',
  right: 0,
  top: 0,
};

export function HeaderSection() {
  const { theme, media } = useTheme();
  const { user } = useAuth();

  return (
    <View style={styles.header}>
      <Row style={[gap8, alignCenter]}>
        <Link href="/">
          <Row style={[gap8, alignCenter]}>
            <Cube size={24} color={theme.colors.typography}></Cube>
            <Text style={styles.logo}>SkillDial</Text>
          </Row>
        </Link>

        <Show if={media.md}>
          <Row style={styles.navLinks}>
            <Text style={styles.link}>Home</Text>
            <Text style={styles.link}>Pricing</Text>
          </Row>
        </Show>
      </Row>
      <Row style={[gap8]}>
        <Show if={!user} else={<Button variant="ghost" icon={<DropdownMenu />}></Button>}>
          <Button variant="ghost" title="Login" onPress={() => router.push('/login')}></Button>

          <Button
            title="Sign Up"
            variant="outline"
            onPress={() => router.push('/create-account')}></Button>
        </Show>
      </Row>
    </View>
  );
}

function DropdownMenu() {
  const { theme, setCurrentScheme, currentScheme } = useTheme();

  const [checked, setChecked] = React.useState(currentScheme === 'dark');

  useEffect(() => {
    setCurrentScheme(checked ? 'dark' : 'light');
  }, [checked]);

  return (
    <DropdownMenuPrimitive.Root>
      <DropdownMenuPrimitive.Trigger>
        <Menu color={theme.colors.typography}></Menu>
      </DropdownMenuPrimitive.Trigger>

      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Overlay style={styles.overlay}>
          <DropdownMenuPrimitive.Content
            style={[{ backgroundColor: theme.colors.card }, styles.content]}>
            <DropdownMenuPrimitive.Item style={styles.item}>
              <SettingsIcon size={20} color={theme.colors.typography} />
              <Text style={styles.itemText}>Settings</Text>
            </DropdownMenuPrimitive.Item>
            <DropdownMenuPrimitive.Item style={styles.item}>
              <CreditCardIcon color={theme.colors.typography} size={20} />
              <Text style={styles.itemText}>Billing</Text>
            </DropdownMenuPrimitive.Item>

            <DropdownMenuPrimitive.CheckboxItem
              style={styles.item}
              checked={checked}
              onCheckedChange={setChecked}
              closeOnPress={false}>
              <MoonIcon color={theme.colors.typography} size={20} />
              <Text style={styles.itemText}>Dark Mode</Text>
              <Switch
                value={checked}
                trackColor={{ true: '#222', false: '#AAA' }}
                activeThumbColor={theme.colors.white}
              />
            </DropdownMenuPrimitive.CheckboxItem>
            <DropdownMenuPrimitive.Separator />
          </DropdownMenuPrimitive.Content>
        </DropdownMenuPrimitive.Overlay>
      </DropdownMenuPrimitive.Portal>
    </DropdownMenuPrimitive.Root>
  );
}

const styles = StyleSheet.create({
  overlay: StyleSheet.absoluteFillObject,

  content: {
    minWidth: 180,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,

    /* iOS shadow */
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,

    /* Android shadow */
    elevation: 8,
  },

  item: { flexDirection: 'row', gap: 8, alignItems: 'center' },
  itemText: { fontSize: 20 },

  container: { flex: 1 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
  },
  logo: { fontWeight: 'bold', fontSize: 18 },
  link: {
    textDecorationLine: 'none',
    fontSize: 18,
  },
  navLinks: { paddingLeft: 32, flexDirection: 'row', gap: 12 },
});
