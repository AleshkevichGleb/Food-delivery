import styles from "./FooterWeather.module.css"

const FooterWeather = ({weather}) => {
    const date = String(weather.time).match(/\d{4}-\d{2}-\d{2}/);
    const temperature = weather.temperature;

    let time = String(weather.time).match(/\d{2}:\d{2}/);
    time = String(time).split(':');

    let [hour, ] = time;

    hour = +hour + 3;
    if(hour > 24) {
        hour -= 24
    }

    +hour > 12  ? hour = +hour - 12 + ' PM' : hour = hour + ' AM';

    let tempStyle = '';
    if(temperature < 10) tempStyle = ' color: rgb(121, 142, 196)';
    if(temperature >= 10 && temperature < 20) tempStyle = 'rgb(77, 162, 105)';
    if(temperature >= 20) tempStyle = 'orange';

    if(!Object.keys(weather).length) {
        return '';
    }

    return(
        <div className={styles.weatherContainer}>
            <div>
                <span>{weather.city} </span>
                <span>{date}</span>
            </div>
            <div>
                <span>{hour} </span>
                <span style={{color: tempStyle}}>{temperature}	&#176;C</span>
            </div>
        </div>
    )
}

export default FooterWeather;