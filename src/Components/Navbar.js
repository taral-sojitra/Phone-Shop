import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Components/style/Navbar.css';
import { FaShoppingBag, FaUser, FaTimes, FaBars } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';
import Badge from '@material-ui/core/Badge';
import { useSelector } from 'react-redux';
import { MdCompareArrows } from 'react-icons/md';
const Navbar = () => {

    const [click, setclick] = useState(false)
    const handleClick = () => setclick(!click);
    const closeMenu = () => setclick(false);

    const get_item_number = useSelector(state => state.DefaultReducer.totalItem);
    console.log(get_item_number);
    const get_wishlist_number = useSelector(state => state.DefaultReducer.WishList);
    console.log(get_wishlist_number.length);
    const get_compare_item = useSelector(state => state.DefaultReducer.Compare);


    return (
        <>
            <div className="menubar">
                <div className="nav_bar container">
                    <div className="menu_icon" onClick={handleClick}>{click ? <FaTimes /> : <FaBars />}</div>
                    <div className="logo">
                        <Link to="/" className="nav_logo">Phonewale</Link>
                    </div>
                    <div className={click ? 'nav_bar_item active' : 'nav_bar_item'}>
                        <ul>
                            <li><Link to="/" onClick={closeMenu} className="nav_link">Home</Link></li>
                            <li><Link to="/" onClick={closeMenu} className="nav_link">Account</Link></li>
                        </ul>
                    </div>
                    <div className="badge">
                        <Link to="/card" className="card_icon">
                            <Badge badgeContent={get_item_number} color="secondary" className="icon_1">
                                <FaShoppingBag />
                            </Badge>
                        </Link>
                        <Link to="/wishlist" className="card_icon">
                            <Badge badgeContent={get_wishlist_number.length} color="secondary" className="icon_2">
                                <FiHeart />
                            </Badge>
                        </Link>
                        <Link to="/compare_product" className="card_icon">
                            <Badge badgeContent={get_compare_item.length} color="secondary" className="icon_3">
                                < MdCompareArrows />
                            </Badge>
                        </Link>
                    </div>


                </div >
            </div >

        </>
    )
}

export default Navbar;