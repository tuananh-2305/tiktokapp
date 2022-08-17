import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './SuggestAccounts.module.scss';

const cx = classNames.bind(styles);
function AccountItem() {
    return <div className={cx('account-item')}>
        <img 
            className={cx('avatar')}
            src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1660896000&x-signature=5MBx3h6pgWURcTWziN3HDDAF1Fk%3D"
            alt=''
        />
        <div className={cx('item-info')}>
            <p className={cx('nickname')}>
                <strong>phamtuananh</strong>
                <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
            </p>
            <p className={cx('name')}>Phạm Tuấn Anh</p>
        </div>
    </div>;
}

export default AccountItem;