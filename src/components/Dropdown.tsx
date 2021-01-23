import React, {
    FunctionComponent,
    useState,
    useEffect,
    useRef
} from 'react';
import { DownOutlined } from '@ant-design/icons';
import { IDropdownElement } from '../types/interfaces';
import classNames from 'classnames';
import "../styles/components/Dropdown.scss";

type Props = {
    dropdownTitle: string,
    dropdownElements: IDropdownElement[],
}

const Dropdown: FunctionComponent<Props> = ({
    dropdownTitle,
    dropdownElements
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
        <div className="dropdown" ref={dropdownRef}>
            <span onClick={onDropdownClick} className="dropdown__title">{dropdownTitle} <DownOutlined className={classNames({ 'rotate': isOpen })} /></span>
            <ul className={classNames("dropdown__menu", { "_active": isOpen })}>
                {
                    dropdownElements.map((element, index) => (
                        <li className="dropdown__item" key={index}>
                            <a
                                href={element.href}
                                className="dropdown__link"
                            >
                                {element.title}
                            </a>
                        </li>
                    ))
                }
            </ul>

        </div>
    )
}

export default Dropdown;