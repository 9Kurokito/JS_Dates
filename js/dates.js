function task1(){
    let getDayOfWeek = (data) => daysOfWeek[data.getDay()];
    let data = new Date();
    let daysOfWeek = [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота'
    ];
    alert(getDayOfWeek(data));
}

function task2(){
    let dataCurrent = new Date();
    let dataNewYear = new Date(dataCurrent.getFullYear(), 0, 1);
    dataNewYear.setFullYear(dataCurrent.getFullYear() + 1);
    let diff = (dataNewYear - dataCurrent) / (1000 * 60 * 60 * 24);
    console.log(diff.toFixed(0));
}

function task3(){
    let getDayOfWeek = (data) => daysOfWeek[data.getDay()];
    let getPrevDay = (data) => daysOfWeek[data.getDay() - 1];
    let getNextday = (data) => daysOfWeek[data.getDay() + 1];
    let data = new Date();
    let daysOfWeek = [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота' 
    ];
    alert(`next: ${getNextday(data)}, curr: ${getDayOfWeek(data)}, prev: ${getPrevDay(data)}`);
}