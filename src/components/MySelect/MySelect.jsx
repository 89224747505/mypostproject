import React from 'react';
import classes from "./MySelect.module.css";

const MySelect = ({selectName, options, defaultValue, value, onChangeSelect}) => {
    const onChangeOptions = (event) => {
        onChangeSelect(event.target.value)
    }
    return (
    <div className={classes.selectWrapper}>
        <div className={classes.selectName}>{selectName}</div>
        <select
            className={classes.selectSort}
            value={value}
            onChange={onChangeOptions}>
            <option disabled value="">{defaultValue}</option>
            {options.map(op => <option key={op.value} value={op.value}>{op.name}</option>)}
        </select>
    </div>
    );
};

export default MySelect;