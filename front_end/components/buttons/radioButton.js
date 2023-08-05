import React, { useState } from 'react';
import styles from '../../styles/Donate/Donate.module.css';
import Image from 'next/image';

export default function RadioButton({ callBack, valueSelected }) {
    const [selected, setSelected] = useState(valueSelected);

    function binaryFlip() {
        setSelected(!selected);
        callBack(!selected);
    }

    return (
        <>
            {selected ? (
                <div style={{ alignSelf: "baseline"}}>
                    <Image
                        src="img/icons/checkGreen.svg"
                        alt="button"
                        width={24}
                        height={24}
                        quality={100}
                        onClick={binaryFlip}
                    />
                </div>
            ) : (
                <div onClick={binaryFlip} className={styles.radioButtonUnselected} />
            )}
        </>
    );
}
