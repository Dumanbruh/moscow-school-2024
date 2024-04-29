import React from 'react'

const Information = () => {
    return (
        <div className={"relative mt-20 pb-20 px-6 md:px-64 overflow-hidden"}>
            <div className={"flex justify-center items-center flex-col gap-16"}>
                <p className='font-medium text-2xl text-blue' style={{ lineHeight: "32px", whiteSpace: "pre-line" }}>{`Приглашаем вас окунуться в мир цифровых видов спорта на киберарене! Вас ждут захватывающие соревнования и шоу-матчи: не пропустите эфир с знаменитым киберспортсменом - Михаилом Dosia Столяровым. Помимо всех активностей на киберарене пройдут финалы Московской школьной киберспортивной лиги по Dota 2 - приходите болеть за команду своей школы.

                    А еще на киберарене пройдет “Турнир директоров” - открытые соревнования для директоров образовательных организаций города Москвы по футбольному симулятору FC2024. Директора сразятся  со своими учениками, кто одержит победу, узнаем.

                    Кроме того, в течение всего дня все участники фестиваля смогут показать свое мастерство в танцевальном симуляторе Just Dance и VR-ритм симуляторе Beat Saber и примите участие в соревнованиях на консолях по футбольному симулятору FC2024.`}
                </p>
                <div className={"flex flex-col md:flex-row justify-center items-center gap-7"}>
                    <img src="/images/desktop/gto-games/register/1.png" alt="register-1" />
                    <img src="/images/desktop/gto-games/register/2.png" alt="register-2" />
                    <img src="/images/desktop/gto-games/register/3.png" alt="register-3" />
                </div>

                {/* <Button title={"ЗАРЕГИСТРИРОВАТЬСЯ"} onClick={() => { }} /> */}
                <div className={
                    "bg-[url('/images/desktop/home/activities/activities-bg.png')] bg-contain bg-no-repeat bg-left w-[100%] h-[600px] absolute bottom-[-20%] left-0 -z-10"
                } />
            </div>
        </div>
    )
}

export default Information