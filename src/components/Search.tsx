import React, { useState, useEffect, useRef } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import classNames from 'classnames';
import "../styles/components/Search.scss";

const Search = () => {
    const searchRef = useRef(null);
    const [showSearch, setShowSearch] = useState(false);

    const showSearchHandler = () => {
        setShowSearch(true);
    };

    useEffect(() => {
        const onDocumentClick = (e: any) => {
            if (!e.path.includes(searchRef.current)) {
                setShowSearch(false);
            };
        }

        const onComponentUnmountHandler = () => {
            document.removeEventListener('click', onDocumentClick);
        }

        document.addEventListener('click', onDocumentClick);

        return onComponentUnmountHandler;
    }, []);


    return (
        <div className="search" ref={searchRef}>
            <Input.Search
                placeholder="Поиск"
                onSearch={() => { }}
                className={classNames("search-input", { '_active': showSearch })}
            />
            {
                !showSearch && <SearchOutlined
                    className="search-icon"
                    onClick={showSearchHandler} />
            }
        </div>
    )
};

export default Search;