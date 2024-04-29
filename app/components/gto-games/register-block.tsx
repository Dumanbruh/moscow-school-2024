import React from 'react'

const Register = () => {
    return (
        <div className={"flex flex-col gap-16 mt-20 mb-64 px-64"}>
            <div dangerouslySetInnerHTML={{
                __html: `
                <div>
                    <p class='font-medium text-2xl text-blue' style='line-height: 32px; white-space: pre-line'>Все мы знаем, что такое комплекс ГТО, но же такое Игры ГТО?</p>
                    <p class='font-medium text-2xl text-blue' style='line-height: 32px; white-space: pre-line'>Рассказываем! Игры ГТО - это новый зрелищный вид спорта на базе нормативов ГТО. На отдельных дорожках для каждого участника установлены спортивные снаряды, которые необходимо пройти всей команде. Тут и упражнения на скорость, силу, гибкость и даже киберспорт.</p>
                
                    <p class='font-medium text-2xl text-blue' style='line-height: 32px; white-space: pre-line; margin-top: 20px'>Старт начинается двумя участниками команды одновременно, команде необходимо преодолеть эстафету за максимально короткое время. Что важно! Участник эстафеты может помочь однокоманднику на дистанции и завершить испытание за него.</p>
                    <p class='font-medium text-2xl text-blue' style='line-height: 32px; white-space: pre-line; margin-top: 20px'>К участию приглашаются:</p>

                    <ul style='list-style-type: disc; margin-left: 30px; margin-top: 20px'>
                        <li><p class='font-medium text-2xl text-blue' style='line-height: 32px; white-space: pre-line'>команды школьников в составе 4-х человек (2 мальчика и 2 девочки);</p></li>
                        <li><p class='font-medium text-2xl text-blue' style='line-height: 32px; white-space: pre-line'>команды студентов колледжей в составе 4-х человек (2 юноши и 2 девушки);</p></li>
                        <li><p class='font-medium text-2xl text-blue' style='line-height: 32px; white-space: pre-line'>корпоративные команды в составе 4-х человек (2 мужчины и 2 женщины).</p></li>
                    </ul>
                
                    <p class='font-medium text-2xl text-blue' style='line-height: 32px; white-space: pre-line; margin-top: 20px'>Кроме того любой желающий сможет попробовать свои силы в прохождении трассы, состав участников для свободного выполнения этапов эстафеты не менее 2 человек (регистрация будет проходить на самом мероприятии).</p>
                </div>`
            }} />
            <div className={"flex flex-col md:flex-row justify-center items-center gap-7"}>
                <img src="/images/desktop/gto-games/register/1.png" alt="register-1" />
                <img src="/images/desktop/gto-games/register/2.png" alt="register-2" />
                <img src="/images/desktop/gto-games/register/3.png" alt="register-3" />
            </div>
        </div>
    )
}

export default Register