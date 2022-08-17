import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import styles from './SuggestAccounts.module.scss';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);
function SuggestedAccounts({label}) {
    return ( 
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>

            <AccountItem />
            <AccountItem />
            <AccountItem />

            <p className={cx('more-btn')}>See All</p>
        </div>
     );
}

SuggestedAccounts.propTypes = {
    label : PropTypes.string.isRequired,
}

export default SuggestedAccounts;