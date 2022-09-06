import { Navbar, Dropdown, Button, Link, Text, Avatar, useTheme } from "@nextui-org/react";
import { Layout } from "./Layout";
import { RootStateOrAny, useSelector } from 'react-redux';
import { icons } from "./icons";
import { FcLibrary } from "react-icons/fc";

export const NavbarComponent = () => {

    const { isAuthenticated } = useSelector((state: RootStateOrAny) => state.user);
    const { currentUser } = useSelector((state: RootStateOrAny) => state.user);
    const { displayName, photoUrl} = currentUser;

    // const darkMode = useDarkMode(false);

    const collapseItems = [
        "Inicio",
        "Categorias",
        "Productos",
        "Contacto",
    ];

    const { isDark } = useTheme();

    return (
        <Layout>
            <Navbar shouldHideOnScroll isBordered={isDark} variant="sticky">
                <Navbar.Brand>
                    <Navbar.Toggle showIn="sm" aria-label="toggle navigation" />
                <FcLibrary width={24} height={24} />
                    <Text b color="inherit" hideIn="xs">
                        Olympus Store
                    </Text>
                </Navbar.Brand>
                <Navbar.Content enableCursorHighlight hideIn="sm" variant="underline">       
                    <Navbar.Link href="#">Inicio</Navbar.Link>
                    <Navbar.Link href="#">Productos</Navbar.Link>
                    <Dropdown isBordered>
                        <Navbar.Item>
                            <Dropdown.Button
                                auto
                                light
                                css={{
                                    px: 0,
                                    dflex: "center",
                                    svg: { pe: "none" },
                                }}
                                iconRight={icons.chevron}
                                ripple={false}
                            >
                                Categorias
                            </Dropdown.Button>
                        </Navbar.Item>
                        <Dropdown.Menu
                            aria-label="ACME features"
                            css={{
                                $$dropdownMenuWidth: "340px",
                                $$dropdownItemHeight: "70px",
                                "& .nextui-dropdown-item": {
                                    py: "$4",
                                    // dropdown item left icon
                                    svg: {
                                        color: "$secondary",
                                        mr: "$4",
                                    },
                                    // dropdown item title
                                    "& .nextui-dropdown-item-content": {
                                        w: "100%",
                                        fontWeight: "$semibold",
                                    },
                                },
                            }}
                        >
                            <Dropdown.Item
                                key="autoscaling"
                                showFullDescription
                            // description="Encuentra los mejores productos de "
                            icon={icons.scale}
                            >
                                Basketball
                            </Dropdown.Item>
                            <Dropdown.Item
                                key="usage_metrics"
                                showFullDescription
                            // description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
                            icon={icons.activity}
                            >
                                Soccer
                            </Dropdown.Item>
                            <Dropdown.Item
                                key="production_ready"
                                showFullDescription
                            // description="ACME runs on ACME, join us and others serving requests at web scale."
                            icon={icons.flash}
                            >
                                Correr
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Navbar.Link href="#">Contacto</Navbar.Link>
                </Navbar.Content>

                {
                    isAuthenticated === true ?
                        (
                            <Navbar.Content
                                css={{
                                    "@xs": {
                                        w: "12%",
                                        jc: "flex-end",
                                    },
                                }}
                            >
                                <Dropdown placement="bottom-right">
                                    <Navbar.Item>
                                        <Dropdown.Trigger>
                                            <Avatar
                                                bordered
                                                as="button"
                                                color="secondary"
                                                size="md"
                                                // src={photoUrl}
                                                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                                            />
                                        </Dropdown.Trigger>
                                    </Navbar.Item>
                                    <Dropdown.Menu
                                        aria-label="User menu actions"
                                        color="secondary"
                                        onAction={(actionKey) => console.log({ actionKey })}
                                    >
                                        <Dropdown.Item key="profile" css={{ height: "$18" }}>
                                            <Text b color="inherit" css={{ d: "flex" }}>
                                                Signed in as
                                            </Text>
                                            <Text b color="inherit" css={{ d: "flex" }}>
                                                { displayName }
                                            </Text>
                                        </Dropdown.Item>
                                        <Dropdown.Item key="settings" withDivider>
                                            Mi Perfil
                                        </Dropdown.Item>
                                        <Dropdown.Item key="team_settings">Preferencias</Dropdown.Item>                                        
                                        <Dropdown.Item key="analytics" withDivider>
                                            Compras
                                        </Dropdown.Item>
                                        <Dropdown.Item key="system">Ayuda</Dropdown.Item>
                                        <Dropdown.Item key="logout" withDivider color="error">
                                            Log Out
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Navbar.Content>
                        )
                        :
                        (
                            <Navbar.Content>
                                <Navbar.Link color="inherit" href="#">
                                    Iniciar Sesión
                                </Navbar.Link>
                                <Navbar.Item>
                                    <Button auto flat as={Link} href="#">
                                        Registrarse
                                    </Button>
                                </Navbar.Item>
                            </Navbar.Content>
                        )
                }



                <Navbar.Collapse>
                    {collapseItems.map((item, index) => (
                        <Navbar.CollapseItem key={item}>
                            <Link
                                color="inherit"
                                css={{
                                    minWidth: "100%",
                                }}
                                href="#"
                            >
                                {item}
                            </Link>
                        </Navbar.CollapseItem>
                    ))}
                </Navbar.Collapse>
            </Navbar>
        </Layout>
    )
}
