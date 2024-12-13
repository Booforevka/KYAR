document.getElementById('submitButton').addEventListener('click', () => {
    const firstName = document.getElementById('name').value;
    const middleName = document.getElementById('middlename').value;
    const lastName = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const faculty = document.getElementById('facultet').value;
    const group = document.getElementById('group').value;
    const course = document.getElementById('course').value;

    const socialNetworks = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
        .map(checkbox => checkbox.value)
        .join(', ');

    const output = `
        Имя: ${firstName}<br>
        Отчество: ${middleName}<br>
        Фамилия: ${lastName}<br>
        Email: ${email}<br>
        Телефон: +${phone}<br>
        Факультет: ${faculty}<br>
        Группа: ${group}<br>
        Курс: ${course}<br>
        Социальные сети: ${socialNetworks || 'Не указаны'}
    `;

    document.getElementById('formOutput').innerHTML = output;
});

