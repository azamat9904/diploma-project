import React, {
    FunctionComponent,
    useState,
    useEffect,
    useRef
} from 'react';
import { DownOutlined } from '@ant-design/icons';
import { IDropdownElement } from '../types/interfaces';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import "../styles/components/Dropdown.scss";

type Props = {
    dropdownTitle: React.ReactNode,
    dropdownElements: IDropdownElement[],
    className?: string
}

const Dropdown: FunctionComponent<Props> = ({
    dropdownTitle,
    dropdownElements,
    className
}) => {

    const dropdownRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const onDocumentClick = (e: any) => {
            if (!e.path.includes(dropdownRef.current)) {
                setIsOpen(false);
            };
        }

        const onComponentUnmountHandler = () => {
            document.removeEventListener('click', onDocumentClick);
        }

        document.addEventListener('click', onDocumentClick);

        return onComponentUnmountHandler;
    }, []);


    const onDropdownClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={classNames('dropdown', className)} ref={dropdownRef}>
            <span onClick={onDropdownClick} className="dropdown__title">{dropdownTitle} <DownOutlined className={classNames({ 'rotate': isOpen })} /></span>
            <ul className={classNames("dropdown__menu", { "_active": isOpen })}>
                {
                    dropdownElements.map((element, index) => (
                        <li className="dropdown__item" key={index}>
                            <Link
                                to={element.href}
                                className="dropdown__link"
                            >
                                {element.title}
                            </Link>
                        </li>
                    ))
                }
            </ul>

        </div>
    )
}

export default Dropdown;