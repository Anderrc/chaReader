'use client';
import { useEffect, useRef, useState } from 'react';
import style from './HomePage.module.scss';
import { Combobox } from 'components/components/atoms/Combobox/Combobox';

const HomePage = () => {
    const [text, setText] = useState('');
    const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
    const [selectedVoice, setSelectedVoice] = useState<string>('');

    const [isReading, setIsReading] = useState(false);
    const textRef = useRef(null);

    const speechSynthesis: SpeechSynthesis | null =
        typeof window === 'undefined' ? null : window.speechSynthesis;

    const readText = () => {
        if (!speechSynthesis || !text) {
            setIsReading(false);

            return;
        }

        const utterance = new SpeechSynthesisUtterance();
        utterance.text = text;
        if (selectedVoice !== '') {
            const newVoice = voices?.filter(
                (item) => item.voiceURI === selectedVoice
            )[0];
            if (newVoice !== undefined) utterance.voice = newVoice;
        }

        utterance.onend = () => setIsReading(false);

        speechSynthesis.speak(utterance);
        setIsReading(true);
    };

    const pauseReading = () => {
        if (isReading && speechSynthesis) {
            speechSynthesis.pause();
            setIsReading(false);
        }
    };

    useEffect(() => {
        if (speechSynthesis) setVoices(speechSynthesis.getVoices());
    }, [speechSynthesis]);

    return (
        <div className={style.home}>
            <h2>Texto a voz en línea</h2>
            <p>Convierte cualquier texto a voz en línea. ¡Es gratis!</p>
            <div className={style.home_container}>
                <div className={style.controls}>
                    <button
                        aria-label="Play"
                        onClick={readText}
                        disabled={isReading}
                    >
                        <i className="ri-play-line"></i>
                    </button>
                    <button
                        aria-label="Pause"
                        onClick={pauseReading}
                        disabled={!isReading}
                    >
                        <i className="ri-pause-line"></i>
                    </button>

                    <div className={style.selectCustom}>
                        <Combobox
                            options={voices?.map((item) => {
                                return {
                                    value: item.voiceURI,
                                    label: item.name
                                };
                            })}
                            onChange={(e: any) => {
                                setSelectedVoice(e.target.value);
                            }}
                            value={selectedVoice}
                            defaultValue={
                                voices?.filter((item) => item.default)[0]
                            }
                        />
                    </div>
                </div>
                <label htmlFor="text-to-read">
                    <textarea
                        id="text-to-read"
                        aria-label="text to read"
                        ref={textRef}
                        value={text}
                        className={style.textarea}
                        onChange={(e) => setText(e.target.value)}
                        spellCheck="false"
                    />
                </label>
            </div>
        </div>
    );
};

export default HomePage;
