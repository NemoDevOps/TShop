$(document).ready(function() {
    $('.nav a[href^="#"]').click(function() {//Выбрать ссылки из меню
        var offset = $('.nav').innerHeight() //Высота меню, получаем динамически
        var target = $(this).attr('href'); //Сохраняем значение атрибута href
        $('html, body').animate({ //Анимация прокрутки
            scrollTop: $(target).offset().top - offset //Вычитаем высоту меню
        }, 500);//Время анимации 
        $('nav a[href^="#"]').removeClass('active'); //Удаляем класс active у всех ссылок
        $(this).addClass('active'); //Добавляем класс active только к текущей ссылке
        return false;   //Отменяем стандартное поведение ссылки
    });
});