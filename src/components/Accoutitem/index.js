import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Accoutitem.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(styles);
function AccoutItem() {
    return ( 
        <div className={cx('wrapper')}>
            <Image className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/a5879364b532f631737f7f127e591f7c~c5_100x100.jpeg?x-expires=1660035600&x-signature=OVy8D777NYt2lwcnhTfT3KPvnFI%3D" alt='Anh'/>
            <div className={cx('info')}>
                <h4 className={cx('name')}>     
                    <span>Phạm Tuấn Anh</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>phamtuananh</span>
            </div>
        </div>
     );
}

export default AccoutItem;