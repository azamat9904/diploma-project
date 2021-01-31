import React, { FunctionComponent } from 'react';
import "../styles/components/Logo.scss";

type Props = {
    className?: string;
}

const Logo: FunctionComponent<Props> = ({ className }) => {
    return (
        <a className={['logo', className].join(" ")} href="/">
            <div className="logo__content">Cyber<span>Security</span></div>
        </a>
    )
}

export default Logo;
