// showDeveloperInfo('Illia', 'Kaushan')
// querySAll()
// getElById()
// userDialog()
// compareStrings()

function querySAll() {
    const a = document.querySelectorAll('li a');
    console.log(a)
}

function getElById() {
    const el = document.getElementById('mainLink')
    console.log(el);
}

function userDialog() {
    let isBoss = confirm("Відповісте на 3 запитання для покращення роботи сайту?");
    let q1 = false;
    let q2 = false;
    let q3 = false;
    if(isBoss == true){
        let i = 1;
            while(i <= 3){
                switch(i)  {
                    case 1:
                    q1 = confirm("Чи подобається вам дизайн сайту?");
                    i++;
                    break;
                    case 2:
                    q2 = confirm("Чи все на сайті інтуїтивно зрозуміло?");
                    i++;
                    break;
                    case 3:
                    q3 = confirm("Чи гарно працює підтримка сайту?");
                    i++;
                    break;
                    default:
                    alert('Нема таких значень');
            }
        }
     alert("Дякуємо за відповіді!")
    }
    else
    {
        alert("Гарного користування сайтом!")
    }
}

function showDeveloperInfo(lastName, firstName, position = "Web Developer") {
    alert("Розробник: " + firstName + " " + lastName + "\nПосада: " + position);
}

function compareStrings() {
    let str1 = prompt("Введіть першу рядок")
    let str2 = prompt("Введіть другий рядок") 
    if (str1 > str2) {
        alert("Перший рядок більший: " + str1);
    } else if (str2 > str1) {
        alert("Другий рядок більший: " + str2);
    } else {
        alert("Рядки рівні за довжиною.");
    }
}
