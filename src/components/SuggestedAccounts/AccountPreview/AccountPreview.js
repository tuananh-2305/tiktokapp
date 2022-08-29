import classNames from 'classnames/bind';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './AccountPreview.module.scss';

const cx = classNames.bind(styles);
function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img className={cx('avatar')} src="https://www.facebook.com/anhdeptuachua/" alt="" />
                <div><Button className={cx('follow-btn')} primary>Follow</Button></div>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>phamtuananh</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Phạm Tuấn Anh</p>
                <p className={cx('analytic')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <label className={cx('label')}>Followers</label>
                    <strong className={cx('value')}>8.2M </strong>
                    <label className={cx('label')}>Likes</label>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
