import { Navbar, Dropdown, Button, Link, Text, Avatar, useTheme } from "@nextui-org/react";
import { Link as LinkRouter, useNavigate } from 'react-router-dom';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { icons } from "./icons";
import { ShoppingCart } from "../ShoppingCart";
import { logout } from '../../../redux/actions/auth';
import { useAuth } from '../../../firebase/useAuth';

export const NavbarComponent = () => {

    const currentUser = useAuth();

    const dispatch = useDispatch();
    const navigate = useNavigate();
<<<<<<< Updated upstream
=======
    const { quantity } = useSelector((state: RootStateOrAny) => state.cart);
    const { isAuthenticated } = useSelector((state: RootStateOrAny) => state.user);
    const { currentUser } = useSelector((state: RootStateOrAny) => state.user);
>>>>>>> Stashed changes

    const { quantity } = useSelector((state: RootStateOrAny) => state.cart);
    const { isAuthenticated } = useSelector((state: RootStateOrAny) => state.user);

    const handleLogout = () => {
        dispatch(logout());
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
<<<<<<< Updated upstream
=======
                <img src="https://res.cloudinary.com/dhyxqmnua/image/upload/c_scale,w_24/v1666391173/Olympus/logo512_fvobug.png" width={24} height={24} alt="" />
>>>>>>> Stashed changes
    <Text b color="inherit" hideIn="xs">
        Olympus Store
    </Text>
            </Navbar.Brand >
    <Navbar.Content enableCursorHighlight hideIn="sm" variant="underline">
        <Navbar.Link href="/">Inicio</Navbar.Link>
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
                                src={(currentUser?.photoURL) ? currentUser?.photoURL : "https://res.cloudinary.com/dhyxqmnua/image/upload/v1642722284/Olympus/blank-profile-picture-973460_qb0gmg.svg"}
                            />
                        </Dropdown.Trigger>
                    </Navbar.Item>
                    <Dropdown.Menu
                        aria-label="User menu actions"
                        color="secondary"
                    >
                        <Dropdown.Item key="profile" css={{ height: "$18" }}>
                            <Text b color="inherit" css={{ d: "flex" }}>
                                Has iniciado como
                            </Text>
                            <Text b color="inherit" css={{ d: "flex" }}>
                                {currentUser?.displayName}
                            </Text>
                        </Dropdown.Item>
                        <Dropdown.Item key="settings" withDivider color="primary">
                            <Link
                                href="/profile"
                                key="soccer"
                                css={{
                                    minWidth: "100%",
                                    color: "#1a29c9",
                                    fontWeight: "$semibold"
                                }}
                            >
                                Mi Perfil
                            </Link>
                        </Dropdown.Item>
                        {/* <Dropdown.Item key="favorites" withDivider color="secondary">
                                        <Link
                                            href="/favorites"
                                            key="soccer"
                                            css={{
                                                minWidth: "100%",
                                                color: "#e62c17",
                                                fontWeight: "$semibold"
                                            }}
                                        >
                                            Favoritos
                                        </Link>
                                    </Dropdown.Item> */}
                        <Dropdown.Item key="purchases" withDivider color="warning">
                            <LinkRouter
                                to="/purchases"
                                key="purchasesLinkRouter"
                                className="pt-2 pb-2 w-full"
                            >
                                <button disabled={false} className="w-full text-left disabled:opacity-35 disabled:cursor-not-allowed text-yellow-800 font-semibold">Mis Compras</button>
                            </LinkRouter>
                        </Dropdown.Item>
                        <Dropdown.Item key="logout" withDivider color="error">
                            <button className="font-semibold" onClick={handleLogout}>Cerrar Sesión</button>
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
        </Navbar >

    )
}
