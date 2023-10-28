import React, { useState , useEffect } from 'react'

const FormatHour = () => {
    let [time, setTime] = useState(new Date());

    setInterval(() => {
        setTime(new Date());
    },20000);
  
    let FormatHour = (date) => {
        let hour = date.getHours().toString().padStart(2, '0');
        let minute = date.getMinutes().toString().padStart(2, '0');

        return `${hour}:${minute}`;
    };
  return (
    <>
        {
            FormatHour(time)
        }
    </>
  )
}

export default FormatHour