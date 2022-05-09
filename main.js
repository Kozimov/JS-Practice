let age = 16;
let userAge = prompt("yoshingizni kiriting...");

if (userAge < age){
    console.log(`Sizning yoshingiz ${userAge} yoshda. Passport olish yoshi ${age} dan boshlab`);
}
else if(userAge > age){
    console.log(`Sizning yoshinigiz ${age} dan katta va siz Passport olishingiz mumkin`);
}
else{
    console.log(`Sizning yoshingiz belgilangan ${age} yoshda va Siz Passport olishingiz mumkin`);
}


