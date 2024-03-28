function task1(){
    let getDayOfWeek = (data) => daysOfWeek[data.getDay()];
    let data = new Date();
    let daysOfWeek= [
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
