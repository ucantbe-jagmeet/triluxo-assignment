import Image from 'next/image';
import LogoLg from '../assets/images/main-logo-lg.png'

const Logo = ({ classNames, wrapperClass }) => {
    return <div className={wrapperClass}>
        <Image src={LogoLg} alt="blogshow logo" className={classNames} />
    </div>;
};

export default Logo;
