import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Button from '../ui/button';
import { handleOpenNewTab } from '@/app/common/openNewTab';

interface InformationProps {
    isMobile?: boolean;
}

const Information = ({ isMobile }: InformationProps) => {
    const images = [
        "/images/desktop/extreme/information/1.png",
        "/images/desktop/extreme/information/2.png",
        "/images/desktop/extreme/information/3.png"
    ];

    const mobileImages = [
        "/images/mobile/extreme/information/1.png",
        "/images/mobile/extreme/information/2.png",
        "/images/mobile/extreme/information/3.png"
    ];

    return (
        <div className={"relative md:mt-20 pb-16 md:pb-8 px-5 sm:px-20 md:px-64"}>
            <div className={"flex justify-center items-center flex-col gap-16"}>
                {isMobile
                    ?
                    <p className='font-regular text-xl text-blue' style={{ lineHeight: "20px", whiteSpace: "pre-line" }}>{`Уважаемые спортсмены!

                    Мы приглашаем вас принять участие в уникальных соревнованиях, которые пройдут на фигурах высокого уровня в дисциплинах BMX и MTB. Так же Вас ждут мастер классы и лекторий от лучших райдеров BMX, MTB, Самокат и Скейт.

                    Что бы стать участником соревнований, вам необходимо подать заявку на сайте, заполнив форму и предоставив информацию о своих социальных сетях. На основании этих данных судьи примут решение о допуске до соревнований. После одобрения заявки, в день мероприятия вам необходимо пройти квалификацию из двух заездов, где в зачет идет лучшая попытка. Также вас ждет финал по аналогичной системе. Пожалуйста, помните, что решение судей не обсуждается.
                    
                    Каждый участник обязан иметь и предоставить подтверждение наличия действующей страховки на день проведения соревнования и раскатки.
                    
                    Не упустите возможность показать свои навыки в этом захватывающем мероприятии и побороться за главный денежный приз! Будем рады видеть вас на старте!
                    
                    Для участия скачайте форму заявки по кнопке ниже, заполните все поля и отправьте её на почту: fszayavki@mail.ru`}
                    </p>
                    :
                    <p className='font-medium text-2xl text-blue' style={{ lineHeight: "32px", whiteSpace: "pre-line" }}>{`Уважаемые спортсмены!

                    Мы приглашаем вас принять участие в уникальных соревнованиях, которые пройдут на фигурах высокого уровня в дисциплинах BMX и MTB. Так же Вас ждут мастер классы и лекторий от лучших райдеров BMX, MTB, Самокат и Скейт.

                    Что бы стать участником соревнований, вам необходимо подать заявку на сайте, заполнив форму и предоставив информацию о своих социальных сетях. На основании этих данных судьи примут решение о допуске до соревнований. После одобрения заявки, в день мероприятия вам необходимо пройти квалификацию из двух заездов, где в зачет идет лучшая попытка. Также вас ждет финал по аналогичной системе. Пожалуйста, помните, что решение судей не обсуждается.

                    Каждый участник обязан иметь и предоставить подтверждение наличия действующей страховки на день проведения соревнования и раскатки.

                    Не упустите возможность показать свои навыки в этом захватывающем мероприятии и побороться за главный денежный приз! Будем рады видеть вас на старте!

                    Для участия скачайте форму заявки по кнопке ниже, заполните все поля и отправьте её на почту: `}
                        <a href="mailto:fszayavki@mail.ru" style={{ textDecoration: "underline" }}>fszayavki@mail.ru</a>
                    </p>
                }
                <div className={"flex flex-row justify-center items-center gap-3 md:gap-7"}>
                    {isMobile
                        ?
                        mobileImages.map((image, index) => (
                            <LazyLoadImage effect="blur" key={index} src={image} alt={"tounament-" + index} />
                        ))
                        :
                        images.map((image, index) => (
                            <LazyLoadImage effect="blur" key={index} src={image} alt={"tounament-" + index} />
                        ))
                    }
                </div>
                <Button title={"ФОРМА ЗАЯВКИ"} onClick={() => { handleOpenNewTab("https://admin.patriot-sport.ru/admin/") }} />

                {isMobile
                    ?
                    <></>
                    :
                    <div className={
                        "bg-[url('/images/desktop/home/activities/activities-bg.png')] bg-contain bg-no-repeat bg-left w-[100%] h-[600px] absolute bottom-0 left-0 -z-10"
                    } />
                }
            </div>
        </div>
    )
}

export default Information