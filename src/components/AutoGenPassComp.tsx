import React, { useState } from 'react'
import CheckBoxComp from './CheckBoxComp';

const AutoGenPassComp = () => {
    const passGenInit = {
        length: 8,
        uppercase: false,
        lowercase: false,
        numbers: false,
        symbols: false,
    };
    const [passwordGen, setPasswordGen] = useState(passGenInit);
    const [handleText, setHandleText] = useState<string>("");
    const [copied, setCopied] = useState(false);

    const patternPass = `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*()])[a-zA-Z0-9!@#$%^&*()]{8,20}$`;

    const handleChangeUppercase = () => {
        setPasswordGen({
            ...passwordGen,
            uppercase: !passwordGen.uppercase,
        });
    }

    const handleChangeLowercase = () => {
        setPasswordGen({
            ...passwordGen,
            lowercase: !passwordGen.lowercase,
        });
    }

    const handleChangeNumbers = () => {
        setPasswordGen({
            ...passwordGen,
            numbers: !passwordGen.numbers,
        });
    }

    const handleChangeSymbols = () => {
        setPasswordGen({
            ...passwordGen,
            symbols: !passwordGen.symbols,
        });
    };

    const setPasswordLength = (val: number) => {
        setPasswordGen({
            ...passwordGen,
            length: val,
        });
    }

    const generatePassword = () => {
        const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        const symbolsArray = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];

        const characterCodes = Array.from(Array(26)).map((e: any, i: any) => i + 97);

        const lowerCaseLetters = characterCodes.map((code: any) => String.fromCharCode(code));

        const upperCaseLetters = lowerCaseLetters.map((letter: string) =>
            letter.toUpperCase()
        );

        const { length, uppercase, lowercase, numbers, symbols }: any = passwordGen;

        const generateTheWord = (
            length: any,
            uppercase: boolean,
            lowercase: boolean,
            numbers: boolean,
            symbols: boolean
        ) => {
            const availableCharacters = [
                ...(lowercase ? lowerCaseLetters : []),
                ...(uppercase ? upperCaseLetters : []),
                ...(numbers ? numbersArray : []),
                ...(symbols ? symbolsArray : []),
            ];

            const shuffleArray = (array: Array<any>) => array.sort(() => Math.random() - 0.5);
            const characters = shuffleArray(availableCharacters).slice(0, length);
            setHandleText(characters.join(''));
        };

        generateTheWord(length, uppercase, lowercase, numbers, symbols);
    }

    const disableOrEnableAutoGenPassButton = () : boolean => {
        if (handleText.match(patternPass)) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <>
            <div>
                <div className="wrapper">
                    <div className="container wrapper-box">
                        <h2>Password Generator</h2>
                        <h4>The case pattern for gennerating passowrd with this rule: Having a lower letter, upper letter, number, symbol(!@#$%^&*()), and at least 8 characters</h4>
                        <div className="password-box">
                            <input
                                type="text"
                                value={handleText}
                                placeholder=""
                                autoComplete="off"
                                onChange={(e : any) => setHandleText(e.target.value)}
                                readOnly={true}
                            />
                            <button
                                className="copy-button"
                                onClick={() => {
                                    if (handleText.length > 0) {
                                        navigator.clipboard.writeText(handleText);
                                        setCopied(true);
                                        setInterval(() => {
                                            setCopied(false);
                                        }, 2000);
                                    }
                                }}
                            >
                                {copied ? 'Copied!' : 'Copy text'}
                            </button>
                        </div>
                        <br />
                        <div className="word-crieteria__box">
                            <div>
                                <label>Password length</label>
                            </div>
                            <div>
                                <input
                                    type="number"
                                    min="4"
                                    max="20"
                                    value={passwordGen.length}
                                    onChange={(e : any) => setPasswordLength(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="word-crieteria__box">
                            <div>
                                <label>Include uppercase letters</label>
                            </div>
                            <div>
                                <CheckBoxComp
                                    value={passwordGen.uppercase}
                                    onChange={handleChangeUppercase}
                                />
                            </div>
                        </div>
                        <div className="word-crieteria__box">
                            <div>
                                <label>Include lowercase letters</label>
                            </div>
                            <div>
                                <CheckBoxComp
                                    value={passwordGen.lowercase}
                                    onChange={handleChangeLowercase}
                                />
                            </div>
                        </div>
                        <div className="word-crieteria__box">
                            <div>
                                <label>Include numbers</label>
                            </div>
                            <div>
                                <CheckBoxComp
                                    value={passwordGen.numbers}
                                    onChange={handleChangeNumbers}
                                />
                            </div>
                        </div>
                        <div className="word-crieteria__box">
                            <div>
                                <label>Include symbols</label>
                            </div>
                            <div>
                                <CheckBoxComp
                                    value={passwordGen.symbols}
                                    onChange={handleChangeSymbols}
                                />
                            </div>
                        </div>
                        <div>
                            <button className="generate-button" onClick={generatePassword} disabled={disableOrEnableAutoGenPassButton()}>
                                Generate password
                            </button>
                        </div>

                        {
                            disableOrEnableAutoGenPassButton() === true && <>
                            <h2>The Password Generator is matched with the case partern regex.</h2>
                            </>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default AutoGenPassComp