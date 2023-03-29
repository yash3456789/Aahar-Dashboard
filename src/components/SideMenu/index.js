import { Menu} from 'antd';
import { useNavigate } from 'react-router-dom';

const SideMenu = () => {
    const navigate = useNavigate();

    const MenuItems = [
        {
            key: "/",
            label: 'Orders'
        },
        {
            key: "menu",
            label: 'Menu'
        },
        {
            key: "order-history",
            label: "Order History",
        },
        {
            key: "settings",
            label: "Settings",
          }
    ];

    return (
        <Menu items={MenuItems} onClick={(MenuItem) => navigate(MenuItem.key)}/>
    )
};

export default SideMenu;