import { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass, faEllipsisVertical, faLanguage, faCircleQuestion, faKeyboard } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import AccoutItem from '~/components/Accoutitem';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Menu from '~/components/Popper/Menu';
import MenuItem from '~/components/Popper/Menu/MenuItem';

const cx = classNames.bind(styles);
const MENU_ITEMS=[
    {
        icon: <FontAwesomeIcon icon={faLanguage}/>,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code:'en',
                    title: 'English'
                },
                {
                    code:'vi',
                    title: 'Tiếng Việt'
                }
            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion}/>,
        title: 'Feed back and help',
        to:'/feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard}/>,
        title: 'Keyboard shortcuts',
    }
];

function Header() {
    const [searchResult, setSearchResult] = useState([])

    useEffect(()=>{
        setTimeout(()=>{
            setSearchResult([]);
        },0)
    },[]);
    const handleMenuChange = (menuItem) => {
        switch(menuItem.type){
            case 'language':
            break;
            default:
        }
    }

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="Tiktok" />
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>
                                    Accouts
                                </h4>
                                <AccoutItem />
                                <AccoutItem />
                                <AccoutItem />
                                <AccoutItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search accouts and videos" spellCheck={false} />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('action')}>
                    <Button text >Up Load</Button>
                    <Button primary>Log In</Button>
                
                <Menu
                    items={MENU_ITEMS}
                    onChange={handleMenuChange}
                >
                    <button className={cx('more-btn')}>
                        <FontAwesomeIcon icon={faEllipsisVertical}/>
                    </button>
                </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;