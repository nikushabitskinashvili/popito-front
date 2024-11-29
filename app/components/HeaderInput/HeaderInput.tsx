import React from 'react';
import styles from './HeaderInput.module.scss';
import Image from 'next/image';

interface InputProps {
    type?: 'text' | 'email' | 'password' | 'number' | 'file';
    placeholder?: string;
    value?: string | number;
    name?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}

const HeaderInput: React.FC<InputProps> = ({
    type = 'text',
    placeholder = 'Search',
    value,
    name,
    onChange,
}) => {
    return (
        <div className={styles.inputWrapper}>
            <div className={styles.container}>
                <Image
                    src={'/icons/search.svg'}
                    alt={'search'}
                    width={20}
                    height={20}
                />
                <input
                    id={name}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    name={name}
                    onChange={onChange}
                    className={styles.input}
                />
            </div>
        </div >
    );
};

export default HeaderInput;
