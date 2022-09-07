import { Navbar, Dropdown, Button, Link, Text, Avatar, useTheme } from "@nextui-org/react";
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { icons } from "./icons";
import { FcLibrary } from "react-icons/fc";
import { ShoppingCart } from "../ShoppingCart";
import { useNavigate } from "react-router-dom";
import { LogoutAction } from '../../../redux/actions/auth';

export const NavbarComponent = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { quantity } = useSelector((state: RootStateOrAny) => state.cart);
    const { isAuthenticated } = useSelector((state: RootStateOrAny) => state.user);
    const { currentUser } = useSelector((state: RootStateOrAny) => state.user);
    const { displayName, photoURL } = currentUser;

    console.log(photoURL);

    const handleLogout = () => {
        dispatch(LogoutAction());
        navigate("/");
    }

    const collapseItems = [
        {
            category: "Inicio",
            path: "/"
        },
        {
            category: "Basketball",
            path: "/products/basketball"
        },
        {
            category: "Soccer",
            path: "/products/soccer"
        },
        {
            category: "Running",
            path: "/products/running"
        },
    ];

    const { isDark } = useTheme();

    return (

        <Navbar shouldHideOnScroll isBordered={isDark} variant="sticky">
            <Navbar.Brand>
                <Navbar.Toggle showIn="sm" aria-label="toggle navigation" />
                <FcLibrary width={24} height={24} />
                <Text b color="inherit" hideIn="xs">
                    Olympus Store
                </Text>
            </Navbar.Brand>
            <Navbar.Content enableCursorHighlight hideIn="sm" variant="underline">
                <Navbar.Link href="/">Inicio</Navbar.Link>
                {/* <Navbar.Link href="#">Productos</Navbar.Link> */}
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
                            <Link
                                href="/products/basketball"
                                key="soccer"
                                css={{
                                    minWidth: "100%",
                                    paddingTop: "24px",
                                    paddingBottom: "24px"
                                }}
                            >
                                Basketball
                            </Link>
                        </Dropdown.Item>
                        <Dropdown.Item
                            key="usage_metrics"
                            showFullDescription
                            icon={icons.activity}
                        >
                            <Link
                                href="/products/soccer"
                                key="soccer"
                                css={{
                                    minWidth: "100%",
                                    paddingTop: "24px",
                                    paddingBottom: "24px"
                                }}
                            >
                                Soccer
                            </Link>                            
                        </Dropdown.Item>
                        <Dropdown.Item
                            key="production_ready"
                            showFullDescription
                            icon={icons.flash}
                        >
                            <Link
                                href="/products/running"
                                key="soccer"
                                css={{
                                    minWidth: "100%",
                                    paddingTop: "24px",
                                    paddingBottom: "24px"
                                }}
                            >
                                Running
                            </Link>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                {/* <Navbar.Link href="#">Contacto</Navbar.Link> */}
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
                            <Link
                                href="/cart"
                                key="running"
                            >
                                <ShoppingCart items={quantity} />
                            </Link>
                            <Dropdown placement="bottom-right">
                                <Navbar.Item>
                                    <Dropdown.Trigger>                                    
                                        <Avatar
                                            bordered
                                            as="button"
                                            color="primary"
                                            size="md"
                                            src={photoURL !== undefined ? (photoURL) : ("https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/OOjs_UI_icon_userAvatar.svg/1024px-OOjs_UI_icon_userAvatar.svg.png")}
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
                                            Has iniciado como
                                        </Text>
                                        <Text b color="inherit" css={{ d: "flex" }}>
                                            {displayName}
                                        </Text>
                                    </Dropdown.Item>
                                    <Dropdown.Item key="settings" withDivider>
                                    <Link
                                href="/profile"
                                key="soccer"
                                css={{
                                    minWidth: "100%",
                                }}
                            >
                                        Mi Perfil
                            </Link>
                                    </Dropdown.Item>
                                    {/* <Dropdown.Item key="team_settings">Preferencias</Dropdown.Item>
                                    <Dropdown.Item key="analytics" withDivider>
                                        Compras
                                    </Dropdown.Item>
                                    <Dropdown.Item key="system">Ayuda</Dropdown.Item> */}
                                    <Dropdown.Item key="logout" withDivider color="error">
                                        <button onClick={handleLogout}>Cerrar Sesión</button>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Navbar.Content>
                    )
                    :
                    (
                        <Navbar.Content>
                            <Navbar.Link color="inherit" href="/auth/login">
                                Iniciar Sesión
                            </Navbar.Link>
                            <Navbar.Item>
                                <Button auto flat as={Link} href="/auth/signup">
                                    Registrarse
                                </Button>
                            </Navbar.Item>
                        </Navbar.Content>
                    )
            }
            <Navbar.Collapse>
                {collapseItems.map((item, index) => (
                    <Navbar.CollapseItem key={item.category}>
                        <Link
                            color="inherit"
                            css={{
                                minWidth: "100%",
                            }}
                            href={item.path}
                            key={index}
                        >
                            {item.category}
                        </Link>
                    </Navbar.CollapseItem>
                ))}
            </Navbar.Collapse>
        </Navbar>

    )
}
