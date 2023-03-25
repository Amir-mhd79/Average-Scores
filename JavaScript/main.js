let fullName=prompt("لطفا نام و نام خانوادگی خود را وارد کنید.")
let countCourse=Number(prompt("لطفا تعداد دروس خود را وارد کنید."))
let sum=0
let sumMultiple=0
for(let i=1;i<=countCourse;i++){
    let points=Number(prompt("لطفا نمره درس خود را وارد کنید."))
    let multiple=Number(prompt("لطفا ضریب درس خود را وارد کنید."))
    sum+=points*multiple
    sumMultiple+=multiple
}
document.querySelector("h1").innerHTML=`کاربر گرامی <span class='underline'>${fullName}</span>، میانگین نمرات شما <span class='underline'>${sum/sumMultiple}</span> می باشد`
