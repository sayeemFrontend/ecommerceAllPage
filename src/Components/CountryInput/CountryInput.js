import classes from "./CountryInput.module.css"
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { CountryObj, ReturnCountry } from './ReturnCountry/ReturnCountry';

const CountryInput = ({ countryNameList, setInputValue, label }) => {
    const [countries, updateCountries] = useState()
    const [inputTitle, updateInputTitle] = useState(CountryObj("BAN"))

    useEffect(() => {
        updateCountries(ReturnCountry(countryNameList))
    }, [])

    const [modal, setModal] = useState(false)
    const modalRef = useRef()

    const changeInputValue = (country) => {
        updateInputTitle(country)
        setModal(false)
    }
    const handleInputValue = (e) => {
        setInputValue && setInputValue(inputTitle.code + e.target.value)
    }

    window.addEventListener('click', (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            setModal(false)
        }

    });

    return (
        <div ref={modalRef} className={classes.customContainer} >

            {label ? <label className="text-capitalize"> {label} </label> : ""}

            <div className={classes.inputContainer}>
                <div onClick={() => setModal(!modal)} className={classes.countryContainer}> {inputTitle?.flag} <span className="">{inputTitle?.code}</span></div>
                <div className={classes.inputField}><input onChange={(e) => handleInputValue(e)} placeholder="Type your number" /></div>
            </div>
            <div className={modal ? classes.modalContainer : "d-none"}>
                {countries ? countries.map((country) => (
                    <li onClick={() => changeInputValue(country)} key={country.code} >
                        {country.flag} ({country.code})
                    </li>
                )) : null}
            </div>
        </div>

    );
}

export default CountryInput;