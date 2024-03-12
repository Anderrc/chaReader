import { useEffect, useRef, useState } from 'react';
import style from './ComboBox.module.scss';

export const Combobox = ({ label, options, defaultValue, onChange }: any) => {
    const ref = useRef<HTMLInputElement>(null);

    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState('');

    const handleFocus = () => {
        setIsOpen(true);
    };

    const handleBlur = () => {
        setTimeout(() => {
            setIsOpen(false);
        }, 300);
    };

    const handleChange = (event: any) => {
        console.log('💩 ~ handleChange ~ event:', event);
        setSelectedValue(event.target.value);
    };

    const handleKeyDown = (event: any) => {
        if (event.key === 'ArrowDown') {
            event.preventDefault();
            ref.current?.focus();
        }
    };

    useEffect(() => {
        if (defaultValue?.voiceURI) {
            setSelectedValue(defaultValue.voiceURI);
        }
    }, [defaultValue]);

    return (
        <div className={style.combobox}>
            <label htmlFor="combobox-input">{label}</label>
            <input
                id="combobox-input"
                type="text"
                value={selectedValue}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onKeyDown={handleKeyDown}
                aria-label="Combobox input"
                aria-controls="combobox-options"
                ref={ref}
                readOnly
            />
            <ul
                id="combobox-options"
                role="listbox"
                aria-labelledby="combobox-input"
                style={{ display: isOpen ? 'block' : 'none' }}
            >
                {options.map((option: any) => (
                    <li
                        key={option.value}
                        role="option"
                        onClick={() => {
                            setSelectedValue(option.value);
                            onChange({ target: { value: option.value } });
                        }}
                    >
                        {option.label}
                    </li>
                ))}
            </ul>
        </div>
    );
};
